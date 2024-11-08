import EmConstrucao from "@/components/pages/Construcao/ContentConstrucao";
import AnimatedSection from "@/ui/AnimatedSection";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Promocional = ({ children, cotacaoURL }) => {
  return (
    <>
      {!cotacaoURL && <EmConstrucao />}
      {cotacaoURL && (
        <>
          {children}
          <AnimatedSection className="mx-auto mb-[4rem] flex !w-[90%] flex-col items-center justify-center gap-5 md:!w-[80%]">
            <Button
              className="button buttonCTA w-[300px] !py-5"
              LinkComponent={Link}
              to={cotacaoURL}
            >
              Faça agora uma cotação!
            </Button>
          </AnimatedSection>
        </>
      )}
    </>
  );
};

export default Promocional;
