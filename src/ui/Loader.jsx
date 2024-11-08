import { Grid2 as Grid, Dialog, CircularProgress } from "@mui/material";

const Loader = ({ text }) => {
  return (
    <Dialog className="spinner modal" open>
      <Grid className="flex flex-col items-center gap-4 p-6">
        <Grid>
          <CircularProgress />
        </Grid>
        <Grid>{text && <p>{text}</p>}</Grid>
      </Grid>
    </Dialog>
  );
};

export default Loader;
