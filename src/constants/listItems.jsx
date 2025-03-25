import {
  Agriculture,
  AirportShuttle,
  Business,
  Commute,
  DirectionsBus,
  Groups,
  LocalTaxi,
  SupervisorAccount,
  TwoWheeler,
} from "@mui/icons-material";

const porQueSeguro = [
  {
    avatar: "1",
    titulo: "Especialização e segurança",
    texto:
      "Com mais de 25 anos de atuação no mercado de seguros, somos especialistas em entender e atender às necessidades de transportadores",
  },
  {
    avatar: "2",
    titulo: "Cobertura abrangente",
    texto:
      "Planos adaptados para cada tipo de transporte, garantindo proteção completa para todos os envolvidos",
  },
  {
    avatar: "3",
    titulo: "Soluções personalizadas",
    texto:
      "Oferecemos seguros feitos sob medida, para que você proteja vidas e exerça sua atividade com tranquilidade e segurança",
  },
  {
    avatar: "4",
    titulo: "Atendimento nacional",
    texto:
      "Estamos presentes em todo o Brasil, prontos para atender onde você estiver",
  },
];

const tiposVeiculo = [
  {
    avatar: <TwoWheeler />,
    titulo: "Motocicletas",
    texto:
      "Ideal para mototaxistas e profissionais que transportam passageiros em veículos de duas rodas, garantindo segurança tanto para o condutor quanto para o passageiro",
  },
  {
    avatar: <LocalTaxi />,
    titulo: "Veículos de Aplicativos e Táxis",
    texto:
      "Um seguro indispensável para motoristas de transporte privado, oferecendo proteção para qualquer eventualidade durante as corridas",
  },
  {
    avatar: <DirectionsBus />,
    titulo: "Vans e Ônibus Escolares",
    texto:
      "Tranquilidade para os responsáveis pelo transporte de crianças e jovens, garantindo uma cobertura robusta em caso de acidentes",
  },
  {
    avatar: <AirportShuttle />,
    titulo: "Vans de Turismo e Transporte Fretado",
    texto:
      "Proteção para passageiros em viagens ou deslocamentos contratados, seja em curtas ou longas distâncias",
  },
  {
    avatar: <Commute />,
    titulo: "Veículos de Transporte Coletivo",
    texto:
      "Cobertura essencial para empresas que atuam no transporte público, priorizando a segurança de seus passageiros",
  },
  {
    avatar: <Agriculture />,
    titulo: "Caminhonetes e Veículos para Transporte em Áreas Rurais",
    texto:
      "Soluções personalizadas para o transporte de passageiros em áreas rurais, atendendo às especificidades dessa atividade",
  },
];

const beneficios = [
  {
    avatar: "1",
    titulo: "Cobertura completa",
    texto:
      "Proteção contra acidentes pessoais em qualquer lugar, seja na empresa, no trajeto ou em atividades externas relacionadas ao estágio",
  },
  {
    avatar: "2",
    titulo: "Planos acessíveis",
    texto:
      "Oferecemos opções econômicas, perfeitas para o orçamento de estudantes",
  },
  {
    avatar: "3",
    titulo: "Contratação rádipa e online",
    texto:
      "Resolva tudo em minutos, sem papelada e direto do seu celular ou computador",
  },
  {
    avatar: "4",
    titulo: "Atendimento especializado",
    texto:
      "Mais de 30 anos de experiência no setor, garantindo confiança e suporte em qualquer situação",
  },
  {
    avatar: "5",
    titulo: "Valorização do Futuro",
    texto:
      "Nossa missão é proteger a próxima geração de profissionais, oferecendo segurança para você focar no que importa: seu aprendizado e desenvolvimento",
  },
];

const quemContrata = [
  {
    avatar: <Groups />,
    titulo: "Estagiários de Cursos Técnicos",
    texto:
      "Aqueles que precisam cumprir o estágio obrigatório como parte do currículo",
  },
  {
    avatar: <SupervisorAccount />,
    titulo: "Estagiários de Cursos Superiores",
    texto:
      "Estudantes universitários que estão iniciando a prática profissional e necessitam de cobertura para sua proteção",
  },
  {
    avatar: <Business />,
    titulo: "Empresas ou instituições contratantes",
    texto:
      "É responsabilidade do empregador garantir a contratação do seguro para estagiários, conforme a legislação",
  },
];

export { beneficios, porQueSeguro, quemContrata, tiposVeiculo };
