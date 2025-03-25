import ImgSeguro from "@assets/img/seguros/img_13.jpg";
import { Breadcrumbs, Button } from "@mui/material";
import { Link } from "@tanstack/react-router";
import AnimatedSection from "@ui/AnimatedSection";
import Heading from "@ui/Heading";
import Hero from "@ui/Hero";

const SeguroViagem = () => {
  return (
    <>
      <Hero
        type="left"
        color="overlay-black"
        height={500}
        img={ImgSeguro}
        imgClass="object-top lg:object-[0_20%]"
      >
        <Heading
          as="h1"
          className="text-multi-green-light font-title drop-shadow-sm"
        >
          Seguro Viagem
        </Heading>
        <p className="text-multi-white font-title drop-shadow-sm">
          As coberturas oferecidas pelo Seguro Viagem da{" "}
          <strong>Multiplusgroup</strong> permitem que você viaje com
          tranquilidade, conforto e segurança, sem se preocupar com quaisquer
          imprevistos
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
          <p className="text-multi-brown">Seguro Viagem</p>
        </Breadcrumbs>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Viajar é sinônimo de descoberta, descanso e novas experiências, mas
          imprevistos podem acontecer. Para que você aproveite ao máximo cada
          momento, a{" "}
          <span className="font-title font-extrabold"> Multiplusgroup</span>{" "}
          Corretora de Seguros oferece o Seguro Viagem, garantindo proteção e
          tranquilidade em qualquer destino, seja no Brasil ou no exterior. Com
          as melhores seguradoras do mercado, oferecemos uma cobertura completa
          para que você possa viajar com segurança e sem preocupações.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Nosso seguro viagem cobre despesas médicas e hospitalares, além de
          assistência em casos de acidentes, doenças, extravio de bagagem,
          cancelamento ou atraso de voos. Também oferecemos coberturas
          adicionais como assistência jurídica, proteção em caso de perda de
          documentos e reembolsos em situações de emergências familiares. Seja
          em viagens de lazer, estudos ou negócios, o Seguro Viagem proporciona
          o suporte necessário para que sua jornada seja tranquila do início ao
          fim.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na <span className="font-title font-extrabold">Multiplusgroup</span>,
          estamos prontos para tornar sua experiência de viagem ainda mais
          segura e agradável. Nossa equipe de corretores especializados oferece
          consultoria personalizada para encontrar o plano ideal, garantindo
          cobertura sob medida para o seu perfil e destino. Viaje com a certeza
          de estar protegido e desfrute da sua aventura com total tranquilidade.
        </p>
      </AnimatedSection>
    </>
  );
};

export default SeguroViagem;
