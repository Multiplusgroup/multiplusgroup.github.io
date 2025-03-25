import ContatoForm from "@components/Contato/ContatoForm";
import Mapa from "@components/Contato/Mapa";
import FaIcon from "@components/FaIcon";
import {
  mdiFacebook,
  mdiInstagram,
  mdiMapMarker,
  mdiPhone,
  mdiWhatsapp,
} from "@mdi/js";
import { Divider, Grid2 as Grid } from "@mui/material";
import AnimatedSection from "@ui/AnimatedSection";
import Heading from "@ui/Heading";

const ContentContato = () => {
  return (
    <>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <p>
          Com o compromisso de estarmos sempre dispostos a atender nossos
          cliente, a{" "}
          <span className="font-title font-extrabold">Multiplusgroup</span>{" "}
          Corretora de Seguros dispõe de diversos canais de contato para
          estarmos sempre conectados com as necessidades de nossos cliente.
        </p>
      </AnimatedSection>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <Heading as="h3" className="marker text-multi-brown">
          Localização e redes sociais
        </Heading>
        <Grid className="grid grid-cols-1 gap-5 lg:flex lg:gap-10">
          <AnimatedSection className="mx-auto flex w-full flex-col justify-start gap-5">
            <p>
              Conheça nossa sede e venha tomar um café conosco. Estamos
              localizados em uma região de fácil acesso, na cidade do Valparaíso
              de Goiás, na Quadra 07, próximo à Paróquia São Francisco de Assis,
              de frente à Praça Central.
            </p>
            <p>
              Venha conhecer nossa equipe, tirar suas dúvidas e conhecer nossos
              serviços. Estamos sempre prontos para atendê-lo!
            </p>
            <p>
              Caso você deseje agendar sua visita, basta entrar em contato por
              dos meios abaixo:
            </p>
            <Grid className="flex flex-col items-start gap-[1rem] px-[4rem] py-1.5">
              <Grid className="grid grid-cols-[auto_1fr] items-start gap-2 lg:justify-start">
                <FaIcon svgFile={mdiMapMarker}>Endreço:</FaIcon>
                <span>
                  Q. 07, Etapa A, LOTE 17 - SOBRELOJA, Valparaíso de Goiás - GO,
                  72876-021
                </span>
              </Grid>
              <Grid className="grid grid-cols-[auto_1fr] items-start gap-2">
                <FaIcon svgFile={mdiFacebook}>Facebook:</FaIcon>
                <span>@Multiplusgroup</span>
              </Grid>
              <Grid className="grid grid-cols-[auto_1fr] items-start gap-2">
                <FaIcon svgFile={mdiInstagram}>Instagram:</FaIcon>
                <span>@Multiplusgroup</span>
              </Grid>
              <Grid className="grid grid-cols-[auto_1fr] items-start gap-2">
                <FaIcon svgFile={mdiPhone}>Telefone:</FaIcon>{" "}
                <span>(61) 3055-9173</span>
              </Grid>
              <Grid className="grid grid-cols-[auto_1fr] items-start gap-2">
                <FaIcon svgFile={mdiWhatsapp}>WhatsApp:</FaIcon>{" "}
                <span>(xx) x xxxx-xxxx</span>
              </Grid>
            </Grid>
          </AnimatedSection>
          <AnimatedSection className="mx-auto !mb-0 flex h-full w-full flex-col items-center justify-start gap-5 drop-shadow-lg">
            <Mapa />
          </AnimatedSection>
        </Grid>
      </AnimatedSection>
      <AnimatedSection className="flex!w-[90%] mx-auto mt-[4rem] flex-col justify-center gap-5 md:!w-[80%]">
        <Divider className="bg-multi-brown/50 w-full" />
      </AnimatedSection>
      <AnimatedSection
        className="mx-auto mt-[4rem] mb-[2rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]"
        id="form-contato"
      >
        <Heading as="h3" className="marker text-multi-brown">
          Dúvidas, reclamações ou sugestões?
        </Heading>
        <p>
          Caso tenha ficado dúvidas, ou desejar registrar alguma sugestão ou
          reclamação, basta preencher o formulário abaixo que entramos em
          contato assim que possível.
        </p>
      </AnimatedSection>

      <AnimatedSection className="mx-auto flex w-full flex-col justify-center gap-5">
        <ContatoForm className="w-[90%] md:w-[80%]" />
      </AnimatedSection>
    </>
  );
};

export default ContentContato;
