import EmConstrucao from "@/components/pages/Construcao/ContentConstrucao";
import * as Detalhes from "@/components/pages/Detalhes";
import Promocional from "@/components/pages/Promo/Promocional";
import { promo } from "@/constants/seguros";
import Contato from "@/pages/Contato";
import Index from "@/pages/Index";
import NaoEncontrada from "@/pages/NaoEncontrada";
import QuemSomos from "@/pages/QuemSomos";
import Seguros from "@/pages/Seguros";
import SegurosTodos from "@/pages/SegurosTodos";
import Testes from "@/pages/Testes";
import Applayout from "@/ui/Applayout";
import ErrorFallback from "@/ui/ErrorFallback";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
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
        children: [
          {
            path: "/seguros/",
            element: <Seguros />,
          },
          {
            path: "/seguros/todos",
            element: <SegurosTodos />,
          },
        ],
      },
      {
        path: "/contato",
        element: <Contato />,
      },
      {
        path: "/seguro-auto",
        element: (
          <Promocional cotacaoURL={promo.auto.cotacaoURL}>
            <Detalhes.SeguroAuto />
          </Promocional>
        ),
      },
      {
        path: "/testes",
        element: <Testes />,
      },
      {
        path: "/construcao",
        element: <EmConstrucao />,
      },
      {
        path: "*",
        element: <NaoEncontrada />,
      },
    ],
  },
]);

export default routes;

/*















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

*/
