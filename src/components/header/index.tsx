import { cn } from "@sglara/cn";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import logoAsset from "../../assets/logo.png";
import Navlink from "./navlink";

interface HeaderProps {
  active: boolean;
}

const links = [
  ["Início", "/"],
  ["Indicados", "/nominees"],
  ["Curtas", "/shortfilms"],
  ["Memorial", "/memorial"],
  ["Equipe", "/team"],
];

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
        "fixed z-30 flex h-fit w-full items-center justify-center border-transparent py-4 transition-all",
        {
          "bg-background/75 border-b-foreground border-b py-5": active,
          "backdrop-blur-xl": blurried,
        },
      )}
    >
      <div className="flex h-fit w-[72vw] items-center">
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.75 }}
          src={logoAsset}
          className="w-16"
        />
        <div className="mr-0 ml-auto flex h-fit w-fit gap-6">
          {links.map((row, i) => (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2 + i * 0.05 }}
            >
              <Navlink title={row[0]} path={row[1]} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
