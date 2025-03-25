import Carousel from "@components/Carousel/Carousel";
import CardSeguro from "@components/Seguros/CardSeguro";
import HeroSeguros from "@components/Seguros/HeroSeguros";
import { responsiveSeguros } from "@constants/responsiveCarousel";
import {
  SEGUROS_EMPRESA,
  SEGUROS_OUTROS,
  SEGUROS_VOCE,
} from "@constants/segurosList";
import { Divider } from "@mui/material";
import AnimatedSection from "@ui/AnimatedSection";
import Heading from "@ui/Heading";

const Seguros = () => {
  return (
    <>
      <HeroSeguros />
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          A <span className="font-title font-extrabold">Multiplusgroup</span>{" "}
          Corretora de Seguros, empresa líder no mercado de corretagem de
          seguros, em parceria com as maiores seguradoras do Brasil, oferece as
          melhores opções de seguros para você e sua empresa.
        </p>
        <p>
          Com uma gama de consultores altamente qualificados, estamos sempre
          prontos para lhe atender de modo a proporcionar com nossos seguros a
          tranquilidade que você procura, com as diversas opções e planos de
          seguro.
        </p>
        <p>
          O que está esérando? Dê uma olhada na nossa gama de seguros e escolha
          a melhor opção de seguro que seja adequada para você, sua família ou
          seu negócio. Estamos sempre prontos para ajudar!
        </p>
      </AnimatedSection>
      <AnimatedSection
        className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]"
        id="para-empresa"
      >
        <Heading as="h3" className="text-multi-brown marker">
          Para sua Empresa
        </Heading>
        <p>
          A <span className="font-title font-extrabold">Multiplusgroup</span>{" "}
          conta com os melhores seguros para pessoas físicas, contando sempre
          com o apoio das melhores seguradoras do mercado!
        </p>
        <p>
          Com os planos de seguro abaixo, garantimos que sua empresa estará
          sempre protegida em todos os possíveis ambitente, incluindo o ambiente
          virtual.
        </p>
      </AnimatedSection>
      <AnimatedSection className="bg-multi-gray mx-auto mt-[2rem] flex w-full flex-col justify-center gap-5 drop-shadow-lg">
        <Carousel
          className="py-[1rem]"
          autoPlay={false}
          responsive={responsiveSeguros}
          showDots={false}
        >
          {SEGUROS_EMPRESA.map((seguro) => {
            const {
              title,
              content,
              link,
              icon,
              mediaProps,
              buttonText,
              cotacaoURL,
            } = seguro;
            return (
              <CardSeguro
                key={title}
                title={title}
                content={content}
                link={link}
                icon={icon}
                mediaProps={mediaProps}
                buttonText={buttonText}
                cotacaoURL={cotacaoURL}
              />
            );
          })}
        </Carousel>
      </AnimatedSection>
      <AnimatedSection className="flex!w-[90%] mx-auto mt-[4rem] flex-col justify-center gap-5 md:!w-[80%]">
        <Divider className="bg-multi-brown/50 w-full" />
      </AnimatedSection>
      <AnimatedSection
        className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]"
        id="para-voce"
      >
        <Heading as="h3" className="text-multi-brown marker">
          Para você
        </Heading>
        <p>
          A <span className="font-title font-extrabold">Multiplusgroup</span>{" "}
          conta com os melhores seguros para pessoas físicas, contando sempre
          com o apoio das melhores seguradoras do mercado.
        </p>
        <p>
          Conheça nossa linha de seguros pessoais, garantindo proteção para
          você, sua família e seus bens - além é claro de poder desfrutar de
          toda a tranquilidade em suas viagens e vida profissional!
        </p>
      </AnimatedSection>
      <AnimatedSection className="bg-multi-gray mx-auto mt-[2rem] flex w-full flex-col justify-center gap-5 drop-shadow-lg">
        <Carousel
          className="py-[1rem]"
          autoPlay={false}
          responsive={responsiveSeguros}
          showDots={false}
        >
          {SEGUROS_VOCE.map((seguro) => {
            const {
              title,
              content,
              link,
              icon,
              mediaProps,
              buttonText,
              cotacaoURL,
            } = seguro;
            return (
              <CardSeguro
                key={title}
                title={title}
                content={content}
                link={link}
                icon={icon}
                mediaProps={mediaProps}
                buttonText={buttonText}
                cotacaoURL={cotacaoURL}
              />
            );
          })}
        </Carousel>
      </AnimatedSection>
      <AnimatedSection className="flex!w-[90%] mx-auto mt-[4rem] flex-col justify-center gap-5 md:!w-[80%]">
        <Divider className="bg-multi-brown/50 w-full" />
      </AnimatedSection>
      <AnimatedSection
        className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]"
        id="outros"
      >
        <Heading as="h3" className="text-multi-brown marker">
          Outros
        </Heading>
        <p>
          Não encontrou o que dejava? Não se preocupe! Além das outras
          modalidades de seguro abaixo, você pode entrar em <a>contato</a> com a
          equipe{" "}
          <span className="font-title font-extrabold">Multiplusgroup</span> para
          conhecer mais sobre todos os serviços de seguro que temos a oferecer.
        </p>
      </AnimatedSection>
      <AnimatedSection className="bg-multi-gray mx-auto mt-[2rem] flex w-full flex-col justify-center gap-5 drop-shadow-lg">
        <Carousel
          className="py-[1rem]"
          autoPlay={false}
          responsive={responsiveSeguros}
          showDots={false}
        >
          {SEGUROS_OUTROS.map((seguro) => {
            const {
              title,
              content,
              link,
              icon,
              mediaProps,
              buttonText,
              cotacaoURL,
            } = seguro;
            return (
              <CardSeguro
                key={title}
                title={title}
                content={content}
                link={link}
                icon={icon}
                mediaProps={mediaProps}
                buttonText={buttonText}
                cotacaoURL={cotacaoURL}
              />
            );
          })}
        </Carousel>
      </AnimatedSection>
    </>
  );
};

export default Seguros;
