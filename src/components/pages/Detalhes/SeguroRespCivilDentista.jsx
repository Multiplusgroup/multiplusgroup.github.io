import Hero from "@/components/Hero";
import AnimatedSection from "@/ui/AnimatedSection";

const SeguroRespCivilDentista = () => {
  return (
    <>
      <Hero type="heroCenter">
        <h1>Callout do seguro</h1>
        <p>Podemos colocar uma imagem aqui se quiser</p>
      </Hero>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Como dentista, sua atuação envolve uma grande responsabilidade com a
          saúde e o bem-estar dos seus pacientes. Na Multiplusgroup Corretora de
          Seguros, oferecemos o Seguro de Responsabilidade Civil Profissional
          especialmente desenvolvido para proteger dentistas contra eventuais
          reclamações e processos judiciais decorrentes de erros, omissões ou
          negligência durante o exercício da profissão. Com as melhores
          seguradoras do mercado, garantimos a tranquilidade necessária para que
          você foque em cuidar dos seus pacientes com segurança.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Esse seguro oferece cobertura para despesas relacionadas a danos
          físicos, materiais ou morais causados a terceiros durante o
          atendimento odontológico, incluindo custos de defesa jurídica e
          indenizações. Além disso, contamos com coberturas adicionais que
          incluem responsabilidade por procedimentos estéticos, assistência
          jurídica especializada e acordos extrajudiciais. Com o Seguro de
          Responsabilidade Civil Profissional para Dentistas, você estará
          protegido contra imprevistos que possam impactar sua reputação e a
          continuidade da sua carreira.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na Multiplusgroup, nossa prioridade é oferecer soluções de seguro que
          garantam a sua segurança profissional. Com consultoria personalizada e
          uma equipe de corretores especializados, ajudamos você a escolher o
          plano ideal para suas necessidades, garantindo proteção completa com
          agilidade, transparência e sem complicações.
        </p>
      </AnimatedSection>
    </>
  );
};

export { SeguroRespCivilDentista };
