import { Divider, Grid2 as Grid } from "@mui/material";
import AnimatedSection from "@ui/AnimatedSection";

const FormActions = ({ className = "", children }) => {
  return (
    <AnimatedSection className="!mb-0 grid gap-5">
      <Divider className="bg-multi-brown/40" />
      <Grid
        className={`flex items-center justify-center gap-5 md:flex-row md:justify-end ${className}`}
      >
        {children}
      </Grid>
    </AnimatedSection>
  );
};

export default FormActions;
