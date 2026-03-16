import React from "react"

import { EDUCATIONS } from "../../data/educations"
import { Panel, PanelHeader, PanelTitle } from "../panel"
import { EducationItem } from "./education-item"

export function Educations() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle>Education</PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {EDUCATIONS.map((education) => (
          <EducationItem key={education.id} education={education} />
        ))}
      </div>
    </Panel>
  )
}
