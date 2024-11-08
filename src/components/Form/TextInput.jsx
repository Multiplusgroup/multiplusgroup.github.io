import ErrorMessage from "@/components/Form/ErrorMessage";
import {
  TextField as BaseTextField,
  Grid2 as Grid,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { forwardRef } from "react";

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
  charCount,
  label,
  ...props
}) => {
  const { id, type, errors, rows, limit, disabled } = props;

  return (
    <Grid className={`${className}`}>
      <InputLabel className="label" htmlFor={id}>
        {label}
      </InputLabel>
      <TextField
        className="w-full"
        disabled={disabled}
        multiline={rows && true}
        rows={rows}
        error={errors && true}
        id={id}
        type={type}
        autoComplete={id}
        slotProps={{
          ...InputProps,
          input: {
            className: `${errors && "error"}`,
            startAdornment: startIcon && (
              <InputAdornment position="start">{startIcon}</InputAdornment>
            ),
            endAdornment: endIcon && (
              <InputAdornment position="start">{endIcon}</InputAdornment>
            ),
          },
          inputProps: {
            name: id,
          },
        }}
        {...props}
        {...register}
      />
      {errors && <ErrorMessage text={errors.message} />}
      {limit && !errors && (
        <Grid container className="grow justify-end">
          <Grid>
            <p className="text-sm">
              {charCount}/{limit}
            </p>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default InputText;
