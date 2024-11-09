import Hero from "@/components/Hero";
import AnimatedSection from "@/ui/AnimatedSection";

const SeguroByke = () => {
  return (
    <>
      <Hero type="heroCenter">
        <h1>Callout do seguro</h1>
        <p>Podemos colocar uma imagem aqui se quiser</p>
      </Hero>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Para os amantes de ciclismo, que apreciam passeios ao ar livre,
          atividades físicas e a conexão com a natureza, ter a sua bicicleta
          protegida é essencial. Na Multiplusgroup Corretora de Seguros,
          oferecemos o Seguro Bike, desenvolvido especialmente para garantir a
          segurança da sua bicicleta, seja em trajetos urbanos ou em trilhas
          mais desafiadoras. Com a parceria das melhores seguradoras do mercado,
          proporcionamos uma cobertura completa para que você pedale com total
          tranquilidade.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Nosso seguro cobre situações como roubo e furto qualificado, além de
          danos causados por acidentes durante o uso ou transporte da bicicleta.
          Também oferecemos coberturas adicionais para equipamentos e
          acessórios, e proteção contra danos durante competições ou treinos.
          Seja para o ciclista que usa a bike no dia a dia ou para os
          entusiastas de passeios de fim de semana, temos o plano ideal para
          manter sua bicicleta sempre protegida.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na Multiplusgroup, valorizamos o seu estilo de vida ativo e estamos
          prontos para oferecer as melhores soluções de seguro para sua bike.
          Com consultoria especializada e atendimento personalizado, garantimos
          que você tenha a cobertura que precisa para pedalar sem preocupações,
          seja na cidade ou em meio à natureza.
        </p>
      </AnimatedSection>
    </>
  );
};

export { SeguroByke };
