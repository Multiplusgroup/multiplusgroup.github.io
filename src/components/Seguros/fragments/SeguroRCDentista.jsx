import ImgSeguro from "@assets/img/seguros/img_07.jpg";
import { Breadcrumbs, Button } from "@mui/material";
import { Link } from "@tanstack/react-router";
import AnimatedSection from "@ui/AnimatedSection";
import Heading from "@ui/Heading";
import Hero from "@ui/Hero";

const SeguroRCDentista = () => {
  return (
    <>
      <Hero
        type="left"
        color="overlay-black"
        img={ImgSeguro}
        imgClass="object-top lg:object-[0%_25%]"
        height={500}
      >
        <Heading
          as="h1"
          className="text-multi-green-light font-title drop-shadow-sm"
        >
          Seguro de RC para Dentistas
        </Heading>
        <p className="text-multi-white font-title drop-shadow-sm">
          O Seguro de Responsabilidade Civil para Dentistas oferecido pela{" "}
          <strong>Multiplusgroup</strong> permite que você trabalhe de forma
          segura com foco no bem estar de seus pacientes
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
            Seguro de Responsabilidade Civil para Dentistas
          </p>
        </Breadcrumbs>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Como dentista, sua atuação envolve uma grande responsabilidade com a
          saúde e o bem-estar dos seus pacientes. Na{" "}
          <span className="font-title font-extrabold">Multiplusgroup</span>{" "}
          Corretora de Seguros, oferecemos o Seguro de Responsabilidade Civil
          Profissional especialmente desenvolvido para proteger dentistas contra
          eventuais reclamações e processos judiciais decorrentes de erros,
          omissões ou negligência durante o exercício da profissão. Com as
          melhores seguradoras do mercado, garantimos a tranquilidade necessária
          para que você foque em cuidar dos seus pacientes com segurança.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Esse seguro oferece cobertura para despesas relacionadas a danos
          físicos, materiais ou morais causados a terceiros durante o
          atendimento odontológico, incluindo custos de defesa jurídica e
          indenizações. Além disso, contamos com coberturas adicionais que
          incluem responsabilidade por procedimentos estéticos, assistência
          jurídica especializada e acordos extrajudiciais. Com o Seguro de
          Responsabilidade Civil Profissional para Dentistas, você estará
          protegido contra imprevistos que possam impactar sua reputação e a
          continuidade da sua carreira.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na <span className="font-title font-extrabold">Multiplusgroup</span>,
          nossa prioridade é oferecer soluções de seguro que garantam a sua
          segurança profissional. Com consultoria personalizada e uma equipe de
          corretores especializados, ajudamos você a escolher o plano ideal para
          suas necessidades, garantindo proteção completa com agilidade,
          transparência e sem complicações.
        </p>
      </AnimatedSection>
    </>
  );
};

export default SeguroRCDentista;
