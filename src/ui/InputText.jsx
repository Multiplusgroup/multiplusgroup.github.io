import { TextField as BaseTextField, Box, InputAdornment } from "@mui/material";
import { forwardRef } from "react";

import FormError from "./FormError";

const TextField = forwardRef((props, ref) => {
  return <BaseTextField {...props} ref={ref} />;
});
TextField.displayName = "TextField";

const InputText = ({
  className = "",
  startIcon,
  endIcon,
  register,
  InputProps,
  ...props
}) => {
  const { id, type, errors } = props;
  return (
    <Box className={`${className}`}>
      <TextField
        error={errors && true}
        id={id}
        type={type}
        autoComplete={id}
        InputProps={{
          ...InputProps,
          className: `${errors && "error"}`,
          startAdornment: startIcon && (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
          endAdornment: endIcon && (
            <InputAdornment position="end">{endIcon}</InputAdornment>
          ),
        }}
        {...props}
        {...register}
        className="w-full"
      />
      {errors && <FormError text={errors.message} />}
    </Box>
  );
};

export default InputText;
