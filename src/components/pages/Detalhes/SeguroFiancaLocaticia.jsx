import Hero from "@/components/Hero";
import AnimatedSection from "@/ui/AnimatedSection";

const SeguroFiancaLocaticia = () => {
  return (
    <>
      <Hero type="heroCenter">
        <h1>Callout do seguro</h1>
        <p>Podemos colocar uma imagem aqui se quiser</p>
      </Hero>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Alugar um imóvel, seja residencial ou comercial, envolve uma série de
          garantias para locador e locatário. Na Multiplusgroup Corretora de
          Seguros, oferecemos o Seguro Fiança Locatícia, uma solução prática e
          segura que elimina a necessidade de fiador, facilitando a locação e
          garantindo tranquilidade para ambas as partes. Com parcerias com as
          principais seguradoras do mercado, proporcionamos coberturas que
          protegem o proprietário e oferecem flexibilidade para quem está
          alugando.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Nosso seguro cobre o pagamento do aluguel em caso de inadimplência,
          além de encargos como condomínio, IPTU, contas de água, luz e gás.
          Também oferecemos coberturas adicionais para danos ao imóvel e multas
          contratuais, tanto para imóveis residenciais quanto comerciais. Assim,
          tanto o locador quanto o locatário têm a segurança de que todas as
          obrigações serão cumpridas, sem a necessidade de recorrer a garantias
          tradicionais, como depósitos caução ou fiadores.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na Multiplusgroup, nosso compromisso é simplificar o processo de
          locação e garantir total segurança para proprietários e inquilinos.
          Com consultoria especializada e atendimento personalizado, ajudamos
          você a encontrar o melhor seguro fiança locatícia para proteger o seu
          imóvel ou facilitar sua locação, com transparência, agilidade e sem
          complicações.
        </p>
      </AnimatedSection>
    </>
  );
};

export { SeguroFiancaLocaticia };
