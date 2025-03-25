import ErrorMessage from "@components/Form/ErrorMessage";
import {
  Grid2 as Grid,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";

const TextInput = ({
  id,
  type,
  errors,
  rows,
  limit,
  disabled,
  variant = "filled",
  placeholder,
  fieldName,
  className = "",
  charCount = 0,
  startIcon,
  endIcon,
  hidden = false,
  hiddenLabel = true,
  register,
  required,
  ref = null,
  ...props
}) => {
  return (
    <Grid className={`${className}`} hidden={hidden}>
      {hiddenLabel && (
        <InputLabel
          className={`!font-title !text-multi-brown !font-extrabold transition-all duration-500 ${errors && "!text-red-700"}`}
          htmlFor={id}
        >
          {fieldName}
        </InputLabel>
      )}
      <TextField
        id={id}
        name={id}
        ref={ref}
        rows={rows}
        type={type}
        limit={limit}
        error={errors}
        variant={variant}
        size={hiddenLabel && "small"}
        className={`w-full ${errors && "error"}`}
        disabled={disabled}
        multiline={Boolean(rows)}
        hiddenLabel={hiddenLabel}
        label={!hiddenLabel ? fieldName : null}
        placeholder={placeholder}
        required={required}
        slotProps={{
          input: {
            startAdornment: startIcon && (
              <InputAdornment
                position="start"
                className={`${errors && "!text-red-700"}`}
              >
                {startIcon}
              </InputAdornment>
            ),
            endAdornment: endIcon && (
              <InputAdornment
                position="end"
                className={`${errors && "!text-red-700"}`}
              >
                {endIcon}
              </InputAdornment>
            ),
          },
        }}
        {...register}
        {...props}
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

export default TextInput;
