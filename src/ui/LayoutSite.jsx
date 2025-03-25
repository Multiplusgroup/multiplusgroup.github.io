import WhatsAppButton from "@components/WhatsAppButton";
import { HeadContent, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Footer from "@ui/Footer";
import Header from "@ui/Header";
import Main from "@ui/Main";
import Providers from "@ui/Providers";
import ScrollToHash from "@ui/ScrollToHash";
import ScrollToTop from "@ui/ScrollToTop";
import Toaster from "@ui/Toaster";

const LayoutSite = () => {
  return (
    <Providers>
      <HeadContent />
      <ScrollToTop />
      <ScrollToHash />
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <WhatsAppButton />
      <TanStackRouterDevtools />
      <Toaster />
    </Providers>
  );
};

export default LayoutSite;
