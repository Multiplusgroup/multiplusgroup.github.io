import AnimatedDivider from "@/components/AnimatedDivider";
import Card from "@/components/Card";
import AnimatedSection from "@/ui/AnimatedSection";
import { ShieldTwoTone } from "@mui/icons-material";
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid2 as Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ContentIndex = () => {
  const navigate = useNavigate();
  return (
    <>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <h1 className="mb-[2rem] text-center">Título seção 1 página </h1>
        <p>
          Prévia de conteúdo seção. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ad, porro doloribus accusamus quis maxime veritatis
          voluptatem eaque nihil aspernatur ducimus temporibus aperiam fugit,
          corrupti alias quibusdam incidunt corporis accusantium quaerat
          doloremque, sequi dolore officiis reprehenderit. Aliquam fuga fugiat,
          aspernatur dolorem labore, odio molestiae vel nesciunt, nemo corrupti
          in minus quod!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt qui
          nesciunt cum suscipit repudiandae enim? Molestias, rem atque quis
          maxime ut laudantium mollitia harum reprehenderit.
        </p>
      </AnimatedSection>
      <AnimatedDivider />
      <AnimatedSection className="mx-auto flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <h1 className="mb-[2rem] text-center">Título seção 2 página</h1>
        <p>
          Prévia de conteúdo seção, com cartões promocionais customizáveis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          odit ratione debitis, rem reiciendis provident ab illo ducimus.
          Adipisci, ipsa.
        </p>
      </AnimatedSection>
      <Grid className="mx-auto mb-[4rem] mt-5 grid !w-[90%] grid-cols-1 flex-col justify-center gap-5 md:!w-[80%] md:grid-cols-2">
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
                Prévia de texto cartão 1 opcional, Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Ex, libero?
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
              <CardActions disableSpacing className="flex justify-center pb-6">
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
                Prévia de texto cartão 2 opcional, Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Ex, libero?
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
              <CardActions disableSpacing className="flex justify-center pb-6">
                <Button className="button buttonCTA">
                  Botão CTA cartão 2 (opcional)
                </Button>
              </CardActions>
            }
          />
        </AnimatedSection>
        <AnimatedSection className="flex w-full flex-col items-center justify-center gap-3 md:col-span-2">
          <p className="grow text-center text-sm font-extrabold">
            Texto adicional (opcional). Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dicta earum nulla hic tempore corrupti in.
          </p>
          <Button
            className="button buttonCTA w-[50%] justify-self-center !py-5"
            size="large"
            onClick={() => navigate("/seguros")}
          >
            Botão CTA seção (opcional)
          </Button>
        </AnimatedSection>
        <AnimatedSection className="flex w-full flex-col items-center justify-center gap-3 md:col-span-2">
          <p className="text-center text-sm">
            Texto adicional (opcional). Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolor repudiandae id eaque qui beatae delectus
            consectetur laudantium sint corrupti quae!
          </p>
        </AnimatedSection>
      </Grid>
    </>
  );
};

export default ContentIndex;
