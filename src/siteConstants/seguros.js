import { DetalheExemplo } from "../pages/fragments/Detalhes";

const segurosLista = [
  {
    icone: "HealthAndSafety",
    titulo: "Exemplo Seguro",
    imagem: "https://picsum.photos/id/146/300",
    descricao: "Exemplo funcional de um seguro com detalhes",
    detalhe: DetalheExemplo,
    cotacaoURL: "https://multiplus.aggilizador.com.br/auto",
  },
  {
    titulo: "Seguro 1",
  },
  {
    icone: "HealthAndSafety",
    titulo: "Seguro 2",
    descricao: "Texto descritivo curto",
  },
  {
    titulo: "Seguro 3",
    imagem: "placeholder",
    descricao: "Texto descritivo curto",
  },
];

const promo = {
  exemplo: {
    cotacaoURL: "https://multiplus.aggilizador.com.br/auto",
  },
};

export { segurosLista, promo };
