// "use client"

// import { motion } from "motion/react"
// import type { ComponentProps } from "react"
// import { cn } from "@/lib/utils"

// const initialProps = {
//   pathLength: 0,
//   opacity: 0,
// }

// const animateProps = {
//   pathLength: 1,
//   opacity: 1,
// }

// type HafsaHelloEffectProps = Omit<
//   ComponentProps<typeof motion.svg>,
//   "onAnimationComplete"
// > & {
//   speed?: number
//   onAnimationComplete?: () => void
// }

// export function HafsaHelloEffect({
//   className,
//   speed = 1,
//   onAnimationComplete,
//   ...props
// }: HafsaHelloEffectProps) {
//   const calc = (x: number) => x * speed

//   return (
//     <motion.svg
//       className={cn("h-16", className)}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 900 200"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="12"
//       initial={{ opacity: 1 }}
//       {...props}
//     >

//       {/* H */}
//       <motion.path
//         d="M20 170 L20 40 M20 110 L80 110 M80 40 L80 170"
//         strokeLinecap="round"
//         initial={initialProps}
//         animate={animateProps}
//         transition={{
//           duration: calc(0.6),
//           ease: "easeInOut",
//         }}
//       />

//       {/* a */}
//       <motion.path
//         d="M120 130 C120 90 180 90 180 130 C180 170 120 170 120 130"
//         strokeLinecap="round"
//         initial={initialProps}
//         animate={animateProps}
//         transition={{
//           duration: calc(0.6),
//           delay: calc(0.5),
//         }}
//       />

//       {/* f */}
//       <motion.path
//         d="M220 170 L220 70 M200 90 L250 90"
//         strokeLinecap="round"
//         initial={initialProps}
//         animate={animateProps}
//         transition={{
//           duration: calc(0.5),
//           delay: calc(1),
//         }}
//       />

//       {/* s */}
//       <motion.path
//         d="M300 100 C260 60 340 60 300 100 C260 140 340 140 300 180"
//         strokeLinecap="round"
//         initial={initialProps}
//         animate={animateProps}
//         transition={{
//           duration: calc(0.7),
//           delay: calc(1.5),
//         }}
//       />

//       {/* a */}
//       <motion.path
//         d="M360 130 C360 90 420 90 420 130 C420 170 360 170 360 130"
//         strokeLinecap="round"
//         initial={initialProps}
//         animate={animateProps}
//         transition={{
//           duration: calc(0.6),
//           delay: calc(2),
//         }}
//       />

//       {/* T */}
//       <motion.path
//         d="M480 40 L560 40 M520 40 L520 170"
//         strokeLinecap="round"
//         initial={initialProps}
//         animate={animateProps}
//         transition={{
//           duration: calc(0.5),
//           delay: calc(2.5),
//         }}
//       />

//       {/* i */}
//       <motion.path
//         d="M600 90 L600 170"
//         strokeLinecap="round"
//         initial={initialProps}
//         animate={animateProps}
//         transition={{
//           duration: calc(0.4),
//           delay: calc(3),
//         }}
//       />

//       {/* m */}
//       <motion.path
//         d="M640 170 L640 100 C660 70 700 70 720 100 L720 170"
//         strokeLinecap="round"
//         initial={initialProps}
//         animate={animateProps}
//         transition={{
//           duration: calc(0.8),
//           delay: calc(3.3),
//         }}
//       />

//       {/* e */}
//       <motion.path
//         d="M760 130 C760 90 820 90 820 130 C820 170 760 170 760 130"
//         strokeLinecap="round"
//         initial={initialProps}
//         animate={animateProps}
//         transition={{
//           duration: calc(0.6),
//           delay: calc(4),
//         }}
//       />

//       {/* signature flourish */}
//       <motion.path
//         d="M840 120 C880 60 920 160 880 180"
//         strokeLinecap="round"
//         className="stroke-yellow-400"
//         initial={initialProps}
//         animate={animateProps}
//         transition={{
//           duration: calc(0.7),
//           delay: calc(4.6),
//         }}
//         onAnimationComplete={onAnimationComplete}
//       />

//     </motion.svg>
//   )
// }

"use client"

import { motion } from "framer-motion"

const LETTERS = [
  {
    d: "M 30,50 L 30,135 M 30,90 C 44,74 82,74 96,90 M 96,50 L 96,135",
    delay: 0,
    dur: 0.7,
  },
  {
    d: "M 158,82 C 153,60 112,62 112,96 C 112,128 158,128 158,98 L 158,135",
    delay: 0.65,
    dur: 0.6,
  },
  {
    d: "M 208,135 L 208,66 C 208,48 218,42 228,48 M 193,94 L 222,94",
    delay: 1.2,
    dur: 0.55,
  },
  {
    d: "M 264,84 C 246,68 224,81 237,97 C 250,112 268,123 249,136",
    delay: 1.7,
    dur: 0.55,
  },
  {
    d: "M 326,82 C 321,60 280,62 280,96 C 280,128 326,128 326,98 L 326,135",
    delay: 2.2,
    dur: 0.6,
  },
  { d: "M 25,183 L 108,183 M 67,183 L 67,268", delay: 2.95, dur: 0.55 },
  { d: "M 132,214 L 132,268", delay: 3.38, dur: 0.28 },
  {
    d: "M 150,268 L 150,213 C 165,186 200,186 215,213 C 230,186 265,186 280,213 L 280,268",
    delay: 3.58,
    dur: 0.8,
  },
  {
    d: "M 298,237 L 346,237 C 344,204 298,202 298,232 C 298,264 347,266 344,255",
    delay: 4.32,
    dur: 0.6,
  },
  {
    d: "M 363,268 L 363,213 C 376,188 406,188 420,213 L 420,268",
    delay: 4.87,
    dur: 0.55,
  },
  { d: "M 434,200 L 478,200 L 434,258 L 478,258", delay: 5.38, dur: 0.5 },
  {
    d: "M 533,217 C 528,194 487,197 487,225 C 487,253 533,253 533,224 L 533,268",
    delay: 5.85,
    dur: 0.6,
  },
  {
    d: "M 552,215 C 566,262 584,262 598,215 M 576,257 L 562,300",
    delay: 6.4,
    dur: 0.7,
  },
]

export default function HafsaHelloEffect() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
      <svg
        viewBox="0 0 660 320"
        style={{ width: "90%", maxWidth: 1000, height: "auto" }}
        fill="none"
      >
        {LETTERS.map((l, i) => (
          <motion.path
            key={i}
            d={l.d}
            stroke="white"
            strokeWidth={2} // thinner stroke
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: l.dur,
              delay: l.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Dot for "i" appears after stroke */}
        <motion.circle
          cx="132"
          cy="200"
          r={3} // smaller dot
          fill="white"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 3.68, duration: 0.25, ease: "easeOut" }}
        />
      </svg>
    </div>
  )
}
