// pages/EnglishDemo.jsx
"use client"

import { useState } from "react"

import { HafsaMark } from "@/components/hafsa-mark"
import { AppleHelloEnglishEffect } from "@/registry/components/apple-hello-effect"

export default function AppleHelloEffect() {
  const [showMark, setShowMark] = useState(false)

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 50 }}>
      {!showMark && (
        <AppleHelloEnglishEffect
          speed={1}
          onAnimationComplete={() => setShowMark(true)}
        />
      )}

      {showMark && (
        <div style={{ marginTop: 20 }}>
          <HafsaMark text="HT" />
        </div>
      )}
    </div>
  )
}