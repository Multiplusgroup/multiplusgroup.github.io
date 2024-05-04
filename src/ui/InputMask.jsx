import { forwardRef } from "react";
import { TextField, InputAdornment, Box } from "@mui/material";
import { IMaskInput } from "react-imask";
import { Controller } from "react-hook-form";

import FormError from "./FormError";
import inputMask from "../utils/inputMask";

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
MaskedInput.displayName = "InputMask";

const InputMask = ({
  className = "",
  InputProps,
  startIcon,
  endIcon,
  control,
  ...props
}) => {
  const { errors, id, mask } = props;
  return (
    <Box className={`${className}`}>
      <Controller
        control={control}
        name={id}
        render={({ field: { value, onChange, ref, ...field } }) => (
          <TextField
            autoComplete={id}
            error={errors && true}
            id={id}
            value={value}
            onChange={(value) => onChange(value || "")}
            inputRef={ref}
            ref={ref}
            className="w-full"
            variant="filled"
            InputProps={{
              ...InputProps,
              inputProps: {
                mask,
              },
              className: `${errors && "error"}`,
              inputComponent: MaskedInput,
              startAdornment: startIcon && (
                <InputAdornment position="start">{startIcon}</InputAdornment>
              ),
              endAdornment: endIcon && (
                <InputAdornment position="end">{endIcon}</InputAdornment>
              ),
            }}
            {...props}
            {...field}
          />
        )}
      />
      {errors && <FormError text={errors.message} />}
    </Box>
  );
};

export default InputMask;
