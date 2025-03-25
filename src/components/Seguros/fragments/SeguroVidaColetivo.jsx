import ImgSeguro from "@assets/img/seguros/img_05.jpg";
import { Breadcrumbs, Button } from "@mui/material";
import { Link } from "@tanstack/react-router";
import AnimatedSection from "@ui/AnimatedSection";
import Heading from "@ui/Heading";
import Hero from "@ui/Hero";

const SeguroVidaColetivo = () => {
  return (
    <>
      <Hero
        type="right"
        color="overlay-black"
        height={500}
        img={ImgSeguro}
        imgClass="object-top lg:object-[0%_20%]"
      >
        <Heading
          as="h1"
          className="text-multi-green-light font-title drop-shadow-sm"
        >
          Seguro de Vida Coletivo
        </Heading>
        <p className="text-multi-white font-title drop-shadow-sm">
          Proteção abrangente e benefícios essenciais para seus colaboradoes e
          suas famílias é somente com a <strong>Multiplusgroup</strong> e as
          coberturas sobre medida oferecidas em nosso Seguro de Vida Coletivo
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
          <p className="text-multi-brown">Seguro de Vida Coletivo</p>
        </Breadcrumbs>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Garantir a segurança e o bem-estar dos seus colaboradores é
          fundamental para o sucesso e a continuidade da sua empresa. Na{" "}
          <span className="font-title font-extrabold">Multiplusgroup</span>{" "}
          Corretora de Seguros, oferecemos seguros de Vida Coletivo que
          proporcionam proteção abrangente e benefícios essenciais para seus
          funcionários e suas famílias. Com parcerias com as melhores
          seguradoras do mercado brasileiro, disponibilizamos planos ajustados
          às necessidades específicas de cada empresa, assegurando tranquilidade
          e segurança para todos.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Nossos produtos incluem coberturas básicas, como proteção contra roubo
          e colisão, além de coberturas adicionais, como carro reserva,
          assistência 24 horas, proteção de vidros, e muito mais. Para aqueles
          que desejam uma proteção ainda mais completa, oferecemos planos que
          incluem assistência residencial, cobertura para acessórios do veículo,
          e indenização em caso de perda total.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na <span className="font-title font-extrabold">Multiplusgroup</span>,
          nosso compromisso é encontrar a melhor solução de seguro para você,
          sempre com a máxima transparência e comprometimento. Nossos corretores
          especializados estão prontos para oferecer consultoria personalizada,
          ajudando você a escolher o plano que melhor se adapta às suas
          necessidades e ao seu orçamento, sem burocracia e com total
          conveniência.
        </p>
      </AnimatedSection>
    </>
  );
};

export default SeguroVidaColetivo;
