import ImgSeguro from "@assets/img/seguros/img_09.jpg";
import { Breadcrumbs, Button } from "@mui/material";
import { Link } from "@tanstack/react-router";
import AnimatedSection from "@ui/AnimatedSection";
import Heading from "@ui/Heading";
import Hero from "@ui/Hero";

const SeguroRCContador = () => {
  return (
    <>
      <Hero
        type="right"
        color="overlay-black"
        img={ImgSeguro}
        imgClass="lg:object-[0%_25%]"
        height={500}
      >
        <Heading
          as="h1"
          className="text-multi-green-light font-title drop-shadow-sm"
        >
          Seguro de RC para Contadores
        </Heading>
        <p className="text-multi-white font-title drop-shadow-sm">
          Com a proteção personalizada oferecida pela{" "}
          <strong>Multiplusgroup</strong> você poderá exercer a sua profissão
          como contador de maneira segura e responsável sem qualquer preocupação
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
          <p className="text-multi-brown">
            Seguro de Responsabilidade Civil para Contadores
          </p>
        </Breadcrumbs>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          O trabalho do contador exige precisão e responsabilidade, já que
          envolve a gestão de informações financeiras cruciais para empresas e
          indivíduos. Na{" "}
          <strong className="font-title font-extrabold">Multiplusgroup</strong>{" "}
          Corretora de Seguros, oferecemos o Seguro de Responsabilidade Civil
          Profissional para Contadores, projetado para proteger contra
          reclamações e ações judiciais que possam surgir de erros, omissões ou
          negligência no exercício das suas funções. Com as melhores seguradoras
          do mercado, garantimos a segurança necessária para que você desempenhe
          sua profissão com total tranquilidade.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          O seguro cobre custos relacionados a danos materiais, morais ou
          financeiros causados a terceiros, além de despesas com defesa jurídica
          e eventuais indenizações. Também oferecemos coberturas adicionais,
          como proteção contra erros em consultorias tributárias, fiscais e
          contábeis, garantindo que você esteja resguardado contra imprevistos
          que possam afetar sua carreira e sua reputação profissional.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na <span className="font-title font-extrabold">Multiplusgroup</span>,
          nosso compromisso é proporcionar soluções de seguro que se adaptem às
          necessidades específicas da sua atividade contábil. Nossa equipe de
          corretores especializados está pronta para oferecer consultoria
          personalizada, ajudando você a encontrar a melhor cobertura para sua
          segurança profissional, com transparência, eficiência e sem
          burocracia.
        </p>
      </AnimatedSection>
    </>
  );
};

export default SeguroRCContador;
