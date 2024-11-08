import FormError from "@/components/Form/ErrorMessage";
import inputMask from "@/utils/inputMask";
import {
  Grid2 as Grid,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { forwardRef } from "react";
import { Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";

const MaskedInput = forwardRef((props, ref) => {
  const { onChange, mask, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask={inputMask(mask)}
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});
MaskedInput.displayName = "TextField";

const InputMask = ({
  className = "",
  InputProps,
  startIcon,
  endIcon,
  control,
  label,
  mask,
  ...props
}) => {
  const { id, type, errors } = props;
  return (
    <Grid className={`${className}`}>
      <InputLabel className="label" htmlFor={id}>
        {label}
      </InputLabel>
      <Controller
        control={control}
        name={id}
        render={({ field: { value, onChange, ref, ...field } }) => (
          <TextField
            type={type}
            autoComplete={id}
            error={errors && true}
            id={id}
            value={value}
            onChange={(value) => onChange(value || "")}
            inputRef={ref}
            ref={ref}
            className="w-full"
            variant="filled"
            slotProps={{
              ...InputProps,
              input: {
                startAdornment: startIcon && (
                  <InputAdornment position="start">{startIcon}</InputAdornment>
                ),
                endAdornment: endIcon && (
                  <InputAdornment position="end">{endIcon}</InputAdornment>
                ),
                className: `${errors && "error"}`,
                inputComponent: MaskedInput,
                inputProps: {
                  mask,
                },
              },
            }}
            {...props}
            {...field}
          />
        )}
      />
      {errors && <FormError text={errors.message} />}
    </Grid>
  );
};

export default InputMask;
