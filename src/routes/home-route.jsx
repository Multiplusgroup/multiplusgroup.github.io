import PageEmConstrucao from "@pages/PageEmConstrucao";
import PageIndex from "@pages/PageIndex";
import rootRoute from "@routes/root-route";
import { createRoute } from "@tanstack/react-router";

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <PageEmConstrucao />,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Multiplusgroup - a escolha segura para sua corretora de seguros!",
      },
      {
        title: "Bem vindo à Multiplusgroup",
      },
    ],
  }),
});

export default homeRoute;
