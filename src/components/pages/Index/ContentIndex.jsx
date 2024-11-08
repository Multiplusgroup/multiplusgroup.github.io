import Card from "@/components/Card";
import AnimatedSection from "@/ui/AnimatedSection";
import { ShieldTwoTone } from "@mui/icons-material";
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid2 as Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ContentIndex = () => {
  const navigate = useNavigate();
  return (
    <Grid container className="my-[4rem] flex flex-col items-center">
      <Grid container className="mx-auto w-[85%]">
        <AnimatedSection>
          <Grid className="flex w-full flex-col gap-5">
            <h1 className="text-center">Título seção 1 página </h1>
            <p>
              Prévia de conteúdo seção. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ad, porro doloribus accusamus quis maxime
              veritatis voluptatem eaque nihil aspernatur ducimus temporibus
              aperiam fugit, corrupti alias quibusdam incidunt corporis
              accusantium quaerat doloremque, sequi dolore officiis
              reprehenderit. Aliquam fuga fugiat, aspernatur dolorem labore,
              odio molestiae vel nesciunt, nemo corrupti in minus quod!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              qui nesciunt cum suscipit repudiandae enim? Molestias, rem atque
              quis maxime ut laudantium mollitia harum reprehenderit.
            </p>
          </Grid>
          <Grid className="w-full space-y-3 py-4">
            <Divider className="divider justify-self-around" variant="middle" />
          </Grid>
        </AnimatedSection>
        <AnimatedSection>
          <Grid className="flex w-full flex-col gap-5 lg:col-span-2">
            <h1 className="text-center">Título seção 2 página</h1>
            <p>
              Prévia de conteúdo seção, com cartões promocionais customizáveis.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium odit ratione debitis, rem reiciendis provident ab illo
              ducimus. Adipisci, ipsa.
            </p>
            <Grid className="flex flex-col items-center justify-center gap-5 lg:flex-row">
              <AnimatedSection animation="translateX(-200px)">
                <Card
                  className="cardProduto"
                  width={500}
                  header={
                    <CardHeader
                      className="flex w-full justify-center py-10"
                      title={
                        <span className="flex justify-center gap-10 text-center">
                          Título cartão 1<br /> sem icone (opcional)
                        </span>
                      }
                      titleTypographyProps={{
                        className: "text-center",
                      }}
                    />
                  }
                  content={
                    <CardContent className="text-center">
                      Prévia de texto cartão 1 opcional, Lorem ipsum dolor sit
                      amet consectetur, adipisicing elit. Ex, libero?
                    </CardContent>
                  }
                  media={
                    <CardMedia
                      image="https://placehold.co/100x100?text=Imagem+Cartão+\n(Opcional)"
                      component="img"
                      height="200"
                    />
                  }
                  actions={
                    <CardActions
                      disableSpacing
                      className="flex justify-center pb-6"
                    >
                      <Button className="button buttonCTA">
                        Botão CTA cartão 1 (opcional)
                      </Button>
                    </CardActions>
                  }
                />
              </AnimatedSection>
              <AnimatedSection animation="translateX(200px)">
                <Card
                  className="cardProduto"
                  width={500}
                  header={
                    <CardHeader
                      className="flex w-full justify-center py-10"
                      title={
                        <span className="flex items-center justify-center gap-10 text-center">
                          <ShieldTwoTone sx={{ scale: "3" }} /> Título cartão 2
                          <br />
                          com icone (opcional)
                        </span>
                      }
                      titleTypographyProps={{
                        className: "text-center",
                      }}
                    />
                  }
                  content={
                    <CardContent className="text-center">
                      Prévia de texto cartão 2 opcional, Lorem ipsum dolor sit
                      amet consectetur, adipisicing elit. Ex, libero?
                    </CardContent>
                  }
                  media={
                    <CardMedia
                      image="https://placehold.co/100x100?text=Imagem+Cartão+\n(Opcional)"
                      component="img"
                      height="200"
                    />
                  }
                  actions={
                    <CardActions
                      disableSpacing
                      className="flex justify-center pb-6"
                    >
                      <Button className="button buttonCTA">
                        Botão CTA cartão 2 (opcional)
                      </Button>
                    </CardActions>
                  }
                />
              </AnimatedSection>
            </Grid>
            <AnimatedSection className="grid w-full gap-3 lg:col-span-2">
              <p className="grow text-center text-sm font-extrabold">
                Texto adicional (opcional). Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Dicta earum nulla hic tempore
                corrupti in.
              </p>
              <Button
                className="button buttonCTA w-[50%] justify-self-center !py-5"
                size="large"
                onClick={() => navigate("/seguros")}
              >
                Botão CTA seção (opcional)
              </Button>
            </AnimatedSection>
            <AnimatedSection className="flex w-full flex-col gap-5 lg:col-span-2">
              <p className="text-center text-sm">
                Texto adicional (opcional). Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolor repudiandae id eaque qui
                beatae delectus consectetur laudantium sint corrupti quae!
              </p>
            </AnimatedSection>
          </Grid>
        </AnimatedSection>
      </Grid>
    </Grid>
  );
};

export default ContentIndex;
