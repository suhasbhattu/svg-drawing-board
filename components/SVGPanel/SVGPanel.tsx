import { useEffect, useRef } from "react"

export const SVGPanel = () => {
  const svgRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    const svgLeft = svgRef.current?.getBoundingClientRect().left
    const svgTop = svgRef.current?.getBoundingClientRect().top
    console.log(svgLeft, svgTop)
  }, [])

  return (
    <div className="svgPanel flex flex-row justify-center">
      <svg
        className="bg-white"
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        height={800}
        width={1600}
        viewBox="0 0 800 1600"
        onMouseDown={(event) => console.log(event)}
        onMouseUp={(event) => console.log(event)}
      ></svg>
    </div>
  )
}

export default SVGPanel
