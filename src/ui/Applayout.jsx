import { Outlet, ScrollRestoration } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Applayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Applayout;
