import SegurosExpansor from "@/components/pages/Seguros/SegurosExpansor";
import { segurosExpander } from "@/constants/seguros";
import AnimatedSection from "@/ui/AnimatedSection";

const ContentSegurosTodos = () => {
  return (
    <AnimatedSection className="mx-auto my-[4rem] !w-[90%] md:!w-[80%]">
      <SegurosExpansor lista={segurosExpander} />
    </AnimatedSection>
  );
};

export default ContentSegurosTodos;
