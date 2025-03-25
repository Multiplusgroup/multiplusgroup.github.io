import { Collapse, FormHelperText } from "@mui/material";
import { useEffect, useState } from "react";

const ErrorMessage = ({ text, className = "", ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(Boolean(text));
    return () => setIsVisible(false);
  }, [text]);

  return (
    <Collapse in={isVisible}>
      <FormHelperText
        className={`${className} !font-extrabold !text-red-700`}
        {...props}
      >
        {text ?? " "}
      </FormHelperText>
    </Collapse>
  );
};

export default ErrorMessage;
