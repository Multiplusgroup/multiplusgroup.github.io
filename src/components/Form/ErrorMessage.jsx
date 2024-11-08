import { FormHelperText as BaseFormHelperText, Fade } from "@mui/material";
import { forwardRef } from "react";

const FormHelperText = forwardRef((props, ref) => {
  return <BaseFormHelperText {...props} ref={ref}></BaseFormHelperText>;
});
FormHelperText.displayName = "FormHelperText";

const ErrorMessage = ({ text, className, ...props }) => {
  return (
    <Fade in={text}>
      <FormHelperText className={`formError ${className}`} {...props}>
        {text}
      </FormHelperText>
    </Fade>
  );
};

export default ErrorMessage;
