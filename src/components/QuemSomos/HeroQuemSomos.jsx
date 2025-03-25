import HeroImg from "@assets/img/quem-somos/img_01.jpg";
import Heading from "@ui/Heading";
import Hero from "@ui/Hero";

const HeroQuemSomos = () => {
  return (
    <Hero type="center" color="overlay-black" img={HeroImg} height={500}>
      <Heading
        as="h1"
        className="text-multi-green-light font-title drop-shadow-sm"
      >
        Quem Somos
      </Heading>
    </Hero>
  );
};

export default HeroQuemSomos;
