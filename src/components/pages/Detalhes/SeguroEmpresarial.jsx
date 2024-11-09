import Hero from "@/components/Hero";
import AnimatedSection from "@/ui/AnimatedSection";

const SeguroEmpresarial = () => {
  return (
    <>
      <Hero type="heroCenter">
        <h1>Callout do seguro</h1>
        <p>Podemos colocar uma imagem aqui se quiser</p>
      </Hero>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Proteger o seu negócio é fundamental para garantir a continuidade e o
          sucesso da sua empresa. Na Multiplusgroup Corretora de Seguros,
          oferecemos soluções de seguro sob medida para pequenas e médias
          empresas, garantindo coberturas que atendem às necessidades
          específicas de cada tipo de empreendimento. Com parcerias com as
          principais seguradoras do mercado brasileiro, proporcionamos segurança
          e tranquilidade para que você possa focar no crescimento do seu
          negócio.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
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
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na Multiplusgroup, entendemos as particularidades de cada negócio e
          estamos comprometidos em oferecer soluções personalizadas e
          eficientes. Nossa equipe de corretores especializados está sempre à
          disposição para fornecer consultoria detalhada, ajudando você a
          escolher o seguro ideal que melhor se adapta às suas necessidades e ao
          seu orçamento, garantindo a proteção completa do seu patrimônio e a
          continuidade das suas operações.
        </p>
      </AnimatedSection>
    </>
  );
};

export { SeguroEmpresarial };
