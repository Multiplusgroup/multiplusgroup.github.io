import { useState } from "react";
import {
  Grid,
  Divider,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Button,
} from "@mui/material";
import * as MuiIcons from "@mui/icons-material";

import { segurosLista } from "../../../siteConstants/seguros";

import Card from "../../../ui/Card";
import AnimatedSection from "../../../ui/AnimatedSection";
import SeguroDetalhe from "../../../ui/SeguroDetalhe";

const getIcon = (ref, size) => {
  const Icon = MuiIcons[ref];
  return <Icon sx={{ scale: String(size) }} />;
};

const ContentSeguros = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);
  const [icon, setIcon] = useState(null);
  const [title, setTitle] = useState("");
  const [redirectTo, setRedirectTo] = useState("");
  const handleToggle = (produto) => {
    isOpen ? setContent(null) : setContent(produto.detalhe);
    isOpen ? setTitle("") : setTitle(produto.titulo);
    isOpen ? setIcon(null) : setIcon(produto.icone);
    isOpen ? setRedirectTo("") : setRedirectTo(produto.cotacaoURL);
    setIsOpen((curr) => !curr);
  };
  return (
    <>
      <Grid container className="flex- my-[4rem] flex-col items-center">
        <Grid container className="mx-auto w-[85%]">
          <AnimatedSection>
            <Grid item className="flex w-full flex-col gap-5">
              <h1 className="text-center">Título seção 1</h1>
              <p>
                Prévia de conteúdo da seção. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ipsum, tempora aliquid. Nisi
                itaque animi, asperiores eum nam, hic aut dolores optio,
                deserunt architecto assumenda iste perspiciatis distinctio unde
                velit ex corporis laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                doloribus consequuntur distinctio. Dolores, perferendis
                assumenda maiores vel accusantium deleniti. Facere quaerat
                officiis inventore. Veniam, dolores.
              </p>
            </Grid>
            <Grid item className="w-full space-y-3 py-4">
              <Divider
                className="divider justify-self-around"
                variant="middle"
              />
            </Grid>
          </AnimatedSection>
          <AnimatedSection>
            <Grid item className="flex w-full flex-col gap-5">
              <h1 id="seguros" className="text-center">
                Título seção com cartões de produtos/seguros
              </h1>
              <p>
                Prévia de conteúdo da seção. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ipsum, tempora aliquid. Nisi
                itaque animi, asperiores eum nam, hic aut dolores optio,
                deserunt architecto assumenda iste perspiciatis distinctio unde
                velit ex corporis laborum.
              </p>
              <p>
                Abaixo, a prévia de multiplos cartões. Cada "linha" com cartão
                pode armazenar até 5 cartões. A lista de cartões se ajusta
                automaticamente dependendo da quantidade adicionada. Apenas o
                primeiro cartão mostra detalhes, a título de demonstração.
              </p>
            </Grid>
          </AnimatedSection>
          <Grid
            item
            className="item-center mx-auto flex w-[85%] flex-row flex-wrap justify-center gap-5 py-4"
          >
            {segurosLista.map((seguro, i) => {
              const { icone, titulo, imagem, descricao } = seguro;
              return (
                <AnimatedSection key={i}>
                  <Card
                    className="cardProduto min-w-[300px] content-center items-center"
                    width={300}
                    header={
                      <CardHeader
                        className="flex w-full justify-center py-10"
                        title={
                          <span className="flex justify-center gap-5 text-center">
                            {icone && getIcon(icone, 2)}
                            {titulo && titulo}
                          </span>
                        }
                        titleTypographyProps={{
                          className: "text-center",
                        }}
                      />
                    }
                    content={
                      <CardContent className="text-center">
                        {descricao && (
                          <span className="text-sm">{descricao}</span>
                        )}
                      </CardContent>
                    }
                    media={
                      imagem && (
                        <CardMedia
                          image={`${imagem === "placeholder" ? "https://placehold.co/100x100?text=Imagem+Cartão+\n(Opcional)" : imagem}`}
                          component="img"
                          height="200"
                        />
                      )
                    }
                    actions={
                      <CardActions
                        disableSpacing
                        className="flex justify-center pb-6"
                      >
                        <Button
                          className="button buttonCTA"
                          onClick={() => handleToggle(seguro)}
                        >
                          Ver detalhes
                        </Button>
                      </CardActions>
                    }
                  />
                </AnimatedSection>
              );
            })}
            <Grid item className="w-full space-y-3 py-4">
              <Divider
                className="divider justify-self-around"
                variant="middle"
              />
            </Grid>
          </Grid>
          <AnimatedSection>
            <Grid item className="flex w-full flex-col gap-5">
              <h1 className="text-center">Título seção 3 (opcional)</h1>
              <p>
                Prévia de conteúdo da seção. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ipsum, tempora aliquid. Nisi
                itaque animi, asperiores eum nam, hic aut dolores optio,
                deserunt architecto assumenda iste perspiciatis distinctio unde
                velit ex corporis laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                doloribus consequuntur distinctio. Dolores, perferendis
                assumenda maiores vel accusantium deleniti. Facere quaerat
                officiis inventore. Veniam, dolores.
              </p>
            </Grid>
          </AnimatedSection>
        </Grid>
      </Grid>
      <SeguroDetalhe
        handleToggle={handleToggle}
        open={isOpen}
        content={content}
        title={title}
        icon={icon}
        redirectTo={redirectTo}
      />
    </>
  );
};

export default ContentSeguros;
