import Carousel from "@components/Carousel/Carousel";
import { Button } from "@mui/material";
import { Link } from "@tanstack/react-router";
import Heading from "@ui/Heading";
import Hero from "@ui/Hero";

const HeroIndex = ({ height = 350 }) => {
  return (
    <Carousel renderDotsOutside>
      <Hero
        type="center"
        color="overlay-green"
        height={height}
        img="https://placehold.co/100x50?text=Imagem+Hero"
      >
        <Heading as="h2" className="!font-page-condensed text-multi-brown">
          Título imagem 1
        </Heading>
        <p>
          Texto imagem 1 com <Link to="/">link para outra página</Link>
        </p>
        <Button size="large" className="btn btn-cta justify-self-center">
          Botão CTA imagem 1
        </Button>
      </Hero>
      <Hero
        type="left"
        color="overlay-brown"
        height={height}
        img="https://placehold.co/100x50?text=Imagem+Hero"
      >
        <Heading
          as="h2"
          className="!font-page-condensed text-multi-white drop-shadow-(var(--shadow-multi))"
        >
          Título imagem 2
        </Heading>
        <p>
          Texto imagem 2 com <Link to="/">link para outra página</Link>
        </p>
        <Button size="large" className="btn btn-cta justify-self-center">
          Botão CTA imagem 2
        </Button>
      </Hero>
      <Hero
        type="right"
        color="overlay-black"
        height={height}
        img="https://placehold.co/100x50?text=Imagem+Hero"
      >
        <Heading
          as="h2"
          className="!font-page-condensed text-multi-green-light"
        >
          Título imagem 3
        </Heading>
        <p className="text-multi-green-light">
          Texto imagem 3 com <Link to="/">link para outra página</Link>
        </p>
        <Button size="large" className="btn btn-cta justify-self-center">
          Botão CTA imagem 3
        </Button>
      </Hero>
    </Carousel>
  );
};

export default HeroIndex;
