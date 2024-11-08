import AnimatedSection from "@/ui/AnimatedSection";
import { Grid2 as Grid } from "@mui/material";

const Hero = ({
  children,
  type,
  color,
  height,
  img,
  size = "heroFull",
  className = "",
}) => {
  return (
    <AnimatedSection animation="fade" duration={0.1}>
      <Grid
        className={`hero ${className}`}
        style={{
          height: `${height}px`,
          backgroundImage: `url(${img})`,
        }}
      >
        <Grid className={`${type} ${color} ${size}`}>{children}</Grid>
      </Grid>
    </AnimatedSection>
  );
};

export default Hero;
