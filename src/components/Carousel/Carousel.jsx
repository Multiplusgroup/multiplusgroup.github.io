import StyledBack from "@components/Carousel/StyledBack";
import StyledDot from "@components/Carousel/StyledDot";
import StyledNext from "@components/Carousel/StyledNext";
import { responsiveHero } from "@constants/responsiveCarousel";
import { Grid2 as Grid } from "@mui/material";
import BaseCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel = ({
  id,
  renderDotsOutside = false,
  children,
  responsive = responsiveHero,
  showDots = true,
  ...props
}) => {
  return (
    <Grid className={`relative w-full ${renderDotsOutside && "pb-8"}`} id={id}>
      <BaseCarousel
        additionalTransfrom={0}
        autoPlay
        arrows
        autoPlaySpeed={6000}
        centerMode={false}
        containerClass="w-full relative grow"
        dotListClass={`relative gap-3 !py-2 bg-multi-black/10 backdrop-blur-lg ${renderDotsOutside && "bg-multi-green-light backdrop-blur-none"}`}
        draggable
        focusOnSelect={false}
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        responsive={responsive}
        rewind={true}
        rewindWithAnimation={true}
        shouldResetAutoplay
        showDots={showDots}
        slidesToSlide={1}
        swipeable
        ssr={false}
        transitionDuration={700}
        renderDotsOutside={renderDotsOutside}
        customDot={<StyledDot />}
        customLeftArrow={<StyledBack />}
        customRightArrow={<StyledNext />}
        {...props}
      >
        {children}
      </BaseCarousel>
    </Grid>
  );
};

export default Carousel;
