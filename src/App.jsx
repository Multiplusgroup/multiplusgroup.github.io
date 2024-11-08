import routes from "@/routes";
import store from "@/store";
import { StyledEngineProvider } from "@mui/material";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <RouterProvider router={routes} />
      </StyledEngineProvider>
    </Provider>
  );
};

export default App;
