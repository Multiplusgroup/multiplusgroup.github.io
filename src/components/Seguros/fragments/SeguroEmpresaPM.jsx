import ImgSeguro from "@assets/img/seguros/img_03.jpg";
import { Breadcrumbs, Button } from "@mui/material";
import { Link } from "@tanstack/react-router";
import AnimatedSection from "@ui/AnimatedSection";
import Heading from "@ui/Heading";
import Hero from "@ui/Hero";

const SeguroEmpresaPM = () => {
  return (
    <>
      <Hero
        type="left"
        color="overlay-black"
        height={500}
        img={ImgSeguro}
        imgClass="lg:object-[0%_30%]"
      >
        <Heading
          as="h1"
          className="text-multi-green-light font-title drop-shadow-sm"
        >
          Seguro Empresarial
        </Heading>
        <p className="text-multi-white font-title drop-shadow-sm">
          Proteja seu empreendimento com o Seguro Empresarial personalizado
          oferecido pela <strong>Multiplusgroup</strong>, com descontos e
          promoções exclusivas para sua empresa
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
            Seguro Empresarial (pequeno e médio porte)
          </p>
        </Breadcrumbs>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Proteger o seu negócio é fundamental para garantir a continuidade e o
          sucesso da sua empresa. Na{" "}
          <span className="font-title font-extrabold">Multiplusgroup</span>{" "}
          Corretora de Seguros, oferecemos soluções de seguro sob medida para
          pequenas e médias empresas, garantindo coberturas que atendem às
          necessidades específicas de cada tipo de empreendimento. Com parcerias
          com as principais seguradoras do mercado brasileiro, proporcionamos
          segurança e tranquilidade para que você possa focar no crescimento do
          seu negócio.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Nossos seguros empresariais incluem coberturas essenciais, como
          proteção contra incêndios, roubos, danos elétricos, e desastres
          naturais. Além disso, oferecemos opções de cobertura adicional que
          incluem responsabilidade civil, seguro de vida para sócios e
          funcionários, e proteção contra interrupções de negócios. Para
          empresas que necessitam de uma cobertura mais abrangente,
          disponibilizamos planos que incluem assistência 24 horas, cobertura de
          equipamentos e estoques, e proteção contra perdas financeiras.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na <span className="font-title font-extrabold">Multiplusgroup</span>,
          entendemos as particularidades de cada negócio e estamos comprometidos
          em oferecer soluções personalizadas e eficientes. Nossa equipe de
          corretores especializados está sempre à disposição para fornecer
          consultoria detalhada, ajudando você a escolher o seguro ideal que
          melhor se adapta às suas necessidades e ao seu orçamento, garantindo a
          proteção completa do seu patrimônio e a continuidade das suas
          operações.
        </p>
      </AnimatedSection>
    </>
  );
};

export default SeguroEmpresaPM;
