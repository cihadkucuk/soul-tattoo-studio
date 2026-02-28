import { NextResponse } from "next/server"

const NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M}\s'.-]{1,119}$/u
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_E164_PATTERN = /^\+[1-9]\d{6,14}$/
const INSTAGRAM_PATTERN = /^(?:@?[A-Za-z0-9._]{1,30}|https?:\/\/(?:www\.)?instagram\.com\/[A-Za-z0-9._]+(?:\/)?(?:\?.*)?)$/i
const MESSAGE_BLOCKLIST_PATTERN = /<\s*\/?\s*script\b|javascript:/i
const ALLOWED_SERVICES = new Set(["tattoo", "piercing", "training"])

type ContactPayload = {
  name: string
  email: string
  phone: string
  instagram: string
  service: string
  message: string
}

type ValidationResult =
  | { ok: true; payload: ContactPayload }
  | { ok: false; error: string; field?: "message" }

function normalizeString(value: unknown, maxLength: number) {
  if (typeof value !== "string") return ""
  return value.trim().slice(0, maxLength)
}

function validatePayload(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request payload." }
  }

  const data = body as Record<string, unknown>
  const serviceCandidate = normalizeString(data.service, 80).toLowerCase()

  const payload: ContactPayload = {
    name: normalizeString(data.name, 120),
    email: normalizeString(data.email, 200),
    phone: normalizeString(data.phone, 60).replace(/[\s()-]/g, ""),
    instagram: normalizeString(data.instagram, 120),
    service: ALLOWED_SERVICES.has(serviceCandidate) ? serviceCandidate : "tattoo",
    message: normalizeString(data.message, 3000),
  }

  if (!NAME_PATTERN.test(payload.name)) {
    return { ok: false, error: "Name must be 2-120 characters and contain valid letters only." }
  }

  if (!EMAIL_PATTERN.test(payload.email)) {
    return { ok: false, error: "Please provide a valid email address." }
  }

  if (!PHONE_E164_PATTERN.test(payload.phone)) {
    return { ok: false, error: "Please use phone with country code, e.g. +420605792545." }
  }

  if (payload.instagram && !INSTAGRAM_PATTERN.test(payload.instagram)) {
    return { ok: false, error: "Instagram must be @username or a valid instagram.com link." }
  }

  if (payload.message && payload.message.length < 5) {
    return { ok: false, field: "message", error: "Message is too short. Please add at least 5 characters." }
  }

  if (payload.message && MESSAGE_BLOCKLIST_PATTERN.test(payload.message)) {
    return { ok: false, field: "message", error: "Message contains blocked content." }
  }

  return { ok: true, payload }
}

function serviceLabel(service: string) {
  if (service === "piercing") return "Piercing"
  if (service === "training") return "Training"
  return "Tattoo"
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    return NextResponse.json({ error: "Contact delivery is not configured on the server yet." }, { status: 500 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 })
  }

  const validation = validatePayload(body)
  if (!validation.ok) {
    return NextResponse.json({ error: validation.error, field: validation.field }, { status: 400 })
  }

  const payload = validation.payload
  const telegramMessage = [
    "New contact form submission",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Instagram: ${payload.instagram || "-"}`,
    `Service: ${serviceLabel(payload.service)}`,
    `Message: ${payload.message || "-"}`,
    `Submitted: ${new Date().toISOString()}`,
  ].join("\n")

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        disable_web_page_preview: true,
      }),
    })

    const telegramData = (await response.json().catch(() => null)) as { ok?: boolean } | null
    if (!response.ok || telegramData?.ok === false) {
      return NextResponse.json({ error: "Unable to deliver your request right now." }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Unable to deliver your request right now." }, { status: 502 })
  }
}

