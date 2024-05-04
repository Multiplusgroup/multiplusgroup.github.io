import PromoLayout from "../ui/PromoLayout";
import { Outlet } from "react-router-dom";

const Promo = () => {
  return (
    <PromoLayout>
      <Outlet />
    </PromoLayout>
  );
};

export default Promo;
