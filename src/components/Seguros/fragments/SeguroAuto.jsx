import ImgSeguro from "@assets/img/seguros/img_01.jpg";
import { Breadcrumbs, Button } from "@mui/material";
import { Link } from "@tanstack/react-router";
import AnimatedSection from "@ui/AnimatedSection";
import Heading from "@ui/Heading";
import Hero from "@ui/Hero";

const SeguroAuto = () => {
  return (
    <>
      <Hero
        type="left"
        color="overlay-black"
        img={ImgSeguro}
        imgClass="object-cover"
        height={500}
      >
        <Heading
          as="h1"
          className="text-multi-green-light font-title drop-shadow-sm"
        >
          Seguro Automóvel
        </Heading>
        <p className="text-multi-white font-title drop-shadow-sm">
          A <strong>Multiplusgroup</strong> oferece opções de personalizadas
          para Seguros de Automóvel que se ajustam às sua necessidades com
          diferente coberturas, para seu conforto e seguranca ao dirigir
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
            to="/seguros/"
            hash="para-voce"
            className="text-multi-black hover:!text-multi-brown"
            hashScrollIntoView
          >
            Para você
          </Link>
          <p className="text-multi-brown">Seguro Auto</p>
        </Breadcrumbs>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Proteger seu veículo contra imprevistos é essencial para garantir
          tranquilidade no dia a dia. Na{" "}
          <span className="font-title font-extrabold">Multiplusgroup</span>{" "}
          Corretora de Seguros, oferecemos uma ampla gama de seguros de
          automóvel, ajustados às necessidades específicas de cada cliente.
          Trabalhamos com as melhores seguradoras do mercado brasileiro para
          proporcionar opções que cobrem desde colisões, roubos e furtos até
          danos causados por fenômenos naturais e terceiros.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Nossos produtos incluem coberturas básicas, como proteção contra roubo
          e colisão, além de coberturas adicionais, como carro reserva,
          assistência 24 horas, proteção de vidros, e muito mais. Para aqueles
          que desejam uma proteção ainda mais completa, oferecemos planos que
          incluem assistência residencial, cobertura para acessórios do veículo,
          e indenização em caso de perda total.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na <span className="font-title font-extrabold">Multiplusgroup</span>,
          nosso compromisso é encontrar a melhor solução de seguro para você,
          sempre com a máxima transparência e comprometimento. Nossos corretores
          especializados estão prontos para oferecer consultoria personalizada,
          ajudando você a escolher o plano que melhor se adapta às suas
          necessidades e ao seu orçamento, sem burocracia e com total
          conveniência.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col items-end gap-5 md:!w-[80%]">
        <Button
          LinkComponent={Link}
          to={"/seguros/todos"}
          className="btn-cta hover:!text-multi-brown !text-multi-green-light !px-10 !py-5 !no-underline"
        >
          Faça sua cotação agora!
        </Button>
      </AnimatedSection>
    </>
  );
};

export default SeguroAuto;
