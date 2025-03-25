import ErrorMessage from "@components/Form/ErrorMessage";
import {
  Autocomplete as BaseAutocomplete,
  TextField as BaseTextField,
  Grid2 as Grid,
  InputLabel,
} from "@mui/material";
import { Controller } from "react-hook-form";

const ComboInput = ({
  className = "",
  hiddenLabel = true,
  noOptionsText = "A opção escolhida não existe",
  freeSolo,
  control,
  fieldName,
  options = [""],
  ...props
}) => {
  const {
    id,
    errors,
    variant = "filled",
    placeholder,
    disabled,
    hidden,
    open,
    blurOnSelect = true,
  } = props;

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
      <Controller
        id={id}
        name={id}
        control={control}
        {...props}
        render={({ field: { onChange, value, ref, ...field } }) => (
          <BaseAutocomplete
            noOptionsText={noOptionsText}
            blurOnSelect={blurOnSelect}
            freeSolo={freeSolo}
            forcePopupIcon={freeSolo && true}
            size="small"
            getOptionLabel={(option) => {
              if (option.descricao) return option.descricao ?? "";
              if (option.nome) return option.nome ?? "";
            }}
            onChange={(event, newValue) => {
              onChange(newValue ? newValue.id : "");
              // event && onChange(event);
            }}
            getOptionDisabled={(option) => option.isDisponivel === false}
            disablePortal
            value={
              value
                ? (options.find((option) => {
                    return value === option.id;
                  }) ?? null)
                : null
            }
            slotProps={{
              popupIndicator: {
                className: `!bg-transparent !text-multi-brown ${errors && "!text-red-700"}`,
              },
              clearIndicator: {
                className: `!bg-transparent !text-multi-brown`,
              },
            }}
            options={options}
            renderInput={(params) => (
              <BaseTextField
                error={errors && true}
                ref={ref}
                placeholder={placeholder}
                hiddenLabel
                disabled={disabled}
                variant={variant}
                className={`w-full ${errors && "error"}`}
                {...params}
              />
            )}
            {...field}
            open={open}
            // {...props}
          />
        )}
      />
      {errors && <ErrorMessage text={errors.message} />}
    </Grid>
  );
};

export default ComboInput;
