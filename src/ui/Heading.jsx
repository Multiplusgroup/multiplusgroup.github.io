const Heading = ({ as = "h1", children, className = "", ...props }) => {
  return (
    <>
      {as === "h1" && (
        <h1 className={className} {...props}>
          {children}
        </h1>
      )}
      {as === "h2" && (
        <h2 className={className} {...props}>
          {children}
        </h2>
      )}
      {as === "h3" && (
        <h3 className={className} {...props}>
          {children}
        </h3>
      )}
      {as === "h4" && (
        <h4 className={className} {...props}>
          {children}
        </h4>
      )}
    </>
  );
};

export default Heading;
