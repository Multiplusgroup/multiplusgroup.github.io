import Hero from "@/components/Hero";
import AnimatedSection from "@/ui/AnimatedSection";

const SeguroResidencial = () => {
  return (
    <>
      <Hero type="heroCenter">
        <h1>Callout do seguro</h1>
        <p>Podemos colocar uma imagem aqui se quiser</p>
      </Hero>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Proteger o seu lar é uma prioridade, e na Multiplusgroup Corretora de
          Seguros, oferecemos uma variedade de seguros residenciais adaptados às
          suas necessidades. Com uma parceria sólida com as principais
          seguradoras do mercado brasileiro, garantimos coberturas abrangentes
          para proteger sua casa contra uma série de riscos, como incêndios,
          roubos, danos elétricos, e desastres naturais.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
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
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na Multiplusgroup, nosso objetivo é proporcionar a máxima segurança e
          tranquilidade para você e sua família. Com atendimento personalizado e
          uma equipe de corretores especializados, ajudamos você a encontrar a
          melhor solução de seguro residencial, garantindo proteção completa com
          total transparência e eficiência, sem complicações e com a
          conveniência que você merece.
        </p>
      </AnimatedSection>
    </>
  );
};

export { SeguroResidencial };
