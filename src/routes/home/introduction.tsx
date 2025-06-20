import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { BsMouse } from "react-icons/bs";
import { Button } from "../../components/ui";

/* Assets */
import backgroundAsset from "../../assets/home/background_video.mp4";

interface IntroductionProps {
  onInViewChange: (inView: boolean) => void;
}

function Introduction(props: IntroductionProps) {
  const { onInViewChange } = props;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  useEffect(() => {
    onInViewChange(inView);
  }, [inView, onInViewChange]);

  return (
    <div ref={ref} className="relative h-full w-full">
      <video
        className="absolute top-0 left-0 h-full w-full object-cover opacity-30"
        src={backgroundAsset}
        loop
        autoPlay
        muted
      />
      <div className="relative z-10 h-full w-full backdrop-blur-xl">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2">
          <motion.span
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="font-grotesk text-9xl leading-none"
          >
            LOCO DE OURO
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="text-lg opacity-70"
          >
            Conheça um pouco mais sobre o maior evento audiovisual universitário
            do Brasil.
          </motion.span>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.25, ease: "easeInOut" }}
            className="mt-6"
          >
            <Button asChild className="flex gap-2" size="lg" variant="primary">
              <a href="#event">
                <BsMouse />
                Saiba Mais
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
