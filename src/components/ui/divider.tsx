import { useEffect, useRef } from "react";
import roughjs from "roughjs";

interface DividerProps extends React.HTMLProps<HTMLDivElement> {
  color: string;
  roughness?: number;
  width?: number;
  seed?: number;
}

function Divider(props: DividerProps) {
  const { color, width = 2, roughness = 1, seed, ...rest } = props;
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;

    if (svg) {
      const rect = svg.getBoundingClientRect();
      const rc = roughjs.svg(svg);

      console.log(seed);

      const line = rc.line(
        10,
        rect.height / 2,
        rect.width - 10,
        rect.height / 2,
        {
          stroke: color,
          strokeWidth: width,
          roughness,
          seed,
        },
      );
      svg.appendChild(line);

      return () => {
        svg.removeChild(line);
      };
    }
  }, [svgRef, color, seed, width, roughness]);

  return (
    <div {...rest}>
      <svg ref={svgRef} className="h-full w-full" />
    </div>
  );
}

export default Divider;
