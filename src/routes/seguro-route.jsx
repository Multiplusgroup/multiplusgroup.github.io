import SeguroAcidenteEstagiario from "@components/Seguros/fragments/SeguroAcidenteEstagiario";
import SeguroAcidentePassageiro from "@components/Seguros/fragments/SeguroAcidentePassageiro";
import SeguroAuto from "@components/Seguros/fragments/SeguroAuto";
import SeguroBike from "@components/Seguros/fragments/SeguroBike";
import SeguroCyber from "@components/Seguros/fragments/SeguroCyber";
import SeguroEmpresaPM from "@components/Seguros/fragments/SeguroEmpresaPM";
import SeguroLocacao from "@components/Seguros/fragments/SeguroLocacao";
import SeguroRCAdvogado from "@components/Seguros/fragments/SeguroRCAdvogado";
import SeguroRCContador from "@components/Seguros/fragments/SeguroRCContador";
import SeguroRCDentista from "@components/Seguros/fragments/SeguroRCDentista";
import SeguroRCGeral from "@components/Seguros/fragments/SeguroRCGeral";
import SeguroRCMedico from "@components/Seguros/fragments/SeguroRCMedico";
import SeguroResidencial from "@components/Seguros/fragments/SeguroResidencial";
import SeguroEngenharia from "@components/Seguros/fragments/SeguroRiscoEngenharia";
import Seguros from "@components/Seguros/fragments/Seguros";
import SeguroViagem from "@components/Seguros/fragments/SeguroViagem";
import SeguroVidaColetivo from "@components/Seguros/fragments/SeguroVidaColetivo";
import PageSeguros from "@pages/PageSeguros";
import rootRoute from "@routes/root-route";
import { createRoute } from "@tanstack/react-router";

const seguroRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/seguros",
  component: () => <PageSeguros />,
});

const seguroIndex = createRoute({
  getParentRoute: () => seguroRoute,
  path: "/",
  component: () => <Seguros />,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Conheça todos as modalidades de seguro oferecidas pela Multiplusgroup e faça já a contratação de um de nossos seguros para sua tranquilidade e seguranca",
      },
      {
        title: "Seguros - Multiplusgroup",
      },
    ],
  }),
});

const seguroAPE = createRoute({
  getParentRoute: () => seguroRoute,
  path: "/seguro-acidente-estagiario",
  component: () => <SeguroAcidenteEstagiario />,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "O Seguro de Acidentes Pessoais para Estagiários da Multiplusgroup oferece a proteção completa para quem empresários e seus estagiários, garantindo o cumprimeto das legislações regulamentadoras vigentes",
      },
      {
        title: "Seguro de APE - Multiplusgroup",
      },
    ],
  }),
});

const seguroAPP = createRoute({
  getParentRoute: () => seguroRoute,
  path: "/seguro-acidente-passageiros",
  component: () => <SeguroAcidentePassageiro />,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "O Seguro de Acidentes Pessoais para Passageiros da Multiplusgroup oferece a proteção completa para quem transportam vidas, com cobertura para diversos tipos de veículos",
      },
      {
        title: "Seguro de APP - Multiplusgroup",
      },
    ],
  }),
});

const seguroAuto = createRoute({
  getParentRoute: () => seguroRoute,
  path: "/seguro-auto",
  component: () => <SeguroAuto />,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "A Multiplusgroup oferece opções de personalizadas para Seguros de Automóvel que se ajustam às sua necessidades com diferente coberturas, para seu conforto e seguranca ao dirigir",
      },
      {
        title: "Seguro Auto - Multiplusgroup",
      },
    ],
  }),
});

const seguroBike = createRoute({
  getParentRoute: () => seguroRoute,
  path: "/seguro-bike",
  component: () => <SeguroBike />,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Garanta a segurança e conforto em suas atividades de ciclismo com o Seguro Bike oferecido pela Multiplusgroup - a melhor cobertura do mercado para manter sua bicicleta sempre protegida",
      },
      {
        title: "Seguro Bike - Multiplusgroup",
      },
    ],
  }),
});

const seguroCyber = createRoute({
  getParentRoute: () => seguroRoute,
  path: "/seguro-cyber",
  component: () => <SeguroCyber />,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "O Seguro Cyber oferecido pela Multiplusgroup fornece as melhores opções de proteção de dados para sua empresa, garantindo segurança no ambiente digital",
      },
      {
        title: "Seguro Cyber - Multiplusgroup",
      },
    ],
  }),
});

const seguroEmpresa = createRoute({
  getParentRoute: () => seguroRoute,
  path: "/seguro-empresa-pm",
  component: () => <SeguroEmpresaPM />,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Proteja seu empreendimento com o Seguro Empresarial personalizado oferecido pela Multiplusgroup, com descontos e promoções exclusivas para sua empresa",
      },
      {
        title: "Seguro Empresa (pequeno e médio porte) - Multiplusgroup",
      },
    ],
  }),
});

