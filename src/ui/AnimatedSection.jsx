import { Grid2 as Grid } from "@mui/material";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedSection = ({
  children,
  className = "",
  animation = "translateY(25px)",
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <Grid
      ref={ref}
      className={`w-full ${className}`}
      style={{
        transform: isInView ? "none" : animation,
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      {...props}
    >
      {children}
    </Grid>
  );
};

export default AnimatedSection;
