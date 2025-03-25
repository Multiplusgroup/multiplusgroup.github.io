import ImgSeguro from "@assets/img/seguros/img_08.jpg";
import { Breadcrumbs, Button } from "@mui/material";
import { Link } from "@tanstack/react-router";
import AnimatedSection from "@ui/AnimatedSection";
import Heading from "@ui/Heading";
import Hero from "@ui/Hero";

const SeguroRCMedico = () => {
  return (
    <>
      <Hero
        type="left"
        color="overlay-black"
        img={ImgSeguro}
        imgClass="lg:object-[0%_30%]"
        height={500}
      >
        <Heading
          as="h1"
          className="text-multi-green-light font-title drop-shadow-sm"
        >
          Seguro de RC para Médicos
        </Heading>
        <p className="text-multi-white font-title drop-shadow-sm">
          Atenda seus pacientes sem qualquer preocupação após realizar a
          contratação do Seguro de Responsabilidade Civil para Médicos oferecido
          pela <strong>Multiplusgroup</strong>
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
            Seguro de Responsabilidade Civil para Médicos
          </p>
        </Breadcrumbs>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Exercer a medicina envolve grandes responsabilidades e decisões que
          impactam diretamente a vida e a saúde dos pacientes. Na{" "}
          <strong className="font-title font-extrabold">Multiplusgroup</strong>{" "}
          Corretora de Seguros, oferecemos o Seguro de Responsabilidade Civil
          Profissional para Médicos, que proporciona proteção essencial contra
          possíveis reclamações e processos judiciais decorrentes de erros,
          omissões ou negligência no exercício da profissão. Com as melhores
          seguradoras do mercado, garantimos segurança e tranquilidade para que
          você foque no que mais importa: cuidar dos seus pacientes.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Nosso seguro cobre despesas relacionadas a danos físicos, morais ou
          materiais causados a terceiros durante o atendimento médico, além de
          custos com defesa jurídica e indenizações. Também oferecemos
          coberturas adicionais para procedimentos cirúrgicos, assistência
          jurídica especializada e acordos extrajudiciais. Com o Seguro de
          Responsabilidade Civil Profissional para Médicos, você estará
          resguardado contra imprevistos que podem comprometer sua carreira e
          reputação.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na <span className="font-title font-extrabold">Multiplusgroup</span>,
          nos dedicamos a oferecer soluções personalizadas para proteger sua
          prática médica. Nossa equipe de corretores especializados está à
          disposição para entender suas necessidades específicas e encontrar a
          melhor solução de seguro, garantindo uma proteção completa com
          transparência, agilidade e sem burocracia.
        </p>
      </AnimatedSection>
    </>
  );
};

export default SeguroRCMedico;
