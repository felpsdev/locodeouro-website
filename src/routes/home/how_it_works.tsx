import { IconType } from "react-icons";
import {
  BsBroadcast,
  BsPersonFill,
  BsQuestionCircle,
  BsStarFill,
} from "react-icons/bs";
import { Divider } from "../../components/ui";

interface CategoriesProps {
  title: string;
  description: string;
  content: string[];
  icon: IconType;
}

function Categories(props: CategoriesProps) {
  const { title, description, content, icon: Icon } = props;
  return (
    <div className="group bg-secondary flex h-full w-full cursor-pointer flex-col rounded-md p-6 transition-all">
      <div className="flex h-fit w-full">
        <div className="flex flex-col">
          <span className="font-grotesk text-3xl leading-none text-neutral-900">
            {title}
          </span>
          <span className="text-sm text-neutral-900 opacity-60">
            {description}
          </span>
        </div>
        <Icon className="mr-0 ml-auto min-w-6 text-2xl text-neutral-900" />
      </div>
      <div className="mt-4 flex flex-col gap-2 border-l-2 border-neutral-800 pl-5">
        {content.map((value) => (
          <span className="flex leading-none text-neutral-700">{value}</span>
        ))}
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <div id="works" className="flex h-fit w-full justify-center py-20">
      <div className="flex h-fit w-[72vw] flex-col">
        <div className="flex w-full items-center justify-center">
          <BsQuestionCircle className="text-primary mr-auto ml-0 text-4xl" />

          <div className="relative h-fit w-fit">
            <span className="font-grotesk relative z-10 text-6xl">
              COMO FUNCIONA
            </span>

            <Divider
              color="var(--color-accent)"
              className="absolute bottom-[-65%] left-[-5%] h-full w-[110%]"
              width={3}
              roughness={5}
              seed={94}
            />
          </div>

          <BsQuestionCircle className="text-primary mr-0 ml-auto text-4xl" />
        </div>

        <span className="mt-20 text-center text-lg">
          As produções universitárias são inscritas em determinadas categorias
          e, após uma curadoria, são exibidas em uma mostra competitiva. Os
          trabalhos são avaliados por jurados convidados, profissionais
          influentes do mercado audiovisual, e também há categorias de voto
          popular. O evento culmina em uma noite de gala, onde os vencedores são
          anunciados e premiados. Dentre as categorias, estão:
        </span>

        <div className="mt-16 grid h-fit w-full grid-cols-2 grid-rows-3 justify-center gap-5">
          <div className="col-span-1 row-span-2">
            <Categories
              icon={BsPersonFill}
              title="Categorias Individuais"
              description="Os produtos inscritos aqui não concorrem a outras categorias"
              content={[
                "Melhor Documentário",
                "Melhor Videoclipe",
                "Melhor Programa de TV",
                "Melhor Videoarte",
              ]}
            />
          </div>

          <div className="col-span-1 col-start-1 row-span-1">
            <Categories
              icon={BsBroadcast}
              title=" Categoria do Ao Vivo"
              description="Apenas produções feitas por alunos da Unesp podem concorrer"
              content={["Melhor Curtíssima"]}
            />
          </div>

          <div className="col-span-1 col-start-2 row-span-3 row-start-1">
            <Categories
              icon={BsStarFill}
              title="Categorias para curtas-metragens"
              description="Produtos do gênero narrativo com duração de 2 a 30 minutos"
              content={[
                "Melhor Curta Universitário",
                "Melhor Direção de Fotografia",
                "Melhor Direção",
                "Melhor Direção de Arte",
                "Melhor Trilha Sonora",
                "Melhor Direção de Som",
                "Melhor Montagem",
                "Melhor Elenco",
                "Melhor Roteiro Produzido",
                "Melhor Curta Unespiano",
                "Aclamação Popular",
                "Melhor Animação",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
