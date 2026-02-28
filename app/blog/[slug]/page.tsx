import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BlogPostClient from "./BlogPostClient"
import { blogPosts } from "../posts"

type BlogPostPageProps = {
  params: Promise<{
    slug: string
  }>
}

function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Blog Post Not Found | SOUL Tattoo Atelier",
      description: "The blog post you are looking for does not exist.",
    }
  }

  return {
    title: `${post.title.en} | SOUL Tattoo Blog`,
    description: post.description.en,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}

