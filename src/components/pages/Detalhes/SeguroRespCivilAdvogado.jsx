import Hero from "@/components/Hero";
import AnimatedSection from "@/ui/AnimatedSection";

const SeguroRespCivilAdvogado = () => {
  return (
    <>
      <Hero type="heroCenter">
        <h1>Callout do seguro</h1>
        <p>Podemos colocar uma imagem aqui se quiser</p>
      </Hero>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          A atuação jurídica envolve uma grande responsabilidade, e qualquer
          erro ou omissão pode ter consequências significativas para seus
          clientes e para sua carreira. Na Multiplusgroup Corretora de Seguros,
          oferecemos o Seguro de Responsabilidade Civil Profissional para
          Advogados, criado para proteger contra reclamações e processos
          judiciais decorrentes de falhas no exercício da advocacia. Trabalhamos
          com as principais seguradoras do mercado para oferecer soluções de
          proteção completas e sob medida para sua prática profissional.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Esse seguro cobre despesas com defesa jurídica e indenizações em casos
          de danos materiais, morais ou financeiros causados a terceiros, além
          de erros processuais ou consultivos. Também oferecemos coberturas
          adicionais, como proteção contra falhas em pareceres jurídicos e
          acordos extrajudiciais, garantindo que você esteja protegido contra
          qualquer eventualidade que possa afetar sua reputação e o exercício da
          advocacia.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na Multiplusgroup, entendemos as particularidades da sua profissão e
          estamos prontos para oferecer soluções personalizadas. Nossa equipe de
          corretores especializados está à disposição para identificar os riscos
          específicos da sua prática e encontrar o seguro que melhor se adapta
          às suas necessidades, oferecendo proteção completa com transparência e
          sem burocracia.
        </p>
      </AnimatedSection>
    </>
  );
};

export { SeguroRespCivilAdvogado };
