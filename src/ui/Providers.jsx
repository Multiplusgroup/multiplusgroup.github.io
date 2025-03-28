import store from "@store/store";
import { Provider } from "react-redux";

const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
