import Card from "@/components/Card";
import SeguroDetalhe from "@/components/pages/Seguros/SeguroDetalhe";
import AnimatedSection from "@/ui/AnimatedSection";
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
} from "@mui/material";
import { useState } from "react";

const SegurosCartao = ({ lista }) => {
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
    <AnimatedSection className="mx-auto mt-5 grid !w-[90%] grid-cols-1 items-center justify-center gap-5 py-4 md:!w-[80%] md:grid-cols-2 xl:grid-cols-4">
      {lista.map((seguro, i) => {
        const { icone, titulo, imagem, descricao } = seguro;
        return (
          <AnimatedSection key={i}>
            <Card
              className="cardProduto content-center items-center"
              width={300}
              header={
                <CardHeader
                  className="flex w-full justify-center py-10"
                  title={
                    <span className="flex justify-center gap-5 text-center">
                      {icone}
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
                  {descricao && <span className="text-sm">{descricao}</span>}
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
      <Divider
        className="divider mx-auto w-[75%] md:col-span-2 xl:col-span-4"
        variant="middle"
      />
      <SeguroDetalhe
        handleToggle={handleToggle}
        open={isOpen}
        content={content}
        title={title}
        icon={icon}
        redirectTo={redirectTo}
      />
    </AnimatedSection>
  );
};

export default SegurosCartao;
