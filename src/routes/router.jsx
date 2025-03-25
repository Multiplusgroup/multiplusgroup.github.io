import PageErroGeral from "@pages/PageErroGeral";
import PageNaoEncontrada from "@pages/PageNaoEncontrada";
import contatoRoute from "@routes/contato-route";
import homeRoute from "@routes/home-route";
import quemSomosRoute from "@routes/quemSomos-route";
import rootRoute from "@routes/root-route";
import seguroRoute from "@routes/seguro-route";
import testRoute from "@routes/test-route";
import { createRouter } from "@tanstack/react-router";

const routeTree = import.meta.env.DEV
  ? rootRoute.addChildren([
      homeRoute,
      quemSomosRoute,
      seguroRoute,
      contatoRoute,
      testRoute,
    ])
  : rootRoute.addChildren([
      homeRoute,
      quemSomosRoute,
      seguroRoute,
      contatoRoute,
    ]);

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <PageNaoEncontrada />,
  defaultErrorComponent: ({ error, reset }) => (
    <PageErroGeral error={error} reset={reset} />
  ),
});

export default router;
