import Hero from "@/components/Hero";
import AnimatedSection from "@/ui/AnimatedSection";

const SeguroAuto = () => {
  return (
    <>
      <AnimatedSection className="mx-auto flex flex-col justify-center gap-5">
        <Hero type="heroCenter">
          <h1>Callout do seguro</h1>
          <p>Podemos colocar uma imagem aqui se quiser</p>
        </Hero>
      </AnimatedSection>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Proteger seu veículo contra imprevistos é essencial para garantir
          tranquilidade no dia a dia. Na Multiplusgroup Corretora de Seguros,
          oferecemos uma ampla gama de seguros de automóvel, ajustados às
          necessidades específicas de cada cliente. Trabalhamos com as melhores
          seguradoras do mercado brasileiro para proporcionar opções que cobrem
          desde colisões, roubos e furtos até danos causados por fenômenos
          naturais e terceiros.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Nossos produtos incluem coberturas básicas, como proteção contra roubo
          e colisão, além de coberturas adicionais, como carro reserva,
          assistência 24 horas, proteção de vidros, e muito mais. Para aqueles
          que desejam uma proteção ainda mais completa, oferecemos planos que
          incluem assistência residencial, cobertura para acessórios do veículo,
          e indenização em caso de perda total.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na Multiplusgroup, nosso compromisso é encontrar a melhor solução de
          seguro para você, sempre com a máxima transparência e comprometimento.
          Nossos corretores especializados estão prontos para oferecer
          consultoria personalizada, ajudando você a escolher o plano que melhor
          se adapta às suas necessidades e ao seu orçamento, sem burocracia e
          com total conveniência.
        </p>
      </AnimatedSection>
    </>
  );
};

export { SeguroAuto };
