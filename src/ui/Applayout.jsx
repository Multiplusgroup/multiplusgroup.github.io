import WhatsApp from "@/components/WhatsApp";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import Main from "@/ui/Main";
import Toaster from "@/ui/Toaster";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Applayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <WhatsApp />
      <Toaster />
    </>
  );
};

export default Applayout;
