// TODO: deletar esse arquivo para produção
import { Grid, Divider, CardHeader, CardMedia } from "@mui/material";

import Hero from "../../../ui/Hero";
import Card from "../../../ui/Card";

const DetalheExemplo = () => {
  return (
    <Grid container className="flex flex-col gap-5">
      <Hero type="heroCenter" color="heroOverlay">
        <Grid container className="grid grid-cols-1 items-center">
          <Grid
            container
            className="flex flex-col items-center justify-center gap-5"
          >
            <h1 className="text-5xl">É possível colocar "Hero" aqui</h1>
            <p>Com todas a opções de customização apresentadas</p>
          </Grid>
        </Grid>
      </Hero>
      <p>
        Algum texto descritivo sobre o seguro. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Fugit debitis rem laudantium, praesentium
        architecto obcaecati quo impedit iure repudiandae dicta quas! Commodi
        dicta nesciunt odio? Aperiam ullam impedit cum iste sit sunt, incidunt,
        quisquam voluptate dolorem corporis rem eius officiis. Maiores quae
        expedita quo exercitationem.
      </p>
      <Grid item>
        <Card
          className="cardProduto min-w-[300px] content-center items-center"
          height={300}
          width={400}
          header={
            <CardHeader
              className="flex w-full justify-center py-10"
              title={
                <span className="flex justify-center gap-5 text-center">
                  As melhores ofertas do mercado
                </span>
              }
              titleTypographyProps={{
                className: "text-center",
              }}
            />
          }
        />
      </Grid>
      <p>
        Mais descrições? É a tua escolha. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Tempora autem non quas, deserunt distinctio temporibus
        quia natus facere numquam voluptatibus enim nam labore sequi veniam
        corporis fugiat facilis atque, doloribus dolor, est consequuntur
        adipisci inventore dolore! Fuga dolores incidunt accusamus, cumque, quo
        facere sit mollitia, eos ex nostrum nisi. In!
      </p>
      <ul className="px-6">
        <li>Podemos colocar listas, se preciso</li>
        <li>Como essa, por exemplo</li>
        <ul className="px-6">
          <li>Que contem sub-listas</li>
        </ul>
      </ul>
      <ol className="px-6">
        <li>Ou como esta, que é numerada</li>
        <ol className="px-6">
          <li>Também contendo sublistas</li>
          <ol className="px-6">
            <li>Também contendo sublistas</li>
          </ol>
        </ol>
      </ol>
      <p>Ou imagens, dentro ou fora de um slide.</p>
      <Card
        className="cardProduto "
        media={
          <CardMedia
            component="img"
            src="/Site_Quadrada.png"
            height={300}
            width={300}
          />
        }
      />

      <Divider className="divider" variant="middle" />
    </Grid>
  );
};

export { DetalheExemplo };
