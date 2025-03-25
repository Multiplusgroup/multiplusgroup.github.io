import { StyledEngineProvider } from "@mui/material";
import router from "@routes/router";
import { RouterProvider } from "@tanstack/react-router";

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  );
};

export default App;
