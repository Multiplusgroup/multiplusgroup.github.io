import ErrorMessage from "@components/Form/ErrorMessage";
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
            className={`!grid grid-cols-[auto_1fr] items-center py-1 pr-1 transition-all duration-500 ${disabled && "disabled"} ${errors && "error rounded-lg"}`}
            id={id}
          >
            <BaseCheckbox
              aria-label={children}
              checked={!!value}
              ref={ref}
              disableRipple
              className={`!text-multi-brown ${errors && "!text-red-700"}`}
              {...field}
              {...props}
            />
            <span
              className={`text-multi-brown font-title font-extrabold ${errors && "text-red-700"}`}
            >
              {children}
            </span>
          </Grid>
        )}
      />
      {errors && <ErrorMessage text={errors.message} />}
    </Grid>
  );
};

export default Checkbox;
