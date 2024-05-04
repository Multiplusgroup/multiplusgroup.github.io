import { Grid } from "@mui/material";
import { useRef } from "react";
import { useInView } from "framer-motion";

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
      className={className}
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
