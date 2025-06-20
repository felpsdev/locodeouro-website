import { BsArrowRight, BsPeople } from "react-icons/bs";
import { Button, Divider } from "../../components/ui";

import teamAsset from "../../assets/home/team.jpg";

function Team() {
  return (
    <div className="bg-secondary my-20 flex w-full justify-center py-30">
      <div className="flex h-fit w-[72vw] flex-col">
        <div className="flex w-full items-center justify-end">
          <div className="relative h-fit w-fit">
            <span className="font-grotesk text-secondary-foreground relative z-10 text-6xl">
              NOSSA EQUIPE
            </span>

            <Divider
              color="var(--color-secondary-foreground)"
              className="absolute bottom-[-65%] left-[-5%] h-full w-[110%]"
              width={3}
              roughness={5}
              seed={137}
            />
          </div>

          <BsPeople className="text-secondary-foreground mr-0 ml-auto text-4xl" />
        </div>

        <span className="text-secondary-foreground mt-15">
          Conheça a equipe por trás deste evento, formada por pessoas
          apaixonadas, talentosas e comprometidas. Cada detalhe que você vê aqui
          foi pensado com muito cuidado, carinho e dedicação. São essas mentes
          criativas que, com muito trabalho e colaboração, tornam possível cada
          momento, cada experiência e cada memória vivida aqui.
        </span>

        <div
          style={{ backgroundImage: `url(${teamAsset})` }}
          className="mt-15 flex h-[60vh] w-full items-end justify-end rounded-md bg-cover bg-center p-5"
        >
          <span className="text-primary text-sm">
            Equipe realizadora da 10ª Edição - 2024
          </span>
        </div>

        <div className="mt-5 flex w-full justify-end">
          <Button variant="secondary">
            Saiba Mais
            <BsArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Team;
