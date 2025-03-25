import ImgSeguroAuto from "@assets/img/seguros/img_01.jpg";
import ImgSeguroResidencial from "@assets/img/seguros/img_02.jpg";
import ImgSeguroEmpresa from "@assets/img/seguros/img_03.jpg";
import ImgSeguroRC from "@assets/img/seguros/img_04.jpg";
import ImgSeguroVidaCol from "@assets/img/seguros/img_05.jpg";
import ImgSeguroCyber from "@assets/img/seguros/img_06.jpg";
import ImgSeguroDentista from "@assets/img/seguros/img_07.jpg";
import ImgSeguroMedico from "@assets/img/seguros/img_08.jpg";
import ImgSeguroContador from "@assets/img/seguros/img_09.jpg";
import ImgSeguroAdvogado from "@assets/img/seguros/img_10.jpg";
import ImgSeguroBike from "@assets/img/seguros/img_11.jpg";
import ImgSeguroLocacao from "@assets/img/seguros/img_12.jpg";
import ImgSeguroViagem from "@assets/img/seguros/img_13.jpg";
import ImgSeguroRiscoEng from "@assets/img/seguros/img_14.jpg";
import ImgSeguroAPP from "@assets/img/seguros/img_15.jpg";
import ImgSeguroAPE from "@assets/img/seguros/img_16.jpg";

const SEGUROS_VOCE = [
  {
    title: "Seguro de AP para Passageiros",
    content:
      "O Seguro de Acidentes Pessoais para Passageiros da Multiplusgroup oferece a proteção completa para quem transportam vidas, com cobertura para diversos tipos de veículos",
    link: "/seguros/seguro-acidente-passageiros",
    buttonText: "Saiba mais",
    mediaProps: {
      image: ImgSeguroAPP,
      component: "img",
      height: "200",
    },
  },
  {
    title: "Seguro Auto",
    content:
      "A Multiplusgroup oferece opções de personalizadas para Seguros de Automóvel que se ajustam às sua necessidades com diferente coberturas, para seu conforto e seguranca ao dirigir",
    link: "/seguros/seguro-auto",
    buttonText: "Saiba mais",
    mediaProps: {
      image: ImgSeguroAuto,
      component: "img",
      height: "200",
    },
    cotacaoURL: "https://www.app.tosegurado.com.br/cotacao/carro",
  },
  {
    title: "Seguro Bike",
    content:
      "Garanta a segurança e conforto em suas atividades de ciclismo com o Seguro Bike oferecido pela Multiplusgroup - a melhor cobertura do mercado para manter sua bicicleta sempre protegida",
    link: "/seguros/seguro-bike",
    buttonText: "Saiba mais",
    mediaProps: {
      image: ImgSeguroBike,
      component: "img",
      height: "200",
    },
  },
  {
    title: "Seguro Fiança Locatícia",
    content:
      "Alugue seu imóvel com praticidade e segurança, sem a necessidade de um fiador grantindo traquilidade para locador e locatário com o Seguro Fiança Locatícia da MultiplusGroup",
    link: "/seguros/seguro-fianca-locaticia",
    buttonText: "Saiba mais",
    mediaProps: {
      image: ImgSeguroLocacao,
      component: "img",
      height: "200",
    },
  },
  {
    title: "Seguro de RC para Advogados",
    content:
      "O Seguro de Responsabilidade Civil para Advogados oferecido pela Multiplusgroup permite que você trabalhe com foco no bem estar de seus clientes de forma segura e responsável",
    link: "/seguros/seguro-rc-advogado",
    buttonText: "Saiba mais",
    mediaProps: {
      image: ImgSeguroAdvogado,
      component: "img",
      height: "200",
    },
  },
  {
    title: "Seguro de RC para Contadores",
    content:
      "Com a proteção personalizada oferecida pela Multiplusgroup você poderá exercer a sua profissão como contador de maneira segura e responsável sem qualquer preocupação",
    link: "/seguros/seguro-rc-contador",
    buttonText: "Saiba mais",
    mediaProps: {
      image: ImgSeguroContador,
      component: "img",
      height: "200",
    },
  },
  {
    title: "Seguro de RC para Dentistas",
    content:
      "O Seguro de Responsabilidade Civil para Dentistas oferecido pela Multiplusgroup permite que você trabalhe de forma segura com foco no bem estar de seus pacientes",
    link: "/seguros/seguro-rc-dentista",
    buttonText: "Saiba mais",
    mediaProps: {
      image: ImgSeguroDentista,
      component: "img",
      height: "200",
    },
  },
  {
    title: "Seguro de RC Médicos",
    content:
      "Atenda seus pacientes sem qualquer preocupação após realizar a contratação do Seguro de Responsabilidade Civil para Médicos oferecido pela Multiplusgroup",
    link: "/seguros/seguro-rc-medico",
    buttonText: "Saiba mais",
    mediaProps: {
      image: ImgSeguroMedico,
      component: "img",
      height: "200",
    },
  },
  {
    title: "Seguro de Residencial",
    content:
      "Desfrute o conforto de seu lar garantingdo ainda mais segurança com os seguros residenciais oferecidos pela Multiplusgroup, usufruindo da variedade de coberturas disponíveis",
    link: "/seguros/seguro-residencial",
    buttonText: "Saiba mais",
    mediaProps: {
      image: ImgSeguroResidencial,
      component: "img",
      height: "200",
    },
  },
  {
    title: "Seguro Viagem",
    content:
      "As coberturas oferecidas pelo Seguro Viagem da Multiplusgroup permitem que você viaje com tranquilidade, conforto e segurança, sem se preocupar com quaisquer imprevistos",
    link: "/seguros/seguro-viagem",
    buttonText: "Saiba mais",
    mediaProps: {
      image: ImgSeguroViagem,
      component: "img",
      height: "200",
    },
  },
];

