import ImgSeguro from "@assets/img/seguros/img_14.jpg";
import { Breadcrumbs, Button } from "@mui/material";
import { Link } from "@tanstack/react-router";
import AnimatedSection from "@ui/AnimatedSection";
import Heading from "@ui/Heading";
import Hero from "@ui/Hero";

const SeguroEngenharia = () => {
  return (
    <>
      <Hero
        type="right"
        color="overlay-black"
        height={500}
        img={ImgSeguro}
        imgClass="object-top lg:object-[0_20%]"
      >
        <Heading
          as="h1"
          className="text-multi-green-light font-title drop-shadow-sm"
        >
          Seguro Riscos de Engenharia
        </Heading>
        <p className="text-multi-white font-title drop-shadow-sm">
          Construir ou reformar são grandes investimentos que geram diversas
          possiblidades de riscos, os quais não serão motivo de preocupação ao
          contrar o Seguro Riscos de Engenharia da{" "}
          <strong>Multiplusgroup</strong>
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
            hash="outros"
            className="text-multi-black hover:!text-multi-brown"
          >
            Outros
          </Link>
          <p className="text-multi-brown">Seguro de Riscos de Engenharia</p>
        </Breadcrumbs>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Construções e reformas, seja em projetos residenciais, comerciais ou
          industriais, envolvem grandes investimentos e, consequentemente,
          riscos. O Seguro de Riscos de Engenharia da{" "}
          <span className="font-title font-extrabold">Multiplusgroup</span>{" "}
          Corretora de Seguros oferece proteção completa para obras de todos os
          portes, garantindo segurança em todas as fases do projeto. Com as
          principais seguradoras do mercado, oferecemos soluções de cobertura
          para novas construções, reformas de imóveis residenciais, comerciais e
          lojas em shopping centers, assegurando que seu projeto seja concluído
          sem surpresas desagradáveis.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Nosso seguro cobre danos materiais causados por acidentes na execução
          da obra, como incêndios, explosões, desmoronamentos e roubos de
          materiais. Também oferecemos coberturas adicionais para
          responsabilidade civil, garantindo proteção contra danos a terceiros,
          além de coberturas para equipamentos e máquinas utilizados na obra.
          Seja uma grande construção industrial ou uma reforma de pequeno porte,
          temos o seguro ideal para proteger seu projeto em todas as etapas.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na <span className="font-title font-extrabold">Multiplusgroup</span>,
          estamos comprometidos em oferecer soluções personalizadas que atendam
          às necessidades específicas do seu empreendimento. Com nossa equipe de
          corretores especializados, garantimos um atendimento dedicado para
          encontrar o melhor seguro de Riscos de Engenharia para sua obra,
          oferecendo proteção completa com eficiência, transparência e sem
          complicações.
        </p>
      </AnimatedSection>
    </>
  );
};

export default SeguroEngenharia;
