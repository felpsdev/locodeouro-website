import { motion } from "motion/react";
import { BsTrophy } from "react-icons/bs";
import { Divider } from "../../components/ui";

/* Assets */
import grid01Asset from "../../assets/home/event/grid_01.jpg";
import grid02Asset from "../../assets/home/event/grid_02.jpg";
import grid03Asset from "../../assets/home/event/grid_03.jpg";

const viewanim = {
  transition: { delay: 0.25 },
  viewport: { once: true },
};

function Event() {
  return (
    <div id="event" className="mt-20 flex h-fit w-full justify-center py-20">
      <div className="flex h-fit w-[72vw] flex-col">
        <div className="flex w-full items-center">
          <motion.div
            className="relative h-fit w-fit"
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: -50, opacity: 0 }}
            {...viewanim}
          >
            <span className="font-grotesk relative z-10 text-6xl">
              NOSSO EVENTO
            </span>

            <Divider
              color="var(--color-accent)"
              className="absolute bottom-[-65%] left-[-5%] h-full w-[110%]"
              width={3}
              roughness={5}
              seed={955}
            />
          </motion.div>

          <BsTrophy className="text-primary mr-0 ml-auto text-4xl" />
        </div>

        <motion.span
          className="mt-20 text-lg"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -50, opacity: 0 }}
          {...viewanim}
        >
          O Loco de Ouro é um evento realizado pela Locomotiva, Empresa Jr. de
          Rádio e TV da Unesp de Bauru, em que filmes e produções audiovisuais
          realizados por estudantes universitários de todo o Brasil são
          selecionados, indicados a categorias, e exibidos na mostra
          competitiva. No último dia do evento, as produções vencedoras são
          anunciadas na nossa noite de gala, em que ocorre a premiação dos
          melhores filmes, julgados por importantes nomes do meio audiovisual
          brasileiro.
        </motion.span>

        <div className="mt-20 grid h-[800px] w-full grid-cols-4 grid-rows-3 gap-6">
          <motion.img
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            className="col-span-2 row-span-3 h-full w-full rounded-xl object-cover"
            src={grid03Asset}
            {...viewanim}
          />
          <motion.img
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: -100, opacity: 0 }}
            className="col-span-2 row-span-2 h-full w-full rounded-xl object-cover"
            src={grid01Asset}
            {...viewanim}
          />
          <motion.img
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            className="col-span-2 row-span-1 h-full w-full rounded-xl object-cover"
            src={grid02Asset}
            {...viewanim}
          />
        </div>

        <div className="mt-3 flex h-fit w-full justify-end text-sm opacity-50">
          Imagens da 10ª Edição - 2024
        </div>
      </div>
    </div>
  );
}

export default Event;
