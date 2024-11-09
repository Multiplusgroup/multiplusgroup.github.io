import AnimatedDivider from "@/components/AnimatedDivider";
import FaIcon from "@/components/IconCustom";
import FormContato from "@/components/pages/Contato/FormContato";
import Map from "@/components/pages/Contato/Map";
import AnimatedSection from "@/ui/AnimatedSection";
import {
  mdiFacebook,
  mdiInstagram,
  mdiMapMarker,
  mdiPhone,
  mdiWhatsapp,
} from "@mdi/js";
import { Grid2 as Grid } from "@mui/material";

const ContentContato = () => {
  return (
    <>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <h1 className="mb-[2rem] text-center">Localização e redes sociais</h1>
        <Grid className="mx-auto flex flex-col items-center justify-center gap-[1rem] lg:flex-row lg:justify-around">
          <Grid className="flex flex-col items-center gap-[1rem] lg:items-start">
            <Grid className="grid max-w-[400px] grid-cols-[auto_1fr] items-center justify-center gap-2 lg:justify-start">
              <FaIcon svgFile={mdiMapMarker}>Endreço:</FaIcon>
              <span>
                Q. 07, Etapa A, LOTE 17 - SOBRELOJA, Valparaíso de Goiás - GO,
                72876-021
              </span>
            </Grid>
            <Grid className="grid grid-cols-[auto_1fr] items-center gap-2">
              <FaIcon svgFile={mdiFacebook}>Facebook:</FaIcon>
              <span>@Multiplusgroup</span>
            </Grid>
            <Grid className="grid grid-cols-[auto_1fr] items-center gap-2">
              <FaIcon svgFile={mdiInstagram}>Instagram:</FaIcon>
              <span>@Multiplusgroup</span>
            </Grid>
            <Grid className="grid grid-cols-[auto_1fr] items-center gap-2">
              <FaIcon svgFile={mdiPhone}>Telefone:</FaIcon>{" "}
              <span>(61) 3055-9173</span>
            </Grid>
            <Grid className="grid grid-cols-[auto_1fr] items-center gap-2">
              <FaIcon svgFile={mdiWhatsapp}>WhatsApp:</FaIcon>{" "}
              <span>(xx) x xxxx-xxxx</span>
            </Grid>
          </Grid>
          <Map />
        </Grid>
      </AnimatedSection>
      <AnimatedDivider />
      <AnimatedSection className="mx-auto mb-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <h1 id="formulario" className="mb-[2rem] text-center">
          Envie sua mensagem para a Multiplusgroup
        </h1>
        <p>
          Você possui alguma dúvida, deseja fazer alguma sugestão ou reclamação?
          Entre em contato com nossos agentes, preenchendo o formulário abaixo
          que a Multiplusgroup responde!
        </p>
        <FormContato />
      </AnimatedSection>
    </>
  );
};

export default ContentContato;
