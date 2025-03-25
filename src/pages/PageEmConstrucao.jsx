import ImgConstrucao from "@assets/img/EmConstrucao.png";
import Card from "@components/Card";
import { CardMedia } from "@mui/material";
import AnimatedSection from "@ui/AnimatedSection";
import Heading from "@ui/Heading";
import { useEffect } from "react";

const PageEmConstrucao = () => {
  useEffect(() => {
    document.title = "Estamos trabalhando - Multiplusgroup";
  }, []);

  return (
    <AnimatedSection
      className="mx-auto my-[4rem] flex !w-[90%] grow flex-col items-center justify-center gap-5 md:w-[85%]"
      animation="fade"
    >
      <Heading className="text-multi-brown text-center">
        Atualizações em andamento
      </Heading>
      <Card
        media={<CardMedia image={ImgConstrucao} component="img" />}
        className="!mt-5 !h-fit !rounded-lg !shadow-none"
      />
      <p>
        Devido a manutenções que estão sendo realizadas em nossos serviços,
        solicitamos que volte novamente mais tarde à essa página.
      </p>
    </AnimatedSection>
  );
};

export default PageEmConstrucao;
