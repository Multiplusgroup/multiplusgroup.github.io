import ImgSeguro from "@assets/img/seguros/img_12.jpg";
import { Breadcrumbs, Button } from "@mui/material";
import { Link } from "@tanstack/react-router";
import AnimatedSection from "@ui/AnimatedSection";
import Heading from "@ui/Heading";
import Hero from "@ui/Hero";

const SeguroLocacao = () => {
  return (
    <>
      <Hero
        type="left"
        color="overlay-black"
        height={500}
        img={ImgSeguro}
        imgClass="object-top lg:object-[0%_50%]"
      >
        <Heading
          as="h1"
          className="text-multi-green-light font-title drop-shadow-sm"
        >
          Seguro Fiança Locatícia
        </Heading>
        <p className="text-multi-white font-title drop-shadow-sm">
          Alugue seu imóvel com praticidade e segurança, sem a necessidade de um
          fiador grantindo traquilidade para locador e locatário com o Seguro
          Fiança Locatícia da <strong>MultiplusGroup</strong>
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
          <p className="text-multi-brown">Seguro Fiança Locatícia</p>
        </Breadcrumbs>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Alugar um imóvel, seja residencial ou comercial, envolve uma série de
          garantias para locador e locatário. Na{" "}
          <span className="font-title font-extrabold">Multiplusgroup</span>{" "}
          Corretora de Seguros, oferecemos o Seguro Fiança Locatícia, uma
          solução prática e segura que elimina a necessidade de fiador,
          facilitando a locação e garantindo tranquilidade para ambas as partes.
          Com parcerias com as principais seguradoras do mercado, proporcionamos
          coberturas que protegem o proprietário e oferecem flexibilidade para
          quem está alugando.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Nosso seguro cobre o pagamento do aluguel em caso de inadimplência,
          além de encargos como condomínio, IPTU, contas de água, luz e gás.
          Também oferecemos coberturas adicionais para danos ao imóvel e multas
          contratuais, tanto para imóveis residenciais quanto comerciais. Assim,
          tanto o locador quanto o locatário têm a segurança de que todas as
          obrigações serão cumpridas, sem a necessidade de recorrer a garantias
          tradicionais, como depósitos caução ou fiadores.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na <span className="font-title font-extrabold">Multiplusgroup</span>,
          nosso compromisso é simplificar o processo de locação e garantir total
          segurança para proprietários e inquilinos. Com consultoria
          especializada e atendimento personalizado, ajudamos você a encontrar o
          melhor seguro fiança locatícia para proteger o seu imóvel ou facilitar
          sua locação, com transparência, agilidade e sem complicações.
        </p>
      </AnimatedSection>
    </>
  );
};

export default SeguroLocacao;
