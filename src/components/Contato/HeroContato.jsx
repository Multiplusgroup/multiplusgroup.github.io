import Heading from "@ui/Heading";
import Hero from "@ui/Hero";
import HeroImg from "@assets/img/contato/img_01.jpg";
import { Button } from "@mui/material";
import { Link } from "@tanstack/react-router";

const HeroContato = () => {
  return (
    <Hero type="center" color="overlay-black" img={HeroImg} height={500}>
      <Heading
        as="h1"
        className="text-multi-green-light font-title drop-shadow-sm"
      >
        Contato
      </Heading>
      <Button
        LinkComponent={Link}
        to="/contato"
        hash="form-contato"
        className="btn btn-cta"
      >
        Envie sua mensagem para Multiplusgroup
      </Button>
    </Hero>
  );
};

export default HeroContato;
