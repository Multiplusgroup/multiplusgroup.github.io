import ImgSeguro from "@assets/img/seguros/img_11.jpg";
import { Breadcrumbs, Button } from "@mui/material";
import { Link } from "@tanstack/react-router";
import AnimatedSection from "@ui/AnimatedSection";
import Heading from "@ui/Heading";
import Hero from "@ui/Hero";

const SeguroBike = () => {
  return (
    <>
      <Hero
        type="right"
        color="overlay-black"
        img={ImgSeguro}
        imgClass="object-center lg:object-[0%_30%]"
        height={500}
      >
        <Heading
          as="h1"
          className="text-multi-green-light font-title drop-shadow-sm"
        >
          Seguro Bike
        </Heading>
        <p className="text-multi-white font-title drop-shadow-sm">
          Garanta a segurança e conforto em suas atividades de ciclismo com o
          Seguro Bike oferecido pela <strong>Multiplusgroup</strong> - a melhor
          cobertura do mercado para manter sua bicicleta sempre protegida
        </p>
        <Button
          LinkComponent={Link}
          className="btn btn-cta hover:!text-multi-brown !text-multi-green-light justify-self-center !px-10 !py-3 !no-underline"
          to="https://wa.me/message/VGMGOFEQJQ5HC1"
          target="_blank"
        >
          Saiba mais
        </Button>
      </Hero>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <Breadcrumbs className="!font-extrabold" separator="/">
          <Link
            to="/seguros"
            className="text-multi-black hover:!text-multi-brown"
          >
            Seguros
          </Link>
          <Link
            to="/seguros"
            hash="para-voce"
            className="text-multi-black hover:!text-multi-brown"
          >
            Para você
          </Link>
          <p className="text-multi-brown">Seguro Bike</p>
        </Breadcrumbs>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Para os amantes de ciclismo, que apreciam passeios ao ar livre,
          atividades físicas e a conexão com a natureza, ter a sua bicicleta
          protegida é essencial. Na{" "}
          <strong className="font-title font-extrabold">Multiplusgroup</strong>{" "}
          Corretora de Seguros, oferecemos o Seguro Bike, desenvolvido
          especialmente para garantir a segurança da sua bicicleta, seja em
          trajetos urbanos ou em trilhas mais desafiadoras. Com a parceria das
          melhores seguradoras do mercado, proporcionamos uma cobertura completa
          para que você pedale com total tranquilidade.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Nosso seguro cobre situações como roubo e furto qualificado, além de
          danos causados por acidentes durante o uso ou transporte da bicicleta.
          Também oferecemos coberturas adicionais para equipamentos e
          acessórios, e proteção contra danos durante competições ou treinos.
          Seja para o ciclista que usa a bike no dia a dia ou para os
          entusiastas de passeios de fim de semana, temos o plano ideal para
          manter sua bicicleta sempre protegida.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na <span className="font-title font-extrabold">Multiplusgroup</span>,
          valorizamos o seu estilo de vida ativo e estamos prontos para oferecer
          as melhores soluções de seguro para sua bike. Com consultoria
          especializada e atendimento personalizado, garantimos que você tenha a
          cobertura que precisa para pedalar sem preocupações, seja na cidade ou
          em meio à natureza.
        </p>
      </AnimatedSection>
    </>
  );
};

export default SeguroBike;
