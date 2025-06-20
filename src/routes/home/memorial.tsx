import { BsArrowRight, BsBook, BsX } from "react-icons/bs";
import { Button, Divider } from "../../components/ui";

/* Editions */

import logo2024Asset from "../../assets/editions/2024/logo.png";
import scenario2024Asset from "../../assets/editions/2024/scenario.jpg";

import logo2023Asset from "../../assets/editions/2023/logo.png";
import scenario2023Asset from "../../assets/editions/2023/scenario.jpg";

import logo2022Asset from "../../assets/editions/2022/logo.png";
import scenario2022Asset from "../../assets/editions/2022/scenario.jpg";

import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useMemo, useState } from "react";
import logo2021Asset from "../../assets/editions/2021/logo.png";
import scenario2021Asset from "../../assets/editions/2021/scenario.jpg";

const editions = {
  "2024": {
    logo: logo2024Asset,
    scenario: scenario2024Asset,
    title: "Tempo",
    description:
      "O evento propôs uma reflexão sobre o tempo e suas múltiplas dimensões — memórias, ciclos e transformações. A estética e as experiências giraram em torno da passagem do tempo no audiovisual e na vida.",
  },
  "2023": {
    logo: logo2023Asset,
    scenario: scenario2023Asset,
    title: "Noite do Horror",
    description:
      "Inspirado no universo dos filmes de terror, trouxe uma ambientação sombria, com referências a clássicos do gênero. Toda a experiência foi pensada para gerar tensão, suspense e diversão.",
  },
  "2022": {
    logo: logo2022Asset,
    scenario: scenario2022Asset,
    title: "Circus",
    description:
      "Com uma estética vibrante e lúdica, o tema mergulhou no universo do circo, valorizando a criatividade, a diversidade e o encantamento dos espetáculos.",
  },
  "2021": {
    logo: logo2021Asset,
    scenario: scenario2021Asset,
    title: "Aperte o Play",
    description:
      "A proposta foi transportar os participantes para o universo digital e das plataformas de streaming. O evento celebrou a cultura do audiovisual na era dos conteúdos sob demanda e das mídias digitais.",
  },
};

interface CardProps {
  logo: string;
  scenario: string;
  year: string;
  onClick: () => void;
}

function Card(props: CardProps) {
  const { logo, scenario, year, onClick } = props;
  return (
    <motion.div
      layoutId={year}
      onClick={onClick}
      className="bg-background-dt hover:border-secondary relative h-96 w-full cursor-pointer overflow-hidden rounded-md border-2 border-transparent transition-all"
    >
      <motion.img
        layout="position"
        layoutId={`background-${year}`}
        src={scenario}
        className="absolute top-[50%] h-full translate-y-[-50%] object-cover"
      />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-black/50 backdrop-blur-[2px]">
        <motion.img
          layoutId={`icon-${year}`}
          className="absolute top-[50%] left-[50%] h-[40%] w-auto translate-[-50%] select-none"
          src={logo}
        />

        <motion.span
          layout="size"
          layoutId={`year-${year}`}
          className="mt-auto mb-2 flex h-fit w-full justify-center text-neutral-400 select-none"
        >
          {year}
        </motion.span>
      </div>
    </motion.div>
  );
}

interface ActiveCardProps {
  activeYear: keyof typeof editions;
  clearActive: () => void;
}

function ActiveCard(props: ActiveCardProps) {
  const { activeYear, clearActive } = props;
  const edition = useMemo(() => editions[activeYear], [activeYear]);

  return (
    <motion.div
      layout
      className="absolute top-0 left-0 z-20 flex h-full w-full items-center justify-center"
    >
      <motion.div
        layoutId={activeYear}
        className="bg-background-dt border-secondary relative h-full w-full overflow-hidden rounded-lg border-2"
      >
        <motion.img
          layoutId={`background-${activeYear}`}
          src={edition.scenario}
          className="absolute top-[50%] w-full translate-y-[-50%]"
        />

        <div className="relative z-10 flex h-full w-full flex-col gap-6 bg-black/70 px-6 pt-6 pb-2 backdrop-blur-[2px]">
          <div className="flex h-fit w-full">
            <motion.img
              layoutId={`icon-${activeYear}`}
              className="w-16 origin-center select-none"
              src={edition.logo}
            />
            <motion.div
              layout="position"
              className="mr-0 ml-auto h-fit w-fit cursor-pointer rounded-sm bg-black/60 p-1"
              onClick={() => clearActive()}
            >
              <BsX className="text-secondary text-3xl" />
            </motion.div>
          </div>

          <motion.div
            layout="position"
            className="flex h-fit w-full flex-col gap-2"
          >
            <span className="font-grotesk text-5xl">{edition.title}</span>
            <span className="max-w-[50%]">{edition.description}</span>
          </motion.div>

          <motion.span
            layoutId={`year-${activeYear}`}
            className="mt-auto flex h-fit w-full text-neutral-400 select-none"
          >
            {activeYear}
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Memorial() {
  const [activeId, setActiveId] = useState<ActiveCardProps["activeYear"] | "">(
    "",
  );

  return (
    <div id="memorial" className="flex h-fit w-full justify-center py-20">
      <div className="flex h-fit w-[72vw] flex-col">
        <div className="flex w-full items-center justify-end">
          <BsBook className="text-primary mr-auto ml-0 text-4xl" />

          <div className="relative h-fit w-fit">
            <span className="font-grotesk relative z-10 text-6xl">
              MEMORIAL DE OURO
            </span>

            <Divider
              color="var(--color-accent)"
              className="absolute bottom-[-65%] left-[-5%] h-full w-[110%]"
              width={3}
              roughness={5}
              seed={137}
            />
          </div>
        </div>

        <span className="mt-20 text-lg">
          Se interessou pelo evento? Então vale a pena conhecer o nosso
          memorial, um espaço cuidadosamente pensado para preservar a memória,
          celebrar conquistas e refletir sobre a trajetória que nos trouxe até
          aqui. Confira algumas edições passadas do Loco de Ouro logo abaixo e
          caso desejar, acesse a página feita especialmente para o nosso
          passado.
        </span>

        <LayoutGroup>
          <AnimatePresence>
            <motion.div className="relative mt-20 h-fit w-full">
              <div className="grid h-fit w-full grid-cols-4 gap-5">
                {Object.entries(editions)
                  .sort((a, b) => Number(b[0]) - Number(a[0]))
                  .map((row) => (
                    <Card
                      key={row[0]}
                      year={row[0]}
                      logo={row[1].logo}
                      scenario={row[1].scenario}
                      onClick={() =>
                        setActiveId(row[0] as ActiveCardProps["activeYear"])
                      }
                    />
                  ))}
              </div>

              {activeId !== "" && (
                <ActiveCard
                  activeYear={activeId}
                  clearActive={() => setActiveId("")}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </LayoutGroup>

        <div className="mt-5 flex w-full justify-end">
          <Button variant="primary">
            Acesse o Memorial
            <BsArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Memorial;
