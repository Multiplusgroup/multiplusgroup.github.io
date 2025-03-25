import PageTestes from "@pages/PageTestes";
import rootRoute from "@routes/root-route";
import { createRoute } from "@tanstack/react-router";

const testRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/test-route",
  component: () => <PageTestes />,
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

export default testRoute;
