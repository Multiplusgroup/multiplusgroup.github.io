import { Grid, Divider } from "@mui/material";
import {
  mdiFacebook,
  mdiInstagram,
  mdiMapMarker,
  mdiPhone,
  mdiWhatsapp,
} from "@mdi/js";

import Map from "../../../ui/Map";
import FaIcon from "../../../ui/IconCustom";
import FormContato from "./FormContato";
import AnimatedSection from "../../../ui/AnimatedSection";

const ContentContato = () => {
  return (
    <Grid container className="my-[4rem] flex flex-col items-center gap-[4rem]">
      <Grid item className="mx-auto w-[85%] items-center justify-center">
        <AnimatedSection>
          <h1 className="mb-[2rem] text-center">Localização e redes sociais</h1>
          <Grid
            container
            className="mx-auto flex max-w-[75%] flex-row items-center justify-center gap-[1rem] lg:justify-around"
          >
            <Grid
              item
              className="flex flex-col items-center gap-[1rem] lg:items-start"
            >
              <Grid
                item
                className="grid max-w-[400px] grid-cols-[auto_1fr] items-center justify-center gap-2 lg:justify-start"
              >
                <FaIcon svgFile={mdiMapMarker}>Endreço:</FaIcon>
                <span>
                  Q. 07, Etapa A, LOTE 17 - SOBRELOJA, Valparaíso de Goiás - GO,
                  72876-021
                </span>
              </Grid>
              <Grid
                item
                className="grid grid-cols-[auto_1fr] items-center gap-2"
              >
                <FaIcon svgFile={mdiFacebook}>Facebook:</FaIcon>
                <span>@MultiplusGroup</span>
              </Grid>
              <Grid
                item
                className="grid grid-cols-[auto_1fr] items-center gap-2"
              >
                <FaIcon svgFile={mdiInstagram}>Instagram:</FaIcon>
                <span>@MultiplusGroup</span>
              </Grid>
              <Grid
                item
                className="grid grid-cols-[auto_1fr] items-center gap-2"
              >
                <FaIcon svgFile={mdiPhone}>Telefone:</FaIcon>{" "}
                <span>(61) 3055-9173</span>
              </Grid>
              <Grid
                item
                className="grid grid-cols-[auto_1fr] items-center gap-2"
              >
                <FaIcon svgFile={mdiWhatsapp}>WhatsApp:</FaIcon>{" "}
                <span>(xx) x xxxx-xxxx</span>
              </Grid>
            </Grid>
            <Grid item className="flex items-center justify-center">
              <Map />
            </Grid>
          </Grid>
          <Grid item className="w-full space-y-3">
            <Divider
              className="divider justify-self-around pt-4"
              variant="middle"
            />
          </Grid>
        </AnimatedSection>
      </Grid>
      <Grid item className="flex w-[80%] flex-col justify-center gap-5">
        <AnimatedSection>
          <h1 id="formulario" className="mb-[2rem] text-center">
            Envie sua mensagem para a MultiplusGroup
          </h1>
          <p className="text-center">
            Você possui alguma dúvida, deseja fazer alguma sugestão ou
            reclamação? Entre em contato com nossos agentes, preenchendo o
            formulário abaixo que a MultiplusGroup responde!
          </p>
        </AnimatedSection>
        <FormContato />
      </Grid>
    </Grid>
  );
};

export default ContentContato;
