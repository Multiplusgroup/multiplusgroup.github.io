import AnimatedDivider from "@/components/AnimatedDivider";
import SegurosListaCartao from "@/components/pages/Seguros/SegurosListaCartao";
import { segurosCard } from "@/constants/seguros";
import AnimatedSection from "@/ui/AnimatedSection";

const ContentSeguros = () => {
  return (
    <>
      <AnimatedSection className="mx-auto mt-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
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
      <AnimatedSection className="mx-auto flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <h1 className="mb-[2rem] text-center">
          Título seção com cartões de produtos/seguros
        </h1>
        <p>
          Prévia de conteúdo da seção. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ipsum, tempora aliquid. Nisi itaque animi,
          asperiores eum nam, hic aut dolores optio, deserunt architecto
          assumenda iste perspiciatis distinctio unde velit ex corporis laborum.
        </p>
        <p>
          Abaixo, a prévia de multiplos cartões. Cada "linha" com cartão pode
          armazenar até 4 cartões. A lista de cartões se ajusta automaticamente
          dependendo da quantidade adicionada. Apenas o primeiro cartão mostra
          detalhes, a título de demonstração.
        </p>
      </AnimatedSection>
      <SegurosListaCartao lista={segurosCard} />
      <AnimatedDivider />
      <AnimatedSection className="mx-auto mb-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <h1 className="mb-[2rem] text-center">Título seção 3 (opcional)</h1>
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
    </>
  );
};

export default ContentSeguros;
