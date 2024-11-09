import Hero from "@/components/Hero";
import AnimatedSection from "@/ui/AnimatedSection";

const SeguroRespCivilMedico = () => {
  return (
    <>
      <Hero type="heroCenter">
        <h1>Callout do seguro</h1>
        <p>Podemos colocar uma imagem aqui se quiser</p>
      </Hero>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Exercer a medicina envolve grandes responsabilidades e decisões que
          impactam diretamente a vida e a saúde dos pacientes. Na Multiplusgroup
          Corretora de Seguros, oferecemos o Seguro de Responsabilidade Civil
          Profissional para Médicos, que proporciona proteção essencial contra
          possíveis reclamações e processos judiciais decorrentes de erros,
          omissões ou negligência no exercício da profissão. Com as melhores
          seguradoras do mercado, garantimos segurança e tranquilidade para que
          você foque no que mais importa: cuidar dos seus pacientes.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Nosso seguro cobre despesas relacionadas a danos físicos, morais ou
          materiais causados a terceiros durante o atendimento médico, além de
          custos com defesa jurídica e indenizações. Também oferecemos
          coberturas adicionais para procedimentos cirúrgicos, assistência
          jurídica especializada e acordos extrajudiciais. Com o Seguro de
          Responsabilidade Civil Profissional para Médicos, você estará
          resguardado contra imprevistos que podem comprometer sua carreira e
          reputação.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na Multiplusgroup, nos dedicamos a oferecer soluções personalizadas
          para proteger sua prática médica. Nossa equipe de corretores
          especializados está à disposição para entender suas necessidades
          específicas e encontrar a melhor solução de seguro, garantindo uma
          proteção completa com transparência, agilidade e sem burocracia.
        </p>
      </AnimatedSection>
    </>
  );
};

export { SeguroRespCivilMedico };
