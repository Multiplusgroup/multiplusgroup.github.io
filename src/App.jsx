import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { promo } from "./siteConstants/seguros";

import Applayout from "./ui/Applayout";
import Promocional from "./ui/Promocional";
import Index from "./pages/Index";
import QuemSomos from "./pages/QuemSomos";
import Seguros from "./pages/Seguros";
import Contato from "./pages/Contato";
import Testes from "./pages/Testes";
import ErrorFallback from "./ui/ErrorFallback";
import EmConstrucao from "./pages/EmConstrucao";
import * as Detalhes from "./pages/fragments/Detalhes";

const routes = createBrowserRouter([
  {
    // path: "/",
    // element: <EmConstrucao />,
    element: <Applayout />,
    errorElement: <ErrorFallback />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/quem-somos",
        element: <QuemSomos />,
      },
      {
        path: "/seguros",
        element: <Seguros />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
      {
        path: "/testes",
        element: <Testes />,
      },
      {
        path: "/seguro-exemplo",
        element: (
          <Promocional cotacaoURL={promo.exemplo.cotacaoURL}>
            <Detalhes.DetalheExemplo />
          </Promocional>
        ),
      },
      {
        path: "/seguro-auto",
        element: (
          <Promocional>
            <EmConstrucao />
          </Promocional>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
