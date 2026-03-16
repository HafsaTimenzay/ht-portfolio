import Image from "next/image"
import React from "react"

import { UTM_PARAMS } from "@/config/site"
import { addQueryParams } from "@/utils/url"

import type { Education } from "../../types/educations"
import { EducationLevelItem } from "./education-level-item"

export function EducationItem({ education }: { education: Education }) {
  return (
    <div className="screen-line-after space-y-4 py-4">
      <div className="flex items-center gap-3">
        <div className="flex size-6 shrink-0 items-center justify-center select-none">
          {education.schoolLogo ? (
            <Image
              src={education.schoolLogo}
              alt={`${education.schoolName} logo`}
              width={24}
              height={24}
              quality={100}
              className="rounded-full"
              unoptimized
              aria-hidden
            />
          ) : (
            <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          )}
        </div>

        <h3 className="text-lg leading-snug font-semibold">
          {education.schoolWebsite ? (
            <a
              className="underline-offset-4 hover:underline"
              href={addQueryParams(education.schoolWebsite, UTM_PARAMS)}
              target="_blank"
              rel="noopener"
            >
              {education.schoolName}
            </a>
          ) : (
            education.schoolName
          )}
        </h3>

        {education.isCurrentStudent && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-info" />
            <span className="sr-only">Current Student</span>
          </span>
        )}
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {education.level.map((level) => (
          <React.Fragment key={level.id}>
            <EducationLevelItem level={level} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
