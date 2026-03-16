import type { LucideProps } from "lucide-react"
import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
  LightbulbIcon,
} from "lucide-react"

import type { EducationLevelIcon } from "../../types/educations"

const iconMap: Record<EducationLevelIcon, React.ComponentType<LucideProps>> = {
  code: CodeXmlIcon,
  design: DraftingCompassIcon,
  education: GraduationCapIcon,
  business: BriefcaseBusinessIcon,
  idea: LightbulbIcon,
}

export function EducationIcon({
  icon,
  ...props
}: {
  icon: EducationLevelIcon | undefined
} & LucideProps) {
  const IconComponent = icon ? iconMap[icon] : BriefcaseBusinessIcon
  return <IconComponent {...props} />
}
