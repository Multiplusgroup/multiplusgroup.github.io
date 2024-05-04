import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from "react-router-dom";
import { Grid, Button } from "@mui/material";

import NaoEncontrada from "../pages/NaoEncontrada";
import ErroGeral from "../pages/ErroGeral";
const ErrorFallback = () => {
  const path = window.location.href;
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <Grid container>
      <Grid item>
        {isRouteErrorResponse(error) && error.status === 404 ? (
          <NaoEncontrada
            path={path}
            backButton={
              <Button className="button" onClick={() => navigate(-1)}>
                Voltar
              </Button>
            }
          />
        ) : (
          <ErroGeral
            error={error}
            backButton={
              <Button className="button" onClick={() => navigate(-1)}>
                Voltar
              </Button>
            }
          />
        )}
      </Grid>
    </Grid>
  );
};

export default ErrorFallback;
