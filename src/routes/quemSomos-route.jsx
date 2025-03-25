import PageQuemSomos from "@pages/PageQuemSomos";
import rootRoute from "@routes/root-route";
import { createRoute } from "@tanstack/react-router";

const quemSomosRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quem-somos",
  component: () => <PageQuemSomos />,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Multiplusgroup - conheça nossos valores ideais e compromissos para garantir a sua segurança e de sua empresa",
      },
      {
        title: "Quem somos - Multiplusgroup",
      },
    ],
  }),
});

export default quemSomosRoute;
