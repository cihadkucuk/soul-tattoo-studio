import type { Locale } from "@/lib/i18n"

type Localized<T> = Record<Locale, T>

export type BlogPost = {
  id: number
  slug: string
  date: string
  readTime: string
  title: Localized<string>
  excerpt: Localized<string>
  description: Localized<string>
  content: Localized<string[]>
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "tattoo-aftercare-complete-guide",
    date: "January 15, 2025",
    readTime: "5 min read",
    title: {
      en: "Tattoo Aftercare: The Complete Guide",
      es: "Cuidado del Tatuaje: Guia Completa",
      cs: "Pec o Tetovani: KompletnI Pruvodce",
      de: "Tattoo Aftercare: Der Komplette Leitfaden",
    },
    excerpt: {
      en: "Learn how to properly care for your tattoo during the healing process.",
      es: "Aprende a cuidar tu tatuaje correctamente durante la cicatrizacion.",
      cs: "Naucte se, jak spravne pecovat o tetovani behem hojeni.",
      de: "Erfahre, wie du dein Tattoo waehrend der Heilung richtig pflegst.",
    },
    description: {
      en: "A practical aftercare roadmap covering cleaning, moisturizing, sun protection, and warning signs to watch after getting tattooed.",
      es: "Una guia practica de aftercare sobre limpieza, hidratacion, proteccion solar y senales de alerta tras tatuarte.",
      cs: "Prakticky plan pece o tetovani: cisteni, hydratace, ochrana pred sluncem a varovne priznaky.",
      de: "Ein praktischer Aftercare-Plan zu Reinigung, Feuchtigkeit, Sonnenschutz und Warnzeichen nach dem Tattoo.",
    },
    content: {
      en: [
        "Tattoo aftercare starts the moment your session ends. Keep the initial wrap on for the time your artist recommends, then wash your hands before touching the area.",
        "Clean the tattoo gently with lukewarm water and a fragrance-free cleanser. Pat dry with a clean paper towel and avoid rubbing, which can irritate fresh skin.",
        "Apply a thin layer of aftercare ointment in the first days, then move to an unscented moisturizer. The goal is to keep skin hydrated, not greasy or occluded.",
        "Avoid pools, saunas, and long hot baths while healing. Direct sun can fade pigment early, so keep the tattoo covered or use high-SPF sunscreen once the skin is fully healed.",
        "Flaking and mild itching are normal. Contact your artist or a medical professional if you notice unusual swelling, spreading redness, fever, or discharge.",
      ],
      es: [
        "El cuidado del tatuaje comienza al terminar la sesion. Mantén el vendaje el tiempo recomendado por tu artista y lava tus manos antes de tocar la zona.",
        "Limpia el tatuaje suavemente con agua tibia y un limpiador sin perfume. Seca con toques usando papel limpio y evita frotar para no irritar la piel reciente.",
        "Aplica una capa fina de pomada los primeros dias y luego cambia a hidratante sin fragancia. El objetivo es mantener la piel hidratada, no grasosa.",
        "Evita piscinas, saunas y banos calientes largos durante la curacion. El sol directo puede apagar el pigmento, por eso cubre el tatuaje o usa SPF alto cuando ya haya cicatrizado.",
        "La descamacion y un picor leve son normales. Contacta a tu artista o a un profesional medico si notas hinchazon anormal, enrojecimiento que se expande, fiebre o secrecion.",
      ],
      cs: [
        "Pece o tetovani zacina hned po skonceni sezeni. Nechte puvodni folii po dobu doporucenou tatourem a pred dotykem oblasti si umyjte ruce.",
        "Tetovani jemne cistete vlaznou vodou a pripravkem bez parfemace. Opatrne osuste cistym papirkem a netrete, aby nedoslo k podrazdeni.",
        "Prvni dny nanasejte tenkou vrstvu hojive masti, potom prejdete na neparfemovany krem. Cilem je hydratovana kuze, ne mastny film.",
        "Bhem hojeni se vyhybejte bazenum, saune a dlouhym horkym koupelim. Prime slunce muze pigment rychleji vyblednout, proto tetovani kryjte nebo po zahojeni pouzivejte vysoky SPF.",
        "Loupani kuze a mirne svedeni jsou bezne. Pri neobvyklem otoku, siricim se zrudnuti, horecce nebo vytoku kontaktujte tatoura nebo lekare.",
      ],
      de: [
        "Die Tattoo-Pflege beginnt direkt nach deiner Session. Lass die erste Folie so lange drauf, wie dein Artist es empfiehlt, und wasche vor jeder Beruehrung deine Haende.",
        "Reinige das Tattoo vorsichtig mit lauwarmem Wasser und einem unparfuemierten Reiniger. Tupfe die Haut mit sauberem Papier trocken und vermeide Reiben.",
        "Trage in den ersten Tagen eine duenne Schicht Aftercare-Salbe auf und wechsle dann zu einer unparfuemierten Feuchtigkeitscreme. Die Haut soll hydratisiert, nicht fettig sein.",
        "Vermeide waehrend der Heilung Pools, Sauna und lange heisse Baeder. Direkte Sonne kann Pigmente frueh ausbleichen, also bedecke das Tattoo oder nutze nach der Heilung hohen SPF.",
        "Leichtes Pellen und Juckreiz sind normal. Kontaktiere deinen Artist oder medizinisches Personal bei ungewoehnlicher Schwellung, zunehmender Roetung, Fieber oder Ausfluss.",
      ],
    },
  },
  {
    id: 2,
    slug: "choosing-the-right-tattoo-design",
    date: "January 10, 2025",
    readTime: "7 min read",
    title: {
      en: "Choosing the Right Tattoo Design for You",
      es: "Como Elegir el Diseno de Tatuaje Ideal",
      cs: "Jak Vybrat Spravny Navrh Tetovani",
      de: "Das Richtige Tattoo-Design Fuer Dich Waehlen",
    },
    excerpt: {
      en: "Tips and advice for selecting a design that will stand the test of time.",
      es: "Consejos para elegir un diseno que se mantenga bien con el tiempo.",
      cs: "Tipy pro vyber navrhu, ktery obstoji i po letech.",
      de: "Tipps fuer ein Design, das auch langfristig gut funktioniert.",
    },
    description: {
      en: "How to choose a tattoo concept that fits your personal story, style references, placement, and long-term goals.",
      es: "Como elegir un concepto de tatuaje que encaje con tu historia, estilo, ubicacion y objetivos a largo plazo.",
      cs: "Jak vybrat koncept tetovani, ktery odpovida vasemu pribeh, stylu, umisteni a dlouhodobemu planu.",
      de: "So waehlst du ein Tattoo-Konzept, das zu deiner Geschichte, deinem Stil, der Platzierung und deinen langfristigen Zielen passt.",
    },
    content: {
      en: [
        "Start with meaning and intent: do you want a symbolic piece, a purely visual composition, or both. Clarity here helps your artist guide the design direction quickly.",
        "Collect references for mood, line quality, and composition instead of copying one image. Strong custom work usually combines several references into a unique layout.",
        "Placement matters as much as concept. Body curves, movement, and future expansion plans all influence readability over time.",
        "Think in terms of contrast and scale. Tiny details in small tattoos can blur as skin ages, while clean spacing and balanced dark-light areas age more predictably.",
        "Use consultation time to align on style, constraints, and budget. A good brief creates better art and prevents surprises on session day.",
      ],
      es: [
        "Empieza por el significado: quieres una pieza simbolica, algo puramente visual o ambos. Esta claridad ayuda al artista a orientar el diseno mas rapido.",
        "Reune referencias de ambiente, calidad de linea y composicion en vez de copiar una sola imagen. El trabajo personalizado fuerte combina varias referencias.",
        "La ubicacion importa tanto como el concepto. Las curvas del cuerpo, el movimiento y posibles ampliaciones futuras influyen en la legibilidad.",
        "Piensa en contraste y escala. Los detalles muy pequenos pueden perderse con el tiempo, mientras espacios limpios y buen balance de luces/sombras envejecen mejor.",
        "Aprovecha la consulta para alinear estilo, limites y presupuesto. Un buen briefing mejora el resultado y evita sorpresas el dia de la sesion.",
      ],
      cs: [
        "Zacnete vyznamem a zamerem: chcete symbolicky motiv, ciste vizualni kompozici, nebo oboji? Jasna predstava pomuze tatourovi rychleji navrhnout smer.",
        "Shromazdte reference pro atmosferu, kvalitu linek a kompozici misto kopirovani jednoho obrazku. Kvalitni custom navrh obvykle kombinuje vice podnetu.",
        "Umisteni je stejne dulezite jako koncept. Krivky tela, pohyb i planovane rozsireni ovlivnuji, jak bude tetovani citelne v case.",
        "Premyslejte v kontrastu a meritku. Velmi jemne detaily v malych tetovanich se mohou casem slivat, zatimco ciste rozestupy starnou lepe.",
        "Behem konzultace sjednotte styl, omezeni a rozpocet. Dobry brief prinasi lepsi vysledek a mene prekvapeni v den tetovani.",
      ],
      de: [
        "Starte mit Bedeutung und Absicht: willst du ein symbolisches Motiv, eine rein visuelle Komposition oder beides? Diese Klarheit hilft deinem Artist sofort.",
        "Sammle Referenzen fuer Stimmung, Linienqualitaet und Komposition, statt ein Bild zu kopieren. Starkes Custom Work kombiniert meist mehrere Quellen.",
        "Die Platzierung ist genauso wichtig wie das Konzept. Koerperform, Bewegung und spaetere Erweiterungen beeinflussen die Lesbarkeit auf Dauer.",
        "Denke in Kontrast und Groesse. Sehr kleine Details koennen mit der Zeit verschwimmen, waehrend klare Abstaende und gute Hell-Dunkel-Balance besser altern.",
        "Nutze die Beratung, um Stil, Rahmen und Budget abzugleichen. Ein gutes Briefing bringt bessere Kunst und weniger Ueberraschungen am Session-Tag.",
      ],
    },
  },
  {
    id: 3,
    slug: "fine-line-tattoos-timeless-elegance",
    date: "January 5, 2025",
    readTime: "6 min read",
    title: {
      en: "Fine-Line Tattoos: Timeless Elegance",
      es: "Tatuajes Fine-Line: Elegancia Atemporal",
      cs: "Fine-Line Tetovani: Nadcasova Elegance",
      de: "Fine-Line Tattoos: Zeitlose Eleganz",
    },
    excerpt: {
      en: "Explore the artistry and appeal of minimalist fine-line tattoo work.",
      es: "Descubre el arte y atractivo del tatuaje fine-line minimalista.",
      cs: "Objevte kouzlo minimalistickeho fine-line tetovani.",
      de: "Entdecke die Kunst und Wirkung minimalistischer Fine-Line Tattoos.",
    },
    description: {
      en: "A closer look at fine-line tattoo aesthetics, who they suit best, and how to keep crisp lines looking sharp over time.",
      es: "Una mirada al estilo fine-line, para quien funciona mejor y como mantener lineas limpias con el paso del tiempo.",
      cs: "Pohled na estetiku fine-line tetovani, pro koho je vhodne a jak udrzet ostre linky dlouhodobe.",
      de: "Ein genauer Blick auf Fine-Line Aesthetik, fuer wen sie passt und wie klare Linien lange erhalten bleiben.",
    },
    content: {
      en: [
        "Fine-line tattoos focus on precision, restraint, and clean composition. They are ideal for minimalist concepts, delicate symbols, and typography-driven pieces.",
        "Because line weight is subtle, artist technique is critical. Consistent depth and steady hand movement produce even healing and reduce patchiness.",
        "Placement choices affect longevity. Areas with heavy friction or frequent sun exposure can cause quicker softening of very thin lines.",
        "Aftercare discipline is essential for preserving clarity. Hydration, sun protection, and avoiding premature picking all protect line definition.",
        "When planned carefully, fine-line work can remain elegant and readable for years while keeping a light visual footprint on the skin.",
      ],
      es: [
        "Los tatuajes fine-line se basan en precision, control y composicion limpia. Son ideales para conceptos minimalistas, simbolos delicados y tipografia.",
        "Como el grosor de linea es sutil, la tecnica del artista es clave. Profundidad constante y mano estable favorecen una curacion uniforme.",
        "La ubicacion afecta la durabilidad. Zonas con mucha friccion o sol frecuente pueden suavizar mas rapido las lineas finas.",
        "Una buena rutina de aftercare es esencial para conservar nitidez: hidratacion, proteccion solar y no retirar costras antes de tiempo.",
        "Con buena planificacion, el fine-line puede mantenerse elegante y legible durante anos con una presencia visual ligera.",
      ],
      cs: [
        "Fine-line tetovani stoji na presnosti, stridmosti a ciste kompozici. Hodi se pro minimalisticke motivy, jemne symboly i typografii.",
        "Protoze linky jsou subtilni, technika tatoura je zasadni. Konzistentni hloubka a stabilni ruka podporuji rovnomerne hojeni.",
        "Umisteni ovlivnuje trvanlivost. Mista s castym trenim nebo silnym slunecnim zatizenim mohou tenke linky zmekcit rychleji.",
        "Disciplinovana pece po tetovani je klicova: hydratace, ochrana pred sluncem a neodstranovani stroupku predcasne.",
        "Pri dobrem navrhu muze fine-line zustat elegantni a citelne dlouhe roky pri velmi decentnim vizualnim dojmu.",
      ],
      de: [
        "Fine-Line Tattoos setzen auf Praezision, Zurueckhaltung und klare Komposition. Sie eignen sich ideal fuer minimalistische Konzepte, feine Symbole und Typografie.",
        "Da die Linienstaerke sehr fein ist, ist die Technik des Artists entscheidend. Konstante Tiefe und ruhige Fuehrung sorgen fuer gleichmaessige Heilung.",
        "Die Platzierung beeinflusst die Haltbarkeit. Bereiche mit viel Reibung oder starker Sonne koennen sehr feine Linien schneller weicher wirken lassen.",
        "Konsequente Aftercare ist wichtig fuer klare Linien: Feuchtigkeit, Sonnenschutz und kein fruehes Abpulen.",
        "Mit sauberer Planung bleibt Fine-Line ueber Jahre elegant und gut lesbar, bei gleichzeitig leichter visueller Praesenz auf der Haut.",
      ],
    },
  },
]

