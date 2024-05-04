import {
  TextField as BaseTextField,
  InputAdornment,
  Box,
  Grid,
} from "@mui/material";
import { forwardRef } from "react";

import FormError from "./FormError";

const TextField = forwardRef((props, ref) => {
  return <BaseTextField {...props} ref={ref} multiline />;
});
TextField.displayName = "TextField";

const InputTextArea = ({
  className = "",
  startIcon,
  endIcon,
  register,
  charCount,
  InputProps,
  ...props
}) => {
  const { id, type, errors, rows, limit } = props;
  return (
    <Box className={`${className}`}>
      <TextField
        error={errors && true}
        rows={rows}
        className="w-full"
        id={id}
        type={type}
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
      />
      {errors && <FormError text={errors.message} />}
      {limit && !errors && (
        <Grid container className="grow justify-end">
          <Grid item className="counter">
            <p>
              Total de caracteres: {charCount}/{limit}
            </p>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default InputTextArea;
