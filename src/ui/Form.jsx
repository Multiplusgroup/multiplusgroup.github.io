import { DevTool } from "@hookform/devtools";

const Form = ({ children, control, className = "", ...props }) => {
  return (
    <>
      <form className={className} {...props} noValidate>
        {children}
      </form>
      {import.meta.env.DEV && <DevTool control={control} />}
    </>
  );
};

export default Form;
