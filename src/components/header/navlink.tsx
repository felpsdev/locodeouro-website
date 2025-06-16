import { cn } from "@sglara/cn";
import { useMemo } from "react";
import { useLocation } from "react-router";

interface NavlinkProps {
  title: string;
  path: string;
}

function Navlink(props: NavlinkProps) {
  const { title, path } = props;
  const location = useLocation();
  const isActive = useMemo(
    () => location.pathname === path,
    [location.pathname, path],
  );

  return (
    <div className="group relative h-fit w-fit cursor-pointer py-2 text-xl leading-none select-none">
      <span
        className={cn("relative z-10 transition-all", {
          "group-hover:text-text/70": !isActive,
        })}
      >
        {title}
      </span>
      <div
        className={cn(
          "bg-accent absolute bottom-0 -z-10 h-1 w-0 rounded-sm transition-all",
          {
            "w-full": isActive,
          },
        )}
      />
    </div>
  );
}

export default Navlink;
