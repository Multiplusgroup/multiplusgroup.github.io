import Hero from "@/components/Hero";
import AnimatedSection from "@/ui/AnimatedSection";

const SeguroRespCivil = () => {
  return (
    <>
      <Hero type="heroCenter" color="heroOverlay">
        <h1>Callout do seguro</h1>
        <p>Podemos colocar uma imagem aqui se quiser</p>
      </Hero>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Proteger sua empresa contra eventuais responsabilidades civis é
          essencial para assegurar sua continuidade e credibilidade. Na
          Multiplusgroup Corretora de Seguros, oferecemos seguros de
          Responsabilidade Civil Geral que abrangem uma ampla gama de riscos,
          garantindo a tranquilidade necessária para que você se concentre no
          desenvolvimento do seu negócio. Com as melhores seguradoras do mercado
          brasileiro, proporcionamos coberturas robustas e personalizadas para
          atender às demandas específicas de cada cliente.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
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
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na Multiplusgroup, nosso compromisso é fornecer soluções de seguro que
          garantam segurança e tranquilidade para sua empresa. Nossa equipe de
          corretores especializados está pronta para oferecer consultoria
          personalizada, identificando os riscos específicos do seu negócio e
          propondo as melhores soluções de cobertura. Com total transparência e
          eficiência, ajudamos você a proteger seu patrimônio e a reputação da
          sua empresa, sem burocracia e com a conveniência que você merece.
        </p>
      </AnimatedSection>
    </>
  );
};

export { SeguroRespCivil };
