import { BsTelephone } from "react-icons/bs";
import { Divider, Input } from "../../components/ui";

function ContactUs() {
  return (
    <div className="my-20 flex w-full justify-center">
      <div className="flex h-fit w-[72vw] flex-col">
        <div className="flex w-full items-center">
          <BsTelephone className="text-primary mr-auto ml-0 text-4xl" />

          <div className="relative h-fit w-fit">
            <span className="font-grotesk relative z-10 text-6xl">
              CONTATE-NOS
            </span>

            <Divider
              color="var(--color-accent)"
              className="absolute bottom-[-65%] left-[-5%] h-full w-[110%]"
              width={3}
              roughness={5}
              seed={23}
            />
          </div>
        </div>

        <Input className="my-10" />
      </div>
    </div>
  );
}

export default ContactUs;
