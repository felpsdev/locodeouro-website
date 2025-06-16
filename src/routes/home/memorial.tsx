import { BsArrowRight, BsBook } from "react-icons/bs";
import { Button, Divider } from "../../components/ui";

/* Editions */

import logo2024Asset from "../../assets/editions/2024/logo.png";
import scenario2024Asset from "../../assets/editions/2024/scenario.jpg";

import logo2023Asset from "../../assets/editions/2023/logo.png";
import scenario2023Asset from "../../assets/editions/2023/scenario.jpg";

import logo2022Asset from "../../assets/editions/2022/logo.png";
import scenario2022Asset from "../../assets/editions/2022/scenario.jpg";

import logo2021Asset from "../../assets/editions/2021/logo.png";
import scenario2021Asset from "../../assets/editions/2021/scenario.jpg";

const editions = {
  "2024": { logo: logo2024Asset, scenario: scenario2024Asset },
  "2023": { logo: logo2023Asset, scenario: scenario2023Asset },
  "2022": { logo: logo2022Asset, scenario: scenario2022Asset },
  "2021": { logo: logo2021Asset, scenario: scenario2021Asset },
};

interface CardProps {
  logo: string;
  scenario: string;
  year: string;
}

function Card(props: CardProps) {
  const { logo, scenario, year } = props;
  return (
    <div className="bg-background-dt relative h-96 w-full overflow-hidden rounded-md">
      <div
        className="absolute top-0 left-0 h-full w-full bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${scenario})` }}
      />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center backdrop-blur-[2px]">
        <img
          className="absolute top-[50%] left-[50%] h-[40%] w-auto translate-[-50%]"
          src={logo}
        />
        <div className="mt-auto mb-2 flex h-fit w-full justify-center text-neutral-400">
          {year}
        </div>
      </div>
    </div>
  );
}

function Memorial() {
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

        <div className="mt-20 flex h-fit w-full gap-5">
          {Object.entries(editions)
            .sort((a, b) => Number(b[0]) - Number(a[0]))
            .map((row) => (
              <Card
                year={row[0]}
                logo={row[1].logo}
                scenario={row[1].scenario}
              />
            ))}
        </div>

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
