import { format } from "date-fns"
import { remark } from "remark"
import remarkGfm from "remark-gfm"
import remarkMdx from "remark-mdx"

import { remarkComponent } from "@/lib/remark-component"

interface PostLike {
  content: string
  metadata: {
    title: string
    description: string
    updatedAt: string
  }
}

const processor = remark().use(remarkMdx).use(remarkComponent).use(remarkGfm)

export async function getLLMText(post: unknown) {
  const p = post as PostLike
  const processed = await processor.process({
    value: p.content,
  })

  return `# ${p.metadata.title}

${p.metadata.description}

${processed.value}

Last updated on ${format(new Date(p.metadata.updatedAt), "MMMM d, yyyy")}`
}
