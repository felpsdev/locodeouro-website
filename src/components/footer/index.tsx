import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";
import { VscWarning } from "react-icons/vsc";

function Footer() {
  return (
    <div className="bg-background-dt flex w-full items-center justify-center">
      <div className="flex h-fit w-[72vw] items-center py-10">
        <div className="flex flex-col gap-2">
          <span className="font-grotesk text-secondary">LOCO DE OURO</span>
          <span className="leading-none">
            © 2025 Locomotiva Jr. - Todos os direitos reservados.{" "}
          </span>
          <span className="mt-2 flex gap-2 text-sm leading-none opacity-60">
            <VscWarning />
            Site ainda em processo de construção
          </span>
        </div>
        <div className="mr-0 ml-auto flex flex-col gap-2">
          <span className="font-grotesk text-secondary">REDES SOCIAS</span>
          <div className="flex items-center gap-2 text-2xl">
            <a href="https://www.instagram.com/locodeouro" target="_blank">
              <FaSquareInstagram />
            </a>
            <a href="https://x.com/locomotivajr" target="_blank">
              <FaSquareXTwitter />
            </a>
            <a href="https://www.youtube.com/locomotivajr" target="_blank">
              <FaSquareYoutube />
            </a>
            <a
              href="https://www.facebook.com/locomotivajr/photos_by?locale=pt_BR"
              target="_blank"
            >
              <FaSquareFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