const SEGUROS_EMPRESA = [
  {
    title: "Seguro Cyber",
    content:
      "O Seguro Cyber oferecido pela Multiplusgroup fornece as melhores opções de proteção de dados para sua empresa, garantindo segurança no ambiente digital",
    link: "/seguros/seguro-cyber",
    buttonText: "Saiba mais",
    mediaProps: {
      image: ImgSeguroCyber,
      component: "img",
      height: "200",
    },
  },
  {
    title: "Seguro Empresa",
    content:
      "Proteja seu empreendimento com o Seguro Empresarial personalizado oferecido pela Multiplusgroup, com descontos e promoções exclusivas para sua empresa",
    link: "/seguros/seguro-empresa-pm",
    buttonText: "Saiba mais",
    mediaProps: {
      image: ImgSeguroEmpresa,
      component: "img",
      height: "200",
    },
  },
  {
    title: "Seguro de RC Geral",
    content:
      "Garanta a continuidade e credibilidade de sua empresa com o Seguro de Responsabilidade Civil Geral oferecido pela Multiplusgroup com a melhor cobertura do mercado",
    link: "/seguros/seguro-rc-geral",
    buttonText: "Saiba mais",
    mediaProps: {
      image: ImgSeguroRC,
      component: "img",
      height: "200",
    },
  },
  {
    title: "Seguro de Vida Coletivo",
    content:
      "Proteção abrangente e benefícios essenciais para seus colaboradoes e suas famílias é somente com a Multiplusgroup e as coberturas sobre medida oferecidas em nosso Seguro de Vida Coletivo",
    link: "/seguros/seguro-vida-coletivo",
    buttonText: "Saiba mais",
    mediaProps: {
      image: ImgSeguroVidaCol,
      component: "img",
      height: "200",
    },
  },
];

const SEGUROS_OUTROS = [
  {
    title: "Seguro de AP para Estagiários",
    content:
      "O Seguro de Acidentes Pessoais para Estagiários da Multiplusgroup oferece a proteção completa para quem empresários e seus estagiários, garantindo o cumprimeto das legislações regulamentadoras vigentes",
    link: "/seguros/seguro-acidente-estagiario",
    buttonText: "Saiba mais",
    mediaProps: {
      image: ImgSeguroAPE,
      component: "img",
      height: "200",
    },
  },
  {
    title: "Seguro de Riscos de Engenharia",
    content:
      "Construir ou reformar são grandes investimentos que geram diversas possiblidades de riscos, os quais não serão motivo de preocupação ao contrar o Seguro Riscos de Engenharia da Multiplusgroup",
    link: "/seguros/seguro-riscos-engenharia",
    buttonText: "Saiba mais",
    mediaProps: {
      image: ImgSeguroRiscoEng,
      component: "img",
      height: "200",
    },
  },
];

export { SEGUROS_EMPRESA, SEGUROS_OUTROS, SEGUROS_VOCE };
