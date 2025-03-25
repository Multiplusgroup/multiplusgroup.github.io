import PageContato from "@pages/PageContato";
import rootRoute from "@routes/root-route";
import { createRoute } from "@tanstack/react-router";

const contatoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contato",
  component: () => <PageContato />,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Entre em contato conosco via formulário ou WhatsApp para obter detalhes sobre os seguros oferecidos pela Multiplusgroup",
      },
      {
        title: "Contato - Multiplusgroup",
      },
    ],
  }),
});

export default contatoRoute;
