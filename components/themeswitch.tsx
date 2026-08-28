"use client"


import { useTheme } from "next-themes"
import { Switch } from "./ui/switch"

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Switch
      checked={resolvedTheme === "dark"}
      onCheckedChange={(checked) =>
        setTheme(checked ? "dark" : "light")
      }
    />
  )
}