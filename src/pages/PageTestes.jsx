import { useEffect } from "react";
import PageEmConstrucao from "./PageEmConstrucao";
import Loader from "@ui/Loader";

const PageTestes = () => {
  useEffect(() => {
    throw new Error("Generic error");
  }, []);

  return (
    <>
      {/* <Loader text="Enviando email..." /> */}
      <PageEmConstrucao />
    </>
  );
};

export default PageTestes;
