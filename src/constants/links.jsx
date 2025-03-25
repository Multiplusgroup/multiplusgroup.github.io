const NAV_LINKS = [
  {
    to: "/",
    label: "Início",
  },
  {
    to: "/quem-somos",
    label: "Quem Somos",
  },
  {
    to: "/seguros",
    label: "Seguros",
  },
  {
    to: "/contato",
    label: "Contato",
  },
  {
    to: "/test-route",
    label: "Test Route",
    hidden: !import.meta.env.DEV,
  },
];

export { NAV_LINKS };