const seguroLocacao = createRoute({
  getParentRoute: () => seguroRoute,
  path: "/seguro-fianca-locaticia",
  component: () => <SeguroLocacao />,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Alugue seu imóvel com praticidade e segurança, sem a necessidade de um fiador grantindo traquilidade para locador e locatário com o Seguro Fiança Locatícia da MultiplusGroup",
      },
      {
        title: "Seguro Fiança Locatícia - Multiplusgroup",
      },
    ],
  }),
});

const seguroRCAdvogado = createRoute({
  getParentRoute: () => seguroRoute,
  path: "/seguro-rc-advogado",
  component: () => <SeguroRCAdvogado />,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "O Seguro de Responsabilidade Civil para Advogados oferecido pela Multiplusgroup permite que você trabalhe com foco no bem estar de seus clientes de forma segura e responsável",
      },
      {
        title: "Seguro de RC para Advogados - Multiplusgroup",
      },
    ],
  }),
});

const seguroRCContador = createRoute({
  getParentRoute: () => seguroRoute,
  path: "/seguro-rc-contador",
  component: () => <SeguroRCContador />,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Com a proteção personalizada oferecida pela Multiplusgroup você poderá exercer a sua profissão como contador de maneira segura e responsável sem qualquer preocupação",
      },
      {
        title: "Seguro de RC para Contadores - Multiplusgroup",
      },
    ],
  }),
});

const seguroRCDentista = createRoute({
  getParentRoute: () => seguroRoute,
  path: "/seguro-rc-dentista",
  component: () => <SeguroRCDentista />,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "O Seguro de Responsabilidade Civil para Dentistas oferecido pela Multiplusgroup permite que você trabalhe de forma segura com foco no bem estar de seus pacientes",
      },
      {
        title: "Seguro de RC para Dentistas - Multiplusgroup",
      },
    ],
  }),
});

const seguroRCGeral = createRoute({
  getParentRoute: () => seguroRoute,
  path: "/seguro-rc-geral",
  component: () => <SeguroRCGeral />,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Garanta a continuidade e credibilidade de sua empresa com o Seguro de Responsabilidade Civil Geral oferecido pela Multiplusgroup com a melhor cobertura do mercado",
      },
      {
        title: "Seguro de RC Geral - Multiplusgroup",
      },
    ],
  }),
});

const seguroRCMedico = createRoute({
  getParentRoute: () => seguroRoute,
  path: "/seguro-rc-medico",
  component: () => <SeguroRCMedico />,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Atenda seus pacientes sem qualquer preocupação após realizar a contratação do Seguro de Responsabilidade Civil para Médicos oferecido pela Multiplusgroup",
      },
      {
        title: "Seguro de RC para Médicos - Multiplusgroup",
      },
    ],
  }),
});

const seguroResidencial = createRoute({
  getParentRoute: () => seguroRoute,
  path: "/seguro-residencial",
  component: () => <SeguroResidencial />,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Desfrute o conforto de seu lar garantingdo ainda mais segurança com os seguros residenciais oferecidos pela Multiplusgroup, usufruindo da variedade de coberturas disponíveis",
      },
      {
        title: "Seguro Residencial - Multiplusgroup",
      },
    ],
  }),
});

const seguroRiscoEng = createRoute({
  getParentRoute: () => seguroRoute,
  path: "/seguro-riscos-engenharia",
  component: () => <SeguroEngenharia />,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Construir ou reformar são grandes investimentos que geram diversas possiblidades de riscos, os quais não serão motivo de preocupação ao contrar o Seguro Riscos de Engenharia da Multiplusgroup",
      },
      {
        title: "Seguro de Riscos de Engenharia - Multiplusgroup",
      },
    ],
  }),
});

const seguroViagem = createRoute({
  getParentRoute: () => seguroRoute,
  path: "/seguro-viagem",
  component: () => <SeguroViagem />,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "As coberturas oferecidas pelo Seguro Viagem da Multiplusgroup permitem que você viaje com tranquilidade, conforto e segurança, sem se preocupar com quaisquer imprevistos",
      },
      {
        title: "Seguro Viagem - Multiplusgroup",
      },
    ],
  }),
});

const seguroVidaCol = createRoute({
  getParentRoute: () => seguroRoute,
  path: "/seguro-vida-coletivo",
  component: () => <SeguroVidaColetivo />,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Proteção abrangente e benefícios essenciais para seus colaboradoes e suas famílias é somente com a Multiplusgroup e as coberturas sobre medida oferecidas em nosso Seguro de Vida Coletivo",
      },
      {
        title: "Seguro de Vida Coletivo - Multiplusgroup",
      },
    ],
  }),
});

seguroRoute.addChildren([
  seguroIndex,
  seguroAPE,
  seguroAPP,
  seguroAuto,
  seguroBike,
  seguroCyber,
  seguroEmpresa,
  seguroLocacao,
  seguroRCAdvogado,
  seguroRCContador,
  seguroRCDentista,
  seguroRCGeral,
  seguroRCMedico,
  seguroResidencial,
  seguroRiscoEng,
  seguroViagem,
  seguroVidaCol,
]);

export default seguroRoute;
