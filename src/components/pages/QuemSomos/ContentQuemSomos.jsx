import AnimatedDivider from "@/components/AnimatedDivider";
import AnimatedSection from "@/ui/AnimatedSection";

const ContentQuemSomos = () => {
  return (
    <>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <h1 className="mb-[2rem] text-center">Quem Somos</h1>
        <p>
          A Multiplusgroup Corretora de Seguros é uma empresa com mais de uma
          década de experiência no mercado, liderada por sócios com mais de 30
          anos de expertise no ramo de seguros. Nosso compromisso é oferecer
          consultoria especializada e soluções de seguros que atendam às
          necessidades únicas de cada cliente, sejam eles indivíduos ou
          empresas.
        </p>
      </AnimatedSection>
      <AnimatedDivider />
      <AnimatedSection className="mx-auto flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <h1 className="mb-[2rem] text-center">Visão</h1>
        <p>
          Estamos focados em ser reconhecidos como uma das principais empresas
          do setor, destacando-nos pela excelência na corretagem de seguros e
          pelo compromisso inabalável com a satisfação do cliente.
        </p>
      </AnimatedSection>
      <AnimatedDivider />
      <AnimatedSection className="mx-auto flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <h1 className="mb-[2rem] text-center">Missão</h1>
        <p>
          Nossa missão é proporcionar segurança e tranquilidade, apresentando
          soluções eficazes e transparentes, sempre alinhadas com os mais altos
          padrões éticos e de excelência.
        </p>
      </AnimatedSection>
      <AnimatedDivider />
      <AnimatedSection className="mx-auto flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <h1 className="mb-[2rem] text-center">Valores</h1>
        <p>
          Valorizamos a satisfação do cliente, o respeito às pessoas, a ética em
          todas as nossas ações, a transparência em nossos processos, o
          comprometimento com a qualidade e a busca constante pela excelência.
        </p>
      </AnimatedSection>
      <AnimatedDivider />
      <AnimatedSection className="mx-auto mb-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <h1 className="mb-[2rem] text-center">Diferenciais</h1>
        <p>
          Com atuação em todo o Brasil, oferecemos um atendimento personalizado
          e eficiente. Nossos profissionais são constantemente capacitados para
          garantir que você receba as melhores opções de seguros, sem
          complicação e com total conveniência. Além disso, trabalhamos com as
          principais seguradoras do mercado, proporcionando uma ampla gama de
          coberturas e serviços para proteger o que é mais importante para você.
        </p>
        <p>
          Na Multiplusgroup, estamos aqui para proteger seu patrimônio e sua paz
          de espírito, oferecendo soluções sob medida para cada fase da sua vida
          e do seu negócio.
        </p>
      </AnimatedSection>
    </>
  );
};

export default ContentQuemSomos;
