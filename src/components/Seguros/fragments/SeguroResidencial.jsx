import ImgSeguro from "@assets/img/seguros/img_02.jpg";
import { Breadcrumbs, Button } from "@mui/material";
import { Link } from "@tanstack/react-router";
import AnimatedSection from "@ui/AnimatedSection";
import Heading from "@ui/Heading";
import Hero from "@ui/Hero";

const SeguroResidencial = () => {
  return (
    <>
      <Hero type="right" color="overlay-black" height={500} img={ImgSeguro}>
        <Heading
          as="h1"
          className="text-multi-green-light font-title drop-shadow-sm"
        >
          Seguro Residencial
        </Heading>
        <p className="text-multi-white font-title drop-shadow-sm">
          Desfrute o conforto de seu lar garantingdo ainda mais segurança com os
          seguros residenciais oferecidos pela <strong>Multiplusgroup</strong>,
          usufruindo da variedade de coberturas disponíveis
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
          <p className="text-multi-brown">Seguro Residencial</p>
        </Breadcrumbs>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Proteger o seu lar é uma prioridade, e na{" "}
          <span className="font-title font-extrabold">Multiplusgroup</span>{" "}
          Corretora de Seguros, oferecemos uma variedade de seguros residenciais
          adaptados às suas necessidades. Com uma parceria sólida com as
          principais seguradoras do mercado brasileiro, garantimos coberturas
          abrangentes para proteger sua casa contra uma série de riscos, como
          incêndios, roubos, danos elétricos, e desastres naturais.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Nossos seguros residenciais incluem coberturas básicas para proteger a
          estrutura e os bens da sua residência, além de coberturas adicionais
          que oferecem maior tranquilidade, como assistência 24 horas para
          emergências domésticas, reparos elétricos e hidráulicos, cobertura
          para bens de alto valor, e responsabilidade civil familiar. Também
          oferecemos planos que cobrem danos causados por vendavais, impacto de
          veículos, e vazamentos de água.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na <span className="font-title font-extrabold">Multiplusgroup</span>,
          nosso objetivo é proporcionar a máxima segurança e tranquilidade para
          você e sua família. Com atendimento personalizado e uma equipe de
          corretores especializados, ajudamos você a encontrar a melhor solução
          de seguro residencial, garantindo proteção completa com total
          transparência e eficiência, sem complicações e com a conveniência que
          você merece.
        </p>
      </AnimatedSection>
    </>
  );
};

export default SeguroResidencial;
