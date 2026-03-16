export type EducationLevelIcon =
  /** Icon key used to render the position category in the UI. */
  "code" | "design" | "education" | "business" | "idea"

export type EducationLevel = {
  id: string
  title: string
  /**
   * Employment period of the position.
   * Use "MM.YYYY" or "YYYY" format. Omit `end` for current roles.
   */
  formationPeriod: {
    /** Start date (e.g., "10.2022" or "2020"). */
    start: string
    /** End date; leave undefined for "Present". */
    end?: string
  }
  /** Full-time | Part-time | Contract | Internship, etc. */
  university?: string
  description?: string
  /** UI icon to represent the role type. */
  icon?: EducationLevelIcon
  skills?: string[]
  /** Whether the position is expanded by default in the UI. */
  isExpanded?: boolean
}

export type Education = {
  id: string
  schoolName: string
  /** URL to the school logo (absolute URL or path under /public). */
  schoolLogo?: string
  /** URL to the school's website. */
  schoolWebsite?: string
  /** Roles held at this school; keep newest first for display. */
  level: EducationLevel[]
  /** Marks the school as the current employer for highlighting. */
  isCurrentStudent?: boolean
}
