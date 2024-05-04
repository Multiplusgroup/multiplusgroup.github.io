import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AnimatedSection from "./AnimatedSection";

const Hero = ({
  pushdown = false,
  slide = false,
  children,
  type,
  color,
  height,
  img,
  size = "heroFull",
  className = "",
}) => {
  const { navBarHeight } = useSelector((state) => state.display);
  const [style, setStyle] = useState({});
  useEffect(() => {
    const newStyle = {
      marginTop: `${navBarHeight}px`,
    };
    setStyle(newStyle);
  }, [navBarHeight, slide]);
  return (
    <div style={pushdown ? style : {}}>
      <AnimatedSection animation="fade" duration={0.1}>
        <article
          className={`hero ${className}`}
          style={{
            height: `${height}px`,
            backgroundImage: `url(${img})`,
          }}
        >
          <div className={`${type} ${color}`}>
            <div className={`${size}`}>{children}</div>
          </div>
        </article>
      </AnimatedSection>
    </div>
  );
};

export default Hero;
