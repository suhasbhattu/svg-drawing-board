import {
  Circle,
  Download,
  Minus,
  RectangleHorizontal,
  TypeOutline,
} from "lucide-react"
import { Button } from "../ui/button"
import { Shape } from "@/app/page"

interface AppHeaderProps {
  selectedShape: Shape | undefined
  onSelectShape: (shape: Shape) => void
}

export const AppHeader = (props: AppHeaderProps) => {
  const { selectedShape, onSelectShape } = props
  const onShapeClick = (shape: Shape) => {
    onSelectShape(shape)
  }

  return (
    <div className="header flex-rol flex h-12 items-center justify-between p-4">
      <h1>SVG Drawing Board</h1>
      <div className="toolbar flex-rol flex items-center gap-2 rounded-xl bg-background p-1 px-2 shadow-lg">
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
