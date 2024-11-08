import SegurosCartao from "@/components/pages/Seguros/SegurosCartao";
import { segurosCard } from "@/constants/seguros";
import AnimatedSection from "@/ui/AnimatedSection";
import { Divider, Grid2 as Grid } from "@mui/material";

const ContentSeguros = () => {
  return (
    <>
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <Grid className="flex w-full flex-col gap-5">
          <h1 className="text-center">Título seção 1</h1>
          <p>
            Prévia de conteúdo da seção. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsum, tempora aliquid. Nisi itaque animi,
            asperiores eum nam, hic aut dolores optio, deserunt architecto
            assumenda iste perspiciatis distinctio unde velit ex corporis
            laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            doloribus consequuntur distinctio. Dolores, perferendis assumenda
            maiores vel accusantium deleniti. Facere quaerat officiis inventore.
            Veniam, dolores.
          </p>
        </Grid>
        <Divider className="divider mx-auto w-[75%]" variant="middle" />
      </AnimatedSection>
      <AnimatedSection className="mx-auto flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <Grid className="flex w-full flex-col gap-5">
          <h1 id="seguros" className="text-center">
            Título seção com cartões de produtos/seguros
          </h1>
          <p>
            Prévia de conteúdo da seção. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsum, tempora aliquid. Nisi itaque animi,
            asperiores eum nam, hic aut dolores optio, deserunt architecto
            assumenda iste perspiciatis distinctio unde velit ex corporis
            laborum.
          </p>
          <p>
            Abaixo, a prévia de multiplos cartões. Cada "linha" com cartão pode
            armazenar até 4 cartões. A lista de cartões se ajusta
            automaticamente dependendo da quantidade adicionada. Apenas o
            primeiro cartão mostra detalhes, a título de demonstração.
          </p>
        </Grid>
      </AnimatedSection>
      <SegurosCartao lista={segurosCard} />
      <AnimatedSection className="mx-auto my-[4rem] flex !w-[90%] flex-col justify-center gap-5 md:!w-[80%]">
        <Grid className="flex w-full flex-col gap-5">
          <h1 className="text-center">Título seção 3 (opcional)</h1>
          <p>
            Prévia de conteúdo da seção. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsum, tempora aliquid. Nisi itaque animi,
            asperiores eum nam, hic aut dolores optio, deserunt architecto
            assumenda iste perspiciatis distinctio unde velit ex corporis
            laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            doloribus consequuntur distinctio. Dolores, perferendis assumenda
            maiores vel accusantium deleniti. Facere quaerat officiis inventore.
            Veniam, dolores.
          </p>
        </Grid>
      </AnimatedSection>
    </>
  );
};

export default ContentSeguros;
