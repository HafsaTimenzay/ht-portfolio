import { EDUCATIONS } from "@/features/portfolio/data/educations"

const content = `# Education

${EDUCATIONS.map((school) => {
  return `## ${school.schoolName}

${school.level
  .map((level) => {
    const skills =
      level.skills?.map((skill) => skill).join(", ") || "N/A"

    return `### ${level.title}

University: ${level.university || school.schoolName}

Duration: ${level.formationPeriod.start} - ${
      level.formationPeriod.end || "Present"
    }

Skills: ${skills}

${level.description?.trim() || ""}`
  })
  .join("\n\n")}
`
}).join("\n\n")}
`

export const dynamic = "force-static"

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}