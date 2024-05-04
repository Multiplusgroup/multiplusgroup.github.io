import { Box, Grid, Divider } from "@mui/material";

const FormActions = ({ children, className = "" }) => {
  return (
    <Box className={`formActions ${className}`}>
      <Divider variant="full" className="my-5   bg-multiBrown/25" />
      <Grid container className="formButtons">
        {children}
      </Grid>
    </Box>
  );
};

export default FormActions;
