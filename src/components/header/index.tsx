import { cn } from "@sglara/cn";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import logoAsset from "../../assets/logo.png";
import Navlink from "./navlink";

interface HeaderProps {
  active: boolean;
}

function Header(props: HeaderProps) {
  const { active } = props;
  const scroll = useScroll();
  const [blurried, setBlurried] = useState(false);

  useMotionValueEvent(scroll.scrollYProgress, "change", (latest) =>
    setBlurried(latest > 0),
  );

  return (
    <motion.div
      className={cn(
        "fixed z-30 flex h-fit w-full items-center justify-center py-4",
        {
          "bg-background/75 border-b-foreground border-b": active,
          "backdrop-blur-xl": blurried,
        },
      )}
    >
      <div className="flex h-fit w-[72vw] items-center">
        <img src={logoAsset} className="w-16" />
        <div className="mx-auto flex h-fit w-fit gap-6">
          <Navlink title="Início" path="/" />
          <Navlink title="Indicados" path="/nominees" />
          <Navlink title="Curtas" path="/shortfilms" />
          <Navlink title="Memorial" path="/memorial" />
          <Navlink title="Equipe" path="/team" />
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
