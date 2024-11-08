import ErrorMessage from "@/components/Form/ErrorMessage";
import {
  Autocomplete as BaseAutocomplete,
  TextField as BaseTextField,
  Grid2 as Grid,
  InputLabel,
} from "@mui/material";
import { Controller } from "react-hook-form";

const Combobox = ({
  className = "",
  noOptionsText = "A opção escolhida não existe",
  freeSolo,
  label,
  control,
  options = [""],
  ...props
}) => {
  const { id, errors, variant, placeholder, disabled } = props;

  return (
    <Grid className={`${className}`}>
      <InputLabel className="label" htmlFor={id}>
        {label}
      </InputLabel>
      <Controller
        name={id}
        control={control}
        disabled={disabled}
        {...props}
        render={({ field: { onChange, value, ref, ...field } }) => (
          <BaseAutocomplete
            noOptionsText={noOptionsText}
            freeSolo={freeSolo}
            forcePopupIcon={freeSolo && true}
            getOptionLabel={(option) => {
              return option.label ?? "";
            }}
            onChange={(event, newValue) => {
              onChange(newValue ? newValue._id : null);
            }}
            disablePortal
            id={id}
            value={
              value
                ? (options.find((option) => {
                    return value === option._id;
                  }) ?? null)
                : null
            }
            options={options}
            renderInput={(params) => (
              <BaseTextField
                ref={ref}
                variant={variant}
                placeholder={placeholder}
                disabled={disabled}
                error={errors && true}
                className={`select ${errors && "error"}`}
                {...params}
              />
            )}
            {...field}
          />
        )}
      />
      {errors && <ErrorMessage text={errors.message} />}
    </Grid>
  );
};

export default Combobox;
