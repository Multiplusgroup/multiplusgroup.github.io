import { Grid, CardMedia } from "@mui/material";

import AnimatedSection from "../../../ui/AnimatedSection";

const EmConstrucao = () => {
  return (
    <Grid
      container
      className="my-[4rem] grid h-full items-center justify-center"
    >
      <AnimatedSection animation="fade">
        <Grid container className="mx-auto w-[85%]">
          <Grid item className="flex w-full flex-col gap-5">
            <h1 className="text-center text-5xl">
              Nossa equipe está realizando manutenções
            </h1>

            <CardMedia
              image="/EmConstrucao.png"
              component="img"
              sx={{ minWidth: "0%", maxWidth: "1000px" }}
              className="mx-auto"
            />
          </Grid>
        </Grid>
      </AnimatedSection>
    </Grid>
  );
};

export default EmConstrucao;
