import ImgNaoEncontrada from "@assets/img/NaoEncontrada.png";
import BackButton from "@components/BackButton";
import Card from "@components/Card";
import { CardMedia } from "@mui/material";
import { Link } from "@tanstack/react-router";
import AnimatedSection from "@ui/AnimatedSection";
import Heading from "@ui/Heading";
import { useEffect } from "react";

const PageNaoEncontrada = ({ path }) => {
  useEffect(() => {
    document.title = "Página não encontrada - Multiplusgroup";
  }, []);

  return (
    <>
      <AnimatedSection
        className="mx-auto my-[4rem] flex !w-[90%] grow flex-col items-center justify-center gap-5 md:w-[85%]"
        animation="fade"
      >
        <Heading className="text-multi-brown text-center">
          Página indisponível
        </Heading>
        <Card
          media={<CardMedia image={ImgNaoEncontrada} component="img" />}
          className="!mt-5 !h-fit !rounded-lg !shadow-none"
        />
        <p>
          Acreditamos que o endereço digitado (<strong>{path}</strong>) foi
          inserido erroneamente, pois essa página não existe em nossos
          servidores.
        </p>
        <p>
          Caso você esteja tenha certeza que está acessando o endereço correto e
          ainda assim continua a essa mensagem de forma freqüente, por favor
          entre em{" "}
          {/* <NavLink
            to="/contato"
            target="_blank"
            className="text-multi-brown font-bold no-underline hover:underline"
          >
            contato
          </NavLink>{" "} */}
          <Link
            to="/contato"
            target="_blank"
            className="text-multi-brown font-bold no-underline hover:underline"
          >
            contato
          </Link>{" "}
          conosco, descrevendo o erro informando qual a página está tentando
          acessar.
        </p>

        <BackButton className="btn btn-cta" />
      </AnimatedSection>
    </>
  );
};

export default PageNaoEncontrada;
