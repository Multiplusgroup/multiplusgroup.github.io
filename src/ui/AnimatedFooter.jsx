import { Grid2 as Grid } from "@mui/material";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedFooter = ({
  children,
  className = "",
  animation = "fade",
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Grid
      ref={ref}
      className={className}
      sx={{
        transform: isInView ? "none" : animation,
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      component="footer"
      {...props}
    >
      {children}
    </Grid>
  );
};

export default AnimatedFooter;
