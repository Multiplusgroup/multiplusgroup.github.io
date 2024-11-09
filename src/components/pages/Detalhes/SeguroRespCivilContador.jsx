import Hero from "@/components/Hero";
import AnimatedSection from "@/ui/AnimatedSection";

const SeguroRespCivilContador = () => {
  return (
    <>
      <Hero type="heroCenter">
        <h1>Callout do seguro</h1>
        <p>Podemos colocar uma imagem aqui se quiser</p>
      </Hero>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          O trabalho do contador exige precisão e responsabilidade, já que
          envolve a gestão de informações financeiras cruciais para empresas e
          indivíduos. Na Multiplusgroup Corretora de Seguros, oferecemos o
          Seguro de Responsabilidade Civil Profissional para Contadores,
          projetado para proteger contra reclamações e ações judiciais que
          possam surgir de erros, omissões ou negligência no exercício das suas
          funções. Com as melhores seguradoras do mercado, garantimos a
          segurança necessária para que você desempenhe sua profissão com total
          tranquilidade.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          O seguro cobre custos relacionados a danos materiais, morais ou
          financeiros causados a terceiros, além de despesas com defesa jurídica
          e eventuais indenizações. Também oferecemos coberturas adicionais,
          como proteção contra erros em consultorias tributárias, fiscais e
          contábeis, garantindo que você esteja resguardado contra imprevistos
          que possam afetar sua carreira e sua reputação profissional.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na Multiplusgroup, nosso compromisso é proporcionar soluções de seguro
          que se adaptem às necessidades específicas da sua atividade contábil.
          Nossa equipe de corretores especializados está pronta para oferecer
          consultoria personalizada, ajudando você a encontrar a melhor
          cobertura para sua segurança profissional, com transparência,
          eficiência e sem burocracia.
        </p>
      </AnimatedSection>
    </>
  );
};

export { SeguroRespCivilContador };
