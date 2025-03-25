import ImgSeguro from "@assets/img/seguros/img_10.jpg";
import { Breadcrumbs, Button } from "@mui/material";
import { Link } from "@tanstack/react-router";
import AnimatedSection from "@ui/AnimatedSection";
import Heading from "@ui/Heading";
import Hero from "@ui/Hero";

const SeguroRCAdvogado = () => {
  return (
    <>
      <Hero
        type="right"
        color="overlay-black"
        img={ImgSeguro}
        imgClass="object-top lg:object-[0%_20%]"
        height={500}
      >
        <Heading
          as="h1"
          className="text-multi-green-light font-title drop-shadow-sm"
        >
          Seguro de RC para Advogados
        </Heading>
        <p className="text-multi-white font-title drop-shadow-sm">
          O Seguro de Responsabilidade Civil para Advogados oferecido pela{" "}
          <strong>Multiplusgroup</strong> permite que você trabalhe com foco no
          bem estar de seus clientes de forma segura e responsável
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
            Seguro de Responsabilidade Civil para Advogados
          </p>
        </Breadcrumbs>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          A atuação jurídica envolve uma grande responsabilidade, e qualquer
          erro ou omissão pode ter consequências significativas para seus
          clientes e para sua carreira. Na{" "}
          <strong className="font-title font-extrabold">Multiplusgroup</strong>{" "}
          Corretora de Seguros, oferecemos o Seguro de Responsabilidade Civil
          Profissional para Advogados, criado para proteger contra reclamações e
          processos judiciais decorrentes de falhas no exercício da advocacia.
          Trabalhamos com as principais seguradoras do mercado para oferecer
          soluções de proteção completas e sob medida para sua prática
          profissional.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Esse seguro cobre despesas com defesa jurídica e indenizações em casos
          de danos materiais, morais ou financeiros causados a terceiros, além
          de erros processuais ou consultivos. Também oferecemos coberturas
          adicionais, como proteção contra falhas em pareceres jurídicos e
          acordos extrajudiciais, garantindo que você esteja protegido contra
          qualquer eventualidade que possa afetar sua reputação e o exercício da
          advocacia.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na <span className="font-title font-extrabold">Multiplusgroup</span>,
          entendemos as particularidades da sua profissão e estamos prontos para
          oferecer soluções personalizadas. Nossa equipe de corretores
          especializados está à disposição para identificar os riscos
          específicos da sua prática e encontrar o seguro que melhor se adapta
          às suas necessidades, oferecendo proteção completa com transparência e
          sem burocracia.
        </p>
      </AnimatedSection>
    </>
  );
};

export default SeguroRCAdvogado;
