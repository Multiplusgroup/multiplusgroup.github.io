import HeroImg from "@assets/img/seguros/img_00.jpg";
import Heading from "@ui/Heading";
import Hero from "@ui/Hero";

const HeroSeguros = () => {
  return (
    <Hero
      type="center"
      color="overlay-black"
      img={HeroImg}
      height={500}
      imgClass="lg:object-[0_40%]"
    >
      <Heading
        as="h1"
        className="text-multi-green-light font-title drop-shadow-sm"
      >
        Seguros
      </Heading>
    </Hero>
  );
};

export default HeroSeguros;
