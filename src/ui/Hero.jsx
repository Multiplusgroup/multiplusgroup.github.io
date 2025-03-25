import { Grid2 as Grid } from "@mui/material";
import AnimatedSection from "./AnimatedSection";

const Hero = ({
  children,
  type,
  color,
  height = 350,
  img,
  className = "",
  imgClass = "",
  blur = false,
}) => {
  return (
    <AnimatedSection animation="fade" duration={0.1} className="!m-0 w-full">
      <Grid
        className={`hero relative !w-full ${className}`}
        sx={{ height: typeof height === "string" ? height : `${height}px` }}
      >
        <Grid className={`${type} ${color} ${blur && "backdrop-blur-[5px]"}`}>
          {children}
        </Grid>
        <Grid className="absolute top-0 left-0 -z-10 h-full w-full">
          <img
            className={`object-cover ${imgClass} h-full w-full`}
            src={img}
            alt="Foto do Hero"
          />
        </Grid>
      </Grid>
    </AnimatedSection>
  );
};

export default Hero;
