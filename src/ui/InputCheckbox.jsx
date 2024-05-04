import { Checkbox as BaseCheckbox, Box, Grid } from "@mui/material";
import FormError from "./FormError";
import { Controller } from "react-hook-form";

const InputCheckbox = ({ className = "", control, ...props }) => {
  const { id, errors, children, disabled } = props;
  return (
    <Box className={`${className}`}>
      <Controller
        disabled={disabled}
        name={id}
        control={control}
        defaultValue={false}
        render={({ field: { value, ref, ...field } }) => (
          <Grid
            container
            className={`checkbox ${disabled && "disabled"} ${errors && "error"}`}
            id={id}
          >
            <Grid item>
              <BaseCheckbox
                {...field}
                aria-label={children}
                inputRef={ref}
                checked={!!value}
                disableRipple
              />
            </Grid>
            <Grid item>
              <span>{children}</span>
            </Grid>
          </Grid>
        )}
      />
      {errors && <FormError text={errors.message} />}
    </Box>
  );
};

export default InputCheckbox;
