import * as Detalhes from "@/components/pages/Detalhes/index";
import { NoCrash } from "@mui/icons-material";

const segurosCard = [
  {
    icone: <NoCrash />,
    titulo: "Seguro Automóvel",
    // imagem: "https://picsum.photos/id/146/300",
    descricao: "Conheça nosso seguro automóvel",
    detalhe: <Detalhes.SeguroAuto />,
    cotacaoURL: "https://multiplus.aggilizador.com.br/auto",
  },
  {
    // icone: "Home",
    titulo: "Seguro Residencial",
    // imagem: "https://picsum.photos/id/146/300",
    descricao: "Mantenha a sua casa segura",
    detalhe: <Detalhes.SeguroResidencial />,
    cotacaoURL: "https://multiplus.aggilizador.com.br/residence",
  },
  {
    // icone: "Business",
    titulo: "Seguro Empresarial",
    // imagem: "https://picsum.photos/id/146/300",
    descricao: "O seguro perfeito para sua empresa",
    detalhe: <Detalhes.SeguroEmpresarial />,
    cotacaoURL: "https://multiplus.aggilizador.com.br/business",
  },
  {
    // icone: "Business",
    titulo: "Seguro Vida Global",
    // imagem: "https://picsum.photos/id/146/300",
    descricao: "O seguro perfeito para sua empresa",
    detalhe: <Detalhes.SeguroVidaGlobal />,
    cotacaoURL: "https://multiplus.aggilizador.com.br/lifeglobal",
  },
];

const segurosExpander = [
  {
    // icone: "NoCrash",
    titulo: "Seguro Automóvel",
    // imagem: "https://picsum.photos/id/146/300",
    descricao: "Conheça nosso seguro automóvel",
    detalhe: <Detalhes.SeguroAuto />,
    cotacaoURL: "https://multiplus.aggilizador.com.br/auto",
  },
  {
    // icone: "Lock",
    titulo: "Seguro Bike",
    // imagem: "https://picsum.photos/id/146/300",
    descricao: "Para você que gosta de pedalar com segurança",
    detalhe: <Detalhes.SeguroByke />,
    cotacaoURL: "https://multiplus.aggilizador.com.br/auto",
  },
  {
    // icone: "Lock",
    titulo: "Seguro Cyber",
    // imagem: "https://picsum.photos/id/146/300",
    descricao: "A proteção de dados que você precisa",
    detalhe: <Detalhes.SeguroCyber />,
    cotacaoURL: "https://multiplus.aggilizador.com.br/auto",
  },
  {
    // icone: "Business",
    titulo: "Seguro Empresarial",
    // imagem: "https://picsum.photos/id/146/300",
    descricao: "O seguro perfeito para sua empresa",
    detalhe: <Detalhes.SeguroEmpresarial />,
    cotacaoURL: "https://multiplus.aggilizador.com.br/business",
  },
  {
    // icone: "Lock",
    titulo: "Seguro Riscos de Engenharia",
    // imagem: "https://picsum.photos/id/146/300",
    descricao: "A cobertura necessária para todo projeto de engenharia",
    detalhe: <Detalhes.SeguroEngenharia />,
    cotacaoURL: "https://multiplus.aggilizador.com.br/auto",
  },
  {
    // icone: "Lock",
    titulo: "Seguro Fiança Locatícia",
    // imagem: "https://picsum.photos/id/146/300",
    descricao:
      "Vai alugar seu imóvel? Essa é a melhor escolha de seguro para essa finalidade",
    detalhe: <Detalhes.SeguroFiancaLocaticia />,
    cotacaoURL: "https://multiplus.aggilizador.com.br/auto",
  },
  {
    // icone: "Home",
    titulo: "Seguro Residencial",
    // imagem: "https://picsum.photos/id/146/300",
    descricao: "Mantenha a sua casa segura",
    detalhe: <Detalhes.SeguroResidencial />,
    cotacaoURL: "https://multiplus.aggilizador.com.br/residence",
  },
  {
    // icone: "Business",
    titulo: "Seguro Responsabilidade Civil",
    // imagem: "https://picsum.photos/id/146/300",
    descricao: "O seguro perfeito para sua empresa",
    detalhe: <Detalhes.SeguroRespCivil />,
    cotacaoURL: "https://multiplus.aggilizador.com.br/auto",
  },
  {
    // icone: "Lock",
    titulo: "Seguro Responsabilidade Civil para Advogados",
    // imagem: "https://picsum.photos/id/146/300",
    descricao: "A proteção de dados que você precisa",
    detalhe: <Detalhes.SeguroRespCivilAdvogado />,
    cotacaoURL: "https://multiplus.aggilizador.com.br/auto",
  },
  {
    // icone: "Lock",
    titulo: "Seguro Responsabilidade Civil para Contadores",
    // imagem: "https://picsum.photos/id/146/300",
    descricao: "A proteção de dados que você precisa",
    detalhe: <Detalhes.SeguroRespCivilContador />,
    cotacaoURL: "https://multiplus.aggilizador.com.br/auto",
  },
  {
    // icone: "Lock",
    titulo: "Seguro Responsabilidade Civil para Dentistas",
    // imagem: "https://picsum.photos/id/146/300",
    descricao: "A proteção de dados que você precisa",
    detalhe: <Detalhes.SeguroRespCivilDentista />,
    cotacaoURL: "https://multiplus.aggilizador.com.br/auto",
  },
  {
    // icone: "Lock",
    titulo: "Seguro Responsabilidade Civil para Médicos",
    // imagem: "https://picsum.photos/id/146/300",
    descricao: "A proteção de dados que você precisa",
    detalhe: <Detalhes.SeguroRespCivilMedico />,
    cotacaoURL: "https://multiplus.aggilizador.com.br/auto",
  },
  {
    // icone: "Lock",
    titulo: "Seguro Viagem",
    // imagem: "https://picsum.photos/id/146/300",
    descricao: "Garanta tranquilidade durate suas viagens",
    detalhe: <Detalhes.SeguroViagem />,
    cotacaoURL: "https://multiplus.aggilizador.com.br/auto",
  },
  {
    // icone: "Business",
    titulo: "Seguro Vida Global",
    // imagem: "https://picsum.photos/id/146/300",
    descricao: "Proteja quem você ama",
    detalhe: <Detalhes.SeguroVidaGlobal />,
    cotacaoURL: "https://multiplus.aggilizador.com.br/lifeglobal",
  },
];

const promo = {
  auto: {
    cotacaoURL: "https://multiplus.aggilizador.com.br/auto",
  },
};

export { segurosCard, segurosExpander, promo };
