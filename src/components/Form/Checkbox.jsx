import ErrorMessage from "@/components/Form/ErrorMessage";
import { Checkbox as BaseCheckbox, Grid2 as Grid } from "@mui/material";
import { Controller } from "react-hook-form";

const Checkbox = ({ className = "", control, ...props }) => {
  const { id, errors, children, disabled } = props;

  return (
    <Grid className={`${className}`}>
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
            <BaseCheckbox
              aria-label={children}
              inputRef={ref}
              checked={!!value}
              disableRipple
              {...field}
              {...props}
            />
            <span>{children}</span>
          </Grid>
        )}
      />
      {errors && <ErrorMessage text={errors.message} />}
    </Grid>
  );
};

export default Checkbox;
