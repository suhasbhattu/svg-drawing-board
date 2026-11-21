"use client"

import { AppHeader } from "@/components/AppHeader"
import { SVGPanel } from "@/components/SVGPanel"
import { useState } from "react"

export type Shape = "line" | "rectangle" | "circle" | "text"
export type Mode = "drawing" | "selection"

export const Page = () => {
  const [selectedShape, setSelectedShape] = useState<Shape>("line")
  const [selectedMode, setSelectedMode] = useState<Mode>("drawing")

  return (
    <div className="app grid h-screen grid-rows-[auto_minmax(0,1fr)] gap-4">
      <AppHeader
        selectedMode={selectedMode}
        onSelectMode={setSelectedMode}
        selectedShape={selectedShape}
        onSelectShape={setSelectedShape}
      />
      <SVGPanel />
    </div>
  )
}

export default Page
