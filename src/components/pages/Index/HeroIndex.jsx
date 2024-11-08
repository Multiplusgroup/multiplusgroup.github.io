import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const HeroIndex = () => {
  return (
    <Carousel
      animation="fade"
      duration={700}
      className="border-r-multiGreen-xLight"
    >
      <Hero
        type="heroCenter"
        color="heroOverlay"
        height={300}
        img="https://placehold.co/200x100?text=Imagem+Hero"
      >
        <h1>Título imagem 1</h1>
        <p>
          Texto imagem 1 com{" "}
          <Link className="heroLink" to="/">
            link para outra página
          </Link>
        </p>
        <Button className="button buttonCTA" size="large">
          Botão CTA imagem 1
        </Button>
      </Hero>
      <Hero
        type="heroRight"
        color="heroOverlay"
        height={300}
        img="https://placehold.co/200x100?text=Imagem+Hero"
      >
        <h1>Título image 2</h1>
        <p>Texto imagem 2 sem link para navegação</p>
        <Button className="button buttonCTA" size="large">
          Botão CTA imagem 2
        </Button>
      </Hero>
      <Hero
        type="heroLeft"
        color="heroOverlay"
        height={300}
        img="https://placehold.co/200x100?text=Imagem+Hero"
      >
        <h1>Título imagem 3</h1>
        <p>Texto imagem 3, sem link de navegação e sem botão CTA</p>
      </Hero>
    </Carousel>
  );
};

export default HeroIndex;
