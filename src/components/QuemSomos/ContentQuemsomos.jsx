import QuemSomosImg from "@assets/img/quem-somos/img_02.jpg";
import { Divider, Grid2 as Grid } from "@mui/material";
import AnimatedSection from "@ui/AnimatedSection";
import Heading from "@ui/Heading";

const ContentQuemsomos = () => {
  return (
    <>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          A <span className="font-title font-extrabold">Multiplusgroup</span>{" "}
          Corretora de Seguros é uma empresa com mais de uma década de
          experiência no mercado, liderada por sócios com mais de 30 anos de
          expertise no ramo de seguros. Nosso compromisso é oferecer consultoria
          especializada e soluções de seguros que atendam às necessidades únicas
          de cada cliente, sejam eles indivíduos ou empresas.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <Heading as="h3" className="text-multi-brown marker">
          Visão
        </Heading>
        <p>
          Estamos focados em ser reconhecidos como uma das principais empresas
          do setor, destacando-nos pela excelência na corretagem de seguros e
          pelo compromisso inabalável com a satisfação do cliente.
        </p>
      </AnimatedSection>
      <AnimatedSection className="flex!w-[90%] mx-auto mt-[4rem] flex-col justify-center gap-5 md:!w-[80%]">
        <Divider className="bg-multi-brown/50 w-full" />
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <Heading as="h3" className="text-multi-brown marker">
          Missão
        </Heading>
        <p>
          Nossa missão é proporcionar segurança e tranquilidade, apresentando
          soluções eficazes e transparentes, sempre alinhadas com os mais altos
          padrões éticos e de excelência.
        </p>
      </AnimatedSection>
      <AnimatedSection className="flex!w-[90%] mx-auto mt-[4rem] flex-col justify-center gap-5 md:!w-[80%]">
        <Divider className="bg-multi-brown/50 w-full" />
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <Heading as="h3" className="text-multi-brown marker">
          Valores
        </Heading>
        <p>
          Valorizamos a satisfação do cliente, o respeito às pessoas, a ética em
          todas as nossas ações, a transparência em nossos processos, o
          comprometimento com a qualidade e a busca constante pela excelência.
        </p>
      </AnimatedSection>
      <AnimatedSection className="flex!w-[90%] mx-auto mt-[4rem] flex-col justify-center gap-5 md:!w-[80%]">
        <Divider className="bg-multi-brown/50 w-full" />
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%] lg:grid lg:grid-cols-2 lg:items-center">
        <Heading as="h3" className="text-multi-brown marker col-span-2">
          Diferenciais
        </Heading>
        <Grid className="flex h-[300px] w-full drop-shadow-lg">
          <img
            src={QuemSomosImg}
            className="h-[100%] w-[100%] rounded-t-lg object-cover object-top lg:rounded-lg"
          />
        </Grid>
        <Grid className="flex flex-col gap-8">
          <p>
            Com atuação em todo o Brasil, oferecemos um atendimento
            personalizado e eficiente. Nossos profissionais são constantemente
            capacitados para garantir que você receba as melhores opções de
            seguros, sem complicação e com total conveniência. Além disso,
            trabalhamos com as principais seguradoras do mercado, proporcionando
            uma ampla gama de coberturas e serviços para proteger o que é mais
            importante para você.
          </p>
          <p>
            Na <span className="font-title font-extrabold">Multiplusgroup</span>
            , estamos aqui para proteger seu patrimônio e sua paz de espírito,
            oferecendo soluções sob medida para cada fase da sua vida e do seu
            negócio.
          </p>
        </Grid>
      </AnimatedSection>
    </>
  );
};

export default ContentQuemsomos;
