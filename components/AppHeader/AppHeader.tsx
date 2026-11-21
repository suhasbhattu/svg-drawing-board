import {
  Circle,
  Download,
  Minus,
  MousePointer2,
  Pencil,
  RectangleHorizontal,
  TypeOutline,
} from "lucide-react"
import { Button } from "../ui/button"
import { Mode, Shape } from "@/app/page"

interface AppHeaderProps {
  selectedShape: Shape
  onSelectShape: (shape: Shape) => void
  selectedMode: Mode
  onSelectMode: (mode: Mode) => void
}

export const AppHeader = (props: AppHeaderProps) => {
  const { onSelectMode, onSelectShape, selectedMode, selectedShape } = props
  const onShapeClick = (shape: Shape) => {
    onSelectShape(shape)
  }
  const onModeClick = (mode: Mode) => {
    onSelectMode(mode)
  }

  return (
    <div className="header flex-rol flex h-12 items-center justify-between px-32 py-2">
      <h1>SVG Drawing Board</h1>
      <div className="toolbar flex-rol flex items-center gap-2 rounded-xl bg-background p-1 px-2 shadow-lg">
        <Button
          className={"rounded-md text-xs"}
          variant={selectedMode === "drawing" ? "default" : "ghost"}
          size={"icon-sm"}
          aria-label="drawing"
          onClick={() => {
            onSelectMode("drawing")
          }}
        >
          <Pencil />
        </Button>
        <Button
          className={"rounded-md text-xs"}
          variant={selectedMode === "selection" ? "default" : "ghost"}
          size={"icon-sm"}
          aria-label="selection"
          onClick={() => {
            onSelectMode("selection")
          }}
        >
          <MousePointer2 />
        </Button>
        <div className="h-4 w-px bg-border"></div>
        <Button
          className={"rounded-md text-xs"}
          variant={selectedShape === "line" ? "default" : "ghost"}
          size={"icon-sm"}
          aria-label="line"
          onClick={() => {
            onShapeClick("line")
          }}
        >
          <Minus />
        </Button>
        <Button
          className={"rounded-md text-xs"}
          variant={selectedShape === "rectangle" ? "default" : "ghost"}
          size={"icon-sm"}
          aria-label="rectangle"
          onClick={() => {
            onShapeClick("rectangle")
          }}
        >
          <RectangleHorizontal />
        </Button>
        <Button
          className={"rounded-md text-xs"}
          variant={selectedShape === "circle" ? "default" : "ghost"}
          size={"icon-sm"}
          aria-label="circle"
          onClick={() => {
            onShapeClick("circle")
          }}
        >
          <Circle />
        </Button>
        <Button
          className={"rounded-md text-xs"}
          variant={selectedShape === "text" ? "default" : "ghost"}
          size={"icon-sm"}
          aria-label="text"
          onClick={() => {
            onShapeClick("text")
          }}
        >
          <TypeOutline />
        </Button>
        <div className="h-4 w-px bg-border"></div>
        <Button variant={"ghost"} size={"icon-sm"} aria-label="download">
          <Download />
        </Button>
      </div>
    </div>
  )
}

export default AppHeader
