import ImgSeguro from "@assets/img/seguros/img_04.jpg";
import { Breadcrumbs, Button } from "@mui/material";
import { Link } from "@tanstack/react-router";
import AnimatedSection from "@ui/AnimatedSection";
import Heading from "@ui/Heading";
import Hero from "@ui/Hero";

const SeguroRCGeral = () => {
  return (
    <>
      <Hero
        type="left"
        color="overlay-black"
        height={500}
        img={ImgSeguro}
        imgClass="object-top lg:object-[0%_30%]"
      >
        <Heading
          as="h1"
          className="text-multi-green-light font-title drop-shadow-sm"
        >
          Seguro de RC Geral
        </Heading>
        <p className="text-multi-white font-title drop-shadow-sm">
          Garanta a continuidade e credibilidade de sua empresa com o Seguro de
          Responsabilidade Civil Geral oferecido pela{" "}
          <strong>Multiplusgroup</strong> com a melhor cobertura do mercado
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
            hash="para-empresa"
            className="text-multi-black hover:!text-multi-brown"
          >
            Para sua Empresa
          </Link>
          <p className="text-multi-brown">
            Seguro de Responsabilidade Civil Geral
          </p>
        </Breadcrumbs>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Proteger sua empresa contra eventuais responsabilidades civis é
          essencial para assegurar sua continuidade e credibilidade. Na{" "}
          <span className="font-title font-extrabold">Multiplusgroup</span>{" "}
          Corretora de Seguros, oferecemos seguros de Responsabilidade Civil
          Geral que abrangem uma ampla gama de riscos, garantindo a
          tranquilidade necessária para que você se concentre no desenvolvimento
          do seu negócio. Com as melhores seguradoras do mercado brasileiro,
          proporcionamos coberturas robustas e personalizadas para atender às
          demandas específicas de cada cliente.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Nosso seguro de Responsabilidade Civil Geral inclui proteção contra
          danos materiais e corporais causados a terceiros, cobrindo despesas
          legais e indenizações. Oferecemos coberturas adicionais para riscos
          específicos, como responsabilidade civil de produtos, riscos
          ambientais, e responsabilidade profissional. Além disso, para empresas
          que necessitam de uma proteção mais abrangente, disponibilizamos
          planos que incluem cobertura para recall de produtos, danos morais e
          publicidade, e riscos em eventos.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na <span className="font-title font-extrabold">Multiplusgroup</span>,
          nosso compromisso é fornecer soluções de seguro que garantam segurança
          e tranquilidade para sua empresa. Nossa equipe de corretores
          especializados está pronta para oferecer consultoria personalizada,
          identificando os riscos específicos do seu negócio e propondo as
          melhores soluções de cobertura. Com total transparência e eficiência,
          ajudamos você a proteger seu patrimônio e a reputação da sua empresa,
          sem burocracia e com a conveniência que você merece.
        </p>
      </AnimatedSection>
    </>
  );
};

export default SeguroRCGeral;
