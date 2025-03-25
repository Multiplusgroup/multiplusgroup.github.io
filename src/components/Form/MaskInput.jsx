import FormError from "@components/Form/ErrorMessage";
import {
  Grid2 as Grid,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import inputMask from "@utils/inputMask";
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

const MaskInput = ({
  className = "",
  variant = "filled",
  startIcon,
  endIcon,
  control,
  fieldName,
  mask,
  placeholder,
  hiddenLabel = true,
  ...props
}) => {
  const { id, type, errors } = props;
  return (
    <Grid className={`${className}`}>
      {hiddenLabel && (
        <InputLabel
          className={`!font-title !text-multi-brown !font-extrabold transition-all duration-500 ${errors && "!text-red-700"}`}
          htmlFor={id}
        >
          {fieldName}
        </InputLabel>
      )}
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
            variant={variant}
            size={hiddenLabel && "small"}
            hiddenLabel={hiddenLabel}
            label={!hiddenLabel ? fieldName : null}
            placeholder={placeholder}
            slotProps={{
              input: {
                startAdornment: startIcon && (
                  <InputAdornment
                    position="start"
                    className={`${errors && "!text-multi-white"}`}
                  >
                    {startIcon}
                  </InputAdornment>
                ),
                endAdornment: endIcon && (
                  <InputAdornment
                    position="end"
                    className={`${errors && "!text-multi-white"}`}
                  >
                    {endIcon}
                  </InputAdornment>
                ),
                inputComponent: MaskedInput,
                inputProps: {
                  mask,
                },
              },
            }}
            className={`w-full ${errors && "error"}`}
            {...props}
            {...field}
          />
        )}
      />
      {errors && <FormError text={errors.message} />}
    </Grid>
  );
};

export default MaskInput;
