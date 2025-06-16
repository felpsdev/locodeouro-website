import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import edgeEnd from "../../assets/landscape/edge_end.png";
import edgeStart from "../../assets/landscape/edge_start.png";

import layer01 from "../../assets/landscape/layer_1.png";
import layer02 from "../../assets/landscape/layer_2.png";

function YearTheme() {
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"],
  });

  const layer01Y = useTransform(() => -(scrollYProgress.get() * 500) + 400);
  const layer02Y = useTransform(() => -(scrollYProgress.get() * 850) + 550);
  const layer03X = useTransform(() => scrollYProgress.get() * 200);

  return (
    <div className="relative my-20">
      <img src={edgeStart} className="h-fit w-full rotate-180" />
      <div
        ref={contentRef}
        className="relative h-[100vh] overflow-hidden bg-[#bd343e]"
      >
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          <div className="flex w-[50vw] flex-col items-center gap-2">
            <span className="font-sancreek text-9xl text-[#edb674]">
              FAROESTE
            </span>
            <span className="font-grotesk text-2xl">TEMA DO ANO</span>
            <div className="mt-10 h-fit w-fit bg-[#412709] p-5">
              <span className="text-center text-lg text-[#edb674]">
                Assim como no velho oeste, onde é preciso coragem, estratégia e
                união para enfrentar os obstáculos, na universidade também
                lidamos com incertezas, superamos dificuldades e buscamos nosso
                espaço. Além disso, o faroeste traz uma estética divertida,
                cheia de elementos marcantes como chapéus, saloons e trilhas
                empoeiradas, que deixam o evento mais criativo, dinâmico e
                inesquecível.
              </span>
            </div>
          </div>
        </div>
        <motion.div
          style={{ x: layer03X }}
          className="absolute top-20 left-30 h-40 w-40 rounded-full bg-[#f3c973]"
        ></motion.div>
        <motion.div
          style={{ y: layer01Y }}
          className="absolute top-[80%] z-[2] h-[1000px] w-full bg-[#5e0812]"
        >
          <img src={layer01} className="absolute translate-y-[-100%]" />
        </motion.div>
        <motion.div
          style={{ y: layer02Y }}
          className="absolute top-[80%] z-[1] h-[1000px] w-full bg-[#89112d]"
        >
          <img src={layer02} className="absolute translate-y-[-100%]" />
        </motion.div>
      </div>
      <img src={edgeEnd} className="h-fit w-full" />
    </div>
  );
}

export default YearTheme;
