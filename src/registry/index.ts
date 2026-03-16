import type { Registry } from "shadcn/schema"

import { hook } from "./hooks/_registry"
import { lib } from "./lib/_registry"

export const registry = {
  name: "ncdai",
  homepage: "https://chanhdai.com/components",
  items: [
    ...lib,
    ...hook,

  ],
} satisfies Registry
