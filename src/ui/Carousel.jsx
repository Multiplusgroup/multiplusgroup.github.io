import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import BaseCarousel from "react-material-ui-carousel";

const Carousel = ({
  children,
  pushdown = false,
  navButtons = true,
  fullHeightHover = false,
  ...props
}) => {
  const { navBarHeight } = useSelector((state) => state.display);
  const [style, setStyle] = useState(null);
  const { indicators } = props;

  useMemo(() => {
    const newStyle = {
      marginTop: `${pushdown && navBarHeight}px`,
    };
    setStyle(newStyle);
  }, [navBarHeight, pushdown]);

  return (
    <div style={style} className="pb-[2rem] pt-[3rem]">
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
    </div>
  );
};

export default Carousel;
