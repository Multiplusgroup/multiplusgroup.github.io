import AnimatedDivider from "@/components/AnimatedDivider";
import SegurosListaExpansor from "@/components/pages/Seguros/SegurosListaExpansor";
import { segurosExpander } from "@/constants/seguros";
import AnimatedSection from "@/ui/AnimatedSection";

const ContentSegurosTodos = () => {
  return (
    <>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col gap-5 md:!w-[80%]">
        <h1 className="mb-[2rem] text-center">Título seção 1</h1>
        <p>
          Prévia de conteúdo da seção. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ipsum, tempora aliquid. Nisi itaque animi,
          asperiores eum nam, hic aut dolores optio, deserunt architecto
          assumenda iste perspiciatis distinctio unde velit ex corporis laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus
          consequuntur distinctio. Dolores, perferendis assumenda maiores vel
          accusantium deleniti. Facere quaerat officiis inventore. Veniam,
          dolores.
        </p>
      </AnimatedSection>
      <AnimatedDivider />
      <AnimatedSection className="mx-auto mb-[4rem] !w-[90%] md:!w-[80%]">
        <SegurosListaExpansor lista={segurosExpander} />
      </AnimatedSection>
    </>
  );
};

export default ContentSegurosTodos;
