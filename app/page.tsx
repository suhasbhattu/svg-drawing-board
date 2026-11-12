"use client"

import { AppHeader } from "@/components/AppHeader"
import { SVGPanel } from "@/components/SVGPanel"
import { useState } from "react"

export type Shape = "line" | "rectangle" | "circle" | "text"

export const Page = () => {
  const [selectedShape, setSelectedShape] = useState<Shape | undefined>(
    undefined
  )

  return (
    <div className="app flex h-full flex-col gap-4">
      <AppHeader
        selectedShape={selectedShape}
        onSelectShape={setSelectedShape}
      />
      <SVGPanel />
    </div>
  )
}

export default Page
