"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

type HafsaMarkProps = {
  text?: string
  className?: string
} & React.ComponentProps<typeof motion.svg>

export function HafsaMark({
  text = "HT",
  className,
  ...props
}: HafsaMarkProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 128"
      className={cn("h-45 w-45", className)}
      {...props}
    >
      <motion.text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'Futura','Century Gothic','Trebuchet MS','Gill Sans',sans-serif"
        fontSize="120"
        fontWeight="900"
        letterSpacing="6"
        stroke="currentColor"
        strokeWidth="2"
        fill="transparent"
        style={{ textTransform: "uppercase" }}

        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: 1,
          opacity: 1,
          fill: "currentColor",
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          fill: { delay: 2, duration: 0.6 },
        }}
      >
        {text}
      </motion.text>
    </motion.svg>
  )
}

export function getMarkSVG(color: string, text: string = "HT") {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 128">
  <text
    x="50%"
    y="55%"
    text-anchor="middle"
    dominant-baseline="middle"
    font-family="Futura, Century Gothic, Trebuchet MS, Gill Sans, sans-serif"
    font-size="72"
    font-weight="900"
    fill="${color}"
    letter-spacing="6"
    style="text-transform:uppercase"
  >
    ${text}
  </text>
</svg>
`
}