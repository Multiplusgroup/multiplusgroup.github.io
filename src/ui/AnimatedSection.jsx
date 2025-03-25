import { Grid2 as Grid } from "@mui/material";
import { useInView } from "motion/react";
import { useRef } from "react";

const AnimatedSection = ({
  children,
  className = "",
  animation = "translateY(50px)",
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Grid
      ref={ref}
      className={`${className}`}
      style={{
        transform: isInView ? "none" : animation,
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
      component="section"
      {...props}
    >
      {children}
    </Grid>
  );
};

export default AnimatedSection;
