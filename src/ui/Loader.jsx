import { CircularProgress, Dialog, DialogContent } from "@mui/material";
import Heading from "@ui/Heading";

const Loader = ({ text }) => {
  return (
    <Dialog className="modal spinner" open>
      <DialogContent className="flex grow flex-col items-center justify-center gap-5 justify-self-center">
        <CircularProgress />
        <Heading as="h4">{text}</Heading>
      </DialogContent>
    </Dialog>
  );
};

export default Loader;
