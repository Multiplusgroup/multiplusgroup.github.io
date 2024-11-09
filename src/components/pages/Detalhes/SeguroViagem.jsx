import Hero from "@/components/Hero";
import AnimatedSection from "@/ui/AnimatedSection";

const SeguroViagem = () => {
  return (
    <>
      <Hero type="heroCenter">
        <h1>Callout do seguro</h1>
        <p>Podemos colocar uma imagem aqui se quiser</p>
      </Hero>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Viajar é sinônimo de descoberta, descanso e novas experiências, mas
          imprevistos podem acontecer. Para que você aproveite ao máximo cada
          momento, a Multiplusgroup Corretora de Seguros oferece o Seguro
          Viagem, garantindo proteção e tranquilidade em qualquer destino, seja
          no Brasil ou no exterior. Com as melhores seguradoras do mercado,
          oferecemos uma cobertura completa para que você possa viajar com
          segurança e sem preocupações.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Nosso seguro viagem cobre despesas médicas e hospitalares, além de
          assistência em casos de acidentes, doenças, extravio de bagagem,
          cancelamento ou atraso de voos. Também oferecemos coberturas
          adicionais como assistência jurídica, proteção em caso de perda de
          documentos e reembolsos em situações de emergências familiares. Seja
          em viagens de lazer, estudos ou negócios, o Seguro Viagem proporciona
          o suporte necessário para que sua jornada seja tranquila do início ao
          fim.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na Multiplusgroup, estamos prontos para tornar sua experiência de
          viagem ainda mais segura e agradável. Nossa equipe de corretores
          especializados oferece consultoria personalizada para encontrar o
          plano ideal, garantindo cobertura sob medida para o seu perfil e
          destino. Viaje com a certeza de estar protegido e desfrute da sua
          aventura com total tranquilidade.
        </p>
      </AnimatedSection>
    </>
  );
};

export { SeguroViagem };
