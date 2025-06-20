import { generatePattern, useMask } from "@react-input/mask";
import { ReactNode, useImperativeHandle, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  BsAsterisk,
  BsCheckCircle,
  BsSend,
  BsTelephone,
  BsXCircle,
} from "react-icons/bs";
import { VscLoading } from "react-icons/vsc";
import colors from "tailwindcss/colors";
import { Button, Divider, Input, TextArea } from "../../components/ui";

interface FormFieldProps {
  required?: boolean;
  label: string;
  content: ReactNode;
}

function FormField(props: FormFieldProps) {
  const { required = false, label, content } = props;
  return (
    <div className="flex h-fit w-full flex-col gap-2">
      <div className="flex h-fit w-full items-center gap-1">
        <span className="font-md">{label}</span>
        {required && <BsAsterisk className="w-2 text-red-500" />}
      </div>
      {content}
    </div>
  );
}

interface FormInput {
  firstName: string;
  lastName: string;
  email: string;
  telephone?: string;
  message: string;
}

interface FormResponse {
  status: "success" | "error" | "none";
  message?: ReactNode;
}

const responseColors = {
  success: colors.green,
  error: colors.red,
};

const telephoneMask = {
  mask: "(__) _____-____",
  replacement: { _: /\d/ },
};

function ContactUs() {
  const [sending, setSending] = useState(false);
  const [response, setResponse] = useState<FormResponse>({ status: "none" });

  const { register, handleSubmit, reset } = useForm<FormInput>();

  /* Telephone */
  const telephoneRef = useMask(telephoneMask);
  const { ref: telephoneRegisterRef, ...telephoneRegister } = register(
    "telephone",
    {
      required: false,
      pattern: RegExp(generatePattern("full-inexact", telephoneMask)),
    },
  );

  useImperativeHandle(telephoneRegisterRef, () => telephoneRef.current);

  /* Submit Handler */
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    setSending(true);
    setResponse({ status: "none" });

    const fullName = data.firstName + " " + data.lastName;

    try {
      const request = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          subject: `Mensagem da área de contato de ${fullName} - Site Loco de Ouro`,
          nome: fullName,
          email: data.email,
          telefone: data.telephone || "Não informado.",
          mensagem: data.message,
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
        }),
      });

      switch (request.status) {
        case 200:
          setResponse({
            status: "success",
            message: (
              <>
                <BsCheckCircle />
                Email enviado com sucesso!
              </>
            ),
          });
          break;

        default:
          setResponse({
            status: "error",
            message: (
              <>
                <BsXCircle />
                Algum erro ocorreu ao enviar o email.
              </>
            ),
          });
      }

      reset();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      setResponse({
        status: "error",
        message: (
          <>
            <BsXCircle />
            Algum erro ocorreu ao enviar o email.
          </>
        ),
      });
    }

    setSending(false);
  };

  return (
    <div className="my-40 flex w-full justify-center">
      <div className="flex h-fit w-[72vw] flex-col">
        <div className="flex w-full items-center">
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

          <BsTelephone className="text-primary mr-0 ml-auto text-4xl" />
        </div>

        <span className="mt-15">
          Ficou interessado no Loco de Ouro? Caso tenha alguma dúvida, ideia ou
          sugestão mande uma mensagem para nós logo abaixo. Ficariamos muito
          agradecidos a te ajudar!
        </span>

        <div className="bg-background-dt mt-15 flex h-fit w-full flex-col gap-8 rounded-md p-10">
          <div className="flex gap-8">
            <FormField
              label="Nome"
              required
              content={
                <Input
                  placeholder="Digite aqui..."
                  {...register("firstName", { required: true })}
                />
              }
            />
            <FormField
              label="Sobrenome"
              required
              content={
                <Input
                  placeholder="Digite aqui..."
                  {...register("lastName", { required: true })}
                />
              }
            />
          </div>
          <FormField
            label="Email"
            required
            content={
              <Input
                placeholder="Digite aqui..."
                {...register("email", { required: true })}
              />
            }
          />
          <FormField
            label="Telefone"
            content={
              <Input
                placeholder="Digite aqui..."
                ref={telephoneRef}
                {...telephoneRegister}
              />
            }
          />
          <FormField
            label="Mensagem"
            required
            content={
              <TextArea
                placeholder="Digite aqui..."
                rows={5}
                className="h-fit resize-none"
                {...register("message", { required: true })}
              />
            }
          />
          <div className="flex items-center">
            {response.status !== "none" && (
              <div
                className="h-fit w-fit rounded-md px-3 py-2"
                style={{ background: responseColors[response.status][900] }}
              >
                <span
                  className="flex items-center gap-2"
                  style={{ color: responseColors[response.status][400] }}
                >
                  {response.message}
                </span>
              </div>
            )}
            <Button
              disabled={sending}
              variant="primary"
              className="mr-0 ml-auto"
              onClick={handleSubmit(onSubmit)}
            >
              Enviar
              {sending ? (
                <VscLoading className="loading-animation" />
              ) : (
                <BsSend />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
