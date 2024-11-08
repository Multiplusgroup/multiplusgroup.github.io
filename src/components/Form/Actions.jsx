import { Divider, Grid2 as Grid } from "@mui/material";

const Actions = ({ children, className = "" }) => {
  return (
    <Grid className={`formActions ${className}`}>
      <Divider className="mx-auto mb-4 bg-multiBrown/50" />
      <Grid className="formButtons">{children}</Grid>
    </Grid>
  );
};

export default Actions;
