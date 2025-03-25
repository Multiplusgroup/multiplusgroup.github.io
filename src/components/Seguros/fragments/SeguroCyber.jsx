import ImgSeguro from "@assets/img/seguros/img_06.jpg";
import { Breadcrumbs, Button } from "@mui/material";
import { Link } from "@tanstack/react-router";
import AnimatedSection from "@ui/AnimatedSection";
import Heading from "@ui/Heading";
import Hero from "@ui/Hero";

const SeguroCyber = () => {
  return (
    <>
      <Hero
        type="right"
        color="overlay-black"
        height={500}
        img={ImgSeguro}
        imgClass="object-top lg:object-[0%_35%]"
      >
        <Heading
          as="h1"
          className="text-multi-green-light font-title drop-shadow-sm"
        >
          Seguro Cyber
        </Heading>
        <p className="text-multi-white font-title drop-shadow-sm">
          O Seguro Cyber oferecido pela <strong>Multiplusgroup</strong> fornece
          as melhores opções de proteção de dados para sua empresa, garantindo
          segurança no ambiente digital
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
          <p className="text-multi-brown">Seguro Cyber</p>
        </Breadcrumbs>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Em um mundo cada vez mais digital, a segurança dos dados e sistemas da
          sua empresa é essencial. Na{" "}
          <span className="font-title font-extrabold">Multiplusgroup</span>{" "}
          Corretora de Seguros, oferecemos o Seguro Cyber, desenvolvido para
          proteger empresas brasileiras contra os crescentes riscos
          cibernéticos, como ataques hackers, vazamentos de dados e interrupções
          em sistemas. Trabalhamos com as principais seguradoras do mercado para
          oferecer soluções completas que garantem a segurança da sua empresa no
          ambiente digital.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          O Seguro Cyber cobre uma série de riscos, incluindo custos de
          recuperação de dados, notificação a clientes em caso de vazamento,
          custos de defesa jurídica e indenizações por danos a terceiros. Além
          disso, oferecemos coberturas adicionais, como proteção contra perda de
          receita devido à interrupção dos sistemas, extorsão cibernética, e
          reparação de danos à reputação. Com planos personalizados, sua empresa
          estará preparada para lidar com qualquer incidente digital,
          minimizando perdas e garantindo uma rápida recuperação.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na <span className="font-title font-extrabold">Multiplusgroup</span>,
          nosso compromisso é proteger o futuro digital do seu negócio. Nossa
          equipe de corretores especializados está pronta para oferecer
          consultoria personalizada, identificando os riscos cibernéticos
          específicos da sua empresa e oferecendo as melhores soluções de
          cobertura. Conte conosco para proteger sua empresa contra ameaças
          virtuais, com segurança, eficiência e sem burocracia.
        </p>
      </AnimatedSection>
    </>
  );
};

export default SeguroCyber;
