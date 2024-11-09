import Hero from "@/components/Hero";
import AnimatedSection from "@/ui/AnimatedSection";

const SeguroEngenharia = () => {
  return (
    <>
      <Hero type="heroCenter">
        <h1>Callout do seguro</h1>
        <p>Podemos colocar uma imagem aqui se quiser</p>
      </Hero>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Construções e reformas, seja em projetos residenciais, comerciais ou
          industriais, envolvem grandes investimentos e, consequentemente,
          riscos. O Seguro de Riscos de Engenharia da Multiplusgroup Corretora
          de Seguros oferece proteção completa para obras de todos os portes,
          garantindo segurança em todas as fases do projeto. Com as principais
          seguradoras do mercado, oferecemos soluções de cobertura para novas
          construções, reformas de imóveis residenciais, comerciais e lojas em
          shopping centers, assegurando que seu projeto seja concluído sem
          surpresas desagradáveis.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Nosso seguro cobre danos materiais causados por acidentes na execução
          da obra, como incêndios, explosões, desmoronamentos e roubos de
          materiais. Também oferecemos coberturas adicionais para
          responsabilidade civil, garantindo proteção contra danos a terceiros,
          além de coberturas para equipamentos e máquinas utilizados na obra.
          Seja uma grande construção industrial ou uma reforma de pequeno porte,
          temos o seguro ideal para proteger seu projeto em todas as etapas.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na Multiplusgroup, estamos comprometidos em oferecer soluções
          personalizadas que atendam às necessidades específicas do seu
          empreendimento. Com nossa equipe de corretores especializados,
          garantimos um atendimento dedicado para encontrar o melhor seguro de
          Riscos de Engenharia para sua obra, oferecendo proteção completa com
          eficiência, transparência e sem complicações.
        </p>
      </AnimatedSection>
    </>
  );
};

export { SeguroEngenharia };
