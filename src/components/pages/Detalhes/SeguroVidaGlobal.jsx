import Hero from "@/components/Hero";
import AnimatedSection from "@/ui/AnimatedSection";

const SeguroVidaGlobal = () => {
  return (
    <>
      <Hero type="heroCenter">
        <h1>Callout do seguro</h1>
        <p>Podemos colocar uma imagem aqui se quiser</p>
      </Hero>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Garantir a segurança e o bem-estar dos seus colaboradores é
          fundamental para o sucesso e a continuidade da sua empresa. Na
          Multiplusgroup Corretora de Seguros, oferecemos seguros de Vida
          Coletivo que proporcionam proteção abrangente e benefícios essenciais
          para seus funcionários e suas famílias. Com parcerias com as melhores
          seguradoras do mercado brasileiro, disponibilizamos planos ajustados
          às necessidades específicas de cada empresa, assegurando tranquilidade
          e segurança para todos.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Nosso seguro de Vida Coletivo inclui coberturas básicas, como proteção
          em caso de morte natural ou acidental, invalidez permanente total ou
          parcial, e assistência funeral. Além disso, oferecemos coberturas
          adicionais que incluem diárias por incapacidade temporária, cobertura
          para doenças graves, e assistência médica e hospitalar. Para empresas
          que desejam oferecer um benefício ainda mais completo,
          disponibilizamos planos que incluem serviços de assistência à saúde e
          programas de bem-estar e qualidade de vida.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Na Multiplusgroup, entendemos a importância de cuidar dos seus
          colaboradores e estamos comprometidos em oferecer soluções de seguro
          que atendam às suas expectativas. Nossa equipe de corretores
          especializados está pronta para fornecer consultoria personalizada,
          ajudando você a escolher o plano de seguro de vida coletivo que melhor
          se adapta às necessidades da sua empresa e ao seu orçamento,
          garantindo proteção completa e satisfação para seus funcionários.
        </p>
      </AnimatedSection>
    </>
  );
};

export { SeguroVidaGlobal };
