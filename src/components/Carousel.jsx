import { Grid2 as Grid } from "@mui/material";
import BaseCarousel from "react-material-ui-carousel";

const Carousel = ({
  children,
  navButtons = true,
  fullHeightHover = false,
  indicators = true,
  ...props
}) => {
  return (
    <Grid className="w-full bg-multiGreen-xLight pb-3">
      <BaseCarousel
        indicators={indicators}
        stopAutoPlayOnHover
        {...props}
        navButtonsAlwaysVisible={navButtons}
        navButtonsProps={{
          className:
            "!bg-transparent text-multiBrown hover:opacity-100 p-1 !rounded-none m-0",
          disableRipple: true,
        }}
        fullHeightHover={fullHeightHover}
        indicatorIconButtonProps={{
          className: "text-multiGray-dark mx-[5px] transition-all duration-500",
        }}
        activeIndicatorIconButtonProps={{
          className:
            "!text-multiBrown border-multiBrown border-solid border-[1px] transition-all duration-500",
        }}
      >
        {children}
      </BaseCarousel>
    </Grid>
  );
};

export default Carousel;
