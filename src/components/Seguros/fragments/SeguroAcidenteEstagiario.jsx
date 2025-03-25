import ImgSeguro from "@assets/img/seguros/img_16.jpg";
import List from "@components/List";
import { beneficios, quemContrata } from "@constants/listItems";
import { Breadcrumbs, Button, Divider, Grid2 as Grid } from "@mui/material";
import { Link } from "@tanstack/react-router";
import AnimatedSection from "@ui/AnimatedSection";
import Heading from "@ui/Heading";
import Hero from "@ui/Hero";

const SeguroAcidenteEstagiario = () => {
  return (
    <>
      <Hero
        type="right"
        color="overlay-black"
        height={500}
        img={ImgSeguro}
        imgClass="object-top lg:object-[0%_40%]"
      >
        <Heading
          as="h1"
          className="text-multi-green-light font-title drop-shadow-sm"
        >
          Seguro de AP para Estagiários
        </Heading>
        <p className="text-multi-white font-title drop-shadow-sm">
          O Seguro de Acidentes Pessoais para Estagiários da{" "}
          <strong>Multiplusgroup</strong> oferece a proteção completa para quem
          empresários e seus estagiários, garantindo o cumprimeto das
          legislações regulamentadoras vigentes
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
            hash="outros"
            className="text-multi-black hover:!text-multi-brown"
          >
            Outros
          </Link>

          <p className="text-multi-brown">
            Seguro de Acidentes Pessoais para Estagiários
          </p>
        </Breadcrumbs>
      </AnimatedSection>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na <span className="font-title font-extrabold">Multiplusgroup</span>,
          sabemos que o início de uma jornada profissional é um marco importante
          na vida de qualquer estudante. Para quem está prestes a ingressar no
          estágio obrigatório de um curso técnico ou superior, o{" "}
          <span className="font-title font-extrabold">
            Seguro de Acidentes Pessoais para Estagiários
          </span>{" "}
          não é apenas uma exigência legal, mas uma proteção indispensável para
          garantir tranquilidade e segurança no dia a dia.
        </p>
      </AnimatedSection>
      <AnimatedSection className="bg-multi-gray w-full drop-shadow-lg">
        <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
          <Heading
            as="h3"
            className="text-multi-brown font-title marker w-full"
          >
            Por que esse seguro é obrigatório?
          </Heading>
          <p>
            Conforme a{" "}
            <span className="font-title font-extrabold">
              Lei nº 11.788/2008
            </span>
            , que regula os estágios no Brasil, é obrigatório que toda empresa
            ou instituição que contrate estagiários ofereça um seguro de
            acidentes pessoais. Esse seguro cobre eventos como acidentes durante
            o deslocamento, atividades práticas e qualquer outra situação que
            possa ocorrer no período do estágio.
          </p>
          <p>
            Além de atender à legislação, o seguro garante ao estagiário uma
            proteção financeira essencial, cobrindo despesas com acidentes e
            proporcionando suporte em momentos imprevistos.
          </p>
        </AnimatedSection>
        <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
          <Divider className="bg-multi-brown/50 w-full" />
        </AnimatedSection>
        <Grid className="mx-auto flex w-[90%] flex-col items-start gap-[4rem] md:w-[80%] lg:flex-row">
          <AnimatedSection className="flex w-full flex-col justify-center gap-5">
            <Heading as="h3" className="text-multi-brown font-title marker">
              Benefícios oferecidos:
            </Heading>
            <List items={beneficios} className="lg:!h-[290px]" />
          </AnimatedSection>
          <AnimatedSection className="w-full lg:hidden">
            <Divider className="bg-multi-brown/50" />
          </AnimatedSection>
          <AnimatedSection className="flex w-full flex-col justify-center gap-5">
            <Heading as="h3" className="text-multi-brown font-title marker">
              Quem Deve Contratar o Seguro?
            </Heading>
            <List items={quemContrata} className="lg:!h-[290px]" />
          </AnimatedSection>
        </Grid>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex w-[90%] flex-col justify-center gap-5 md:w-[80%]">
        <p>
          Com o Seguro de Acidentes Pessoais para Estagiários da{" "}
          <span className="font-ttitle font-extrabold">MultiplusGroup</span> ,
          você pode iniciar sua jornada profissional com tranquilidade, sabendo
          que está protegido contra imprevistos. Seja em atividades práticas ou
          no deslocamento para o estágio, sua segurança está em boas mãos.
        </p>
      </AnimatedSection>
    </>
  );
};

export default SeguroAcidenteEstagiario;
