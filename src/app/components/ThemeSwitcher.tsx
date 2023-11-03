"use client";

import React from "react";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import SunIcon from '../../../public/Icons/SunIcon'
import MoonIcon from '../../../public/Icons/MoonIcon'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Switch
      size="lg"
      color='secondary'
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onValueChange={() => { setTheme(theme === "light" ? "dark" : "light") }}
    />
  )
};