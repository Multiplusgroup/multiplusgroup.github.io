import ImgSeguro from "@assets/img/seguros/img_15.jpg";
import List from "@components/List";
import { porQueSeguro, tiposVeiculo } from "@constants/listItems";
import { Breadcrumbs, Button, Divider, Grid2 as Grid } from "@mui/material";
import { Link } from "@tanstack/react-router";
import AnimatedSection from "@ui/AnimatedSection";
import Heading from "@ui/Heading";
import Hero from "@ui/Hero";

const SeguroAcidentePassageiro = () => {
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
          Seguro de AP para Passageiros
        </Heading>
        <p className="text-multi-white font-title drop-shadow-sm">
          O Seguro de Acidentes Pessoais para Passageiros da{" "}
          <strong>Multiplusgroup</strong> oferece a proteção completa para quem
          transportam vidas, com cobertura para diversos tipos de veículos
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
          >
            Para você
          </Link>
          <p className="text-multi-brown">
            Seguro de Acidentes Pessoais para Passageiros
          </p>
        </Breadcrumbs>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na <span className="font-title font-extrabold">Multiplusgroup</span>,
          acreditamos que proteger vidas é mais do que uma obrigação – é uma
          responsabilidade que exercemos com ética, transparência e excelência.
          O{" "}
          <span className="font-extrabold">
            {" "}
            Seguro de Acidentes Pessoais de Passageiros (APP)
          </span>{" "}
          é uma solução essencial para quem trabalha com o transporte de
          pessoas, garantindo segurança financeira e tranquilidade em caso de
          imprevistos.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Esse seguro oferece cobertura para despesas médicas, indenizações por
          invalidez ou morte decorrente de acidentes durante o transporte de
          passageiros. Seja em um veículo terrestre, aquático ou aéreo, o APP é
          indispensável para proteger tanto o transportador quanto seus
          passageiros, com um respaldo que transmite confiança e
          responsabilidade.
        </p>
      </AnimatedSection>
      <AnimatedSection className="bg-multi-gray w-full drop-shadow-lg">
        <Grid className="mx-auto flex w-[90%] flex-col items-start gap-[4rem] md:w-[80%] lg:flex-row">
          <AnimatedSection className="mt-[4rem] flex w-full flex-col justify-center gap-5">
            <Heading as="h3" className="text-multi-brown font-title marker">
              Por que o nosso seguro?
            </Heading>
            <List className="lg:!h-[390px]" items={porQueSeguro} />
          </AnimatedSection>
          <AnimatedSection className="w-full lg:hidden">
            <Divider className="bg-multi-brown/50 w-full" />
          </AnimatedSection>
          <AnimatedSection className="flex w-full flex-col justify-center gap-5 lg:mt-[4rem]">
            <Heading as="h3" className="text-multi-brown font-title marker">
              Tipos de Veículos Segurados:
            </Heading>
            <List className="lg:!h-[390px]" items={tiposVeiculo} />
          </AnimatedSection>
        </Grid>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex w-[90%] flex-col justify-center gap-5 md:w-[80%]">
        <p>
          Não importa o tipo de transporte ou a distância percorrida – proteger
          as pessoas que estão sob sua responsabilidade é essencial. Com a{" "}
          <span className="font-title font-extrabold">Multiplusgroup</span>,
          você encontra o seguro de acidentes pessoais de passageiros ideal, com
          coberturas que oferecem tranquilidade para quem transporta e confiança
          para quem embarca.
        </p>
      </AnimatedSection>
    </>
  );
};

export default SeguroAcidentePassageiro;
