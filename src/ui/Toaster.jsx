import { Alert, Snackbar } from "@mui/material";
import { setMessage } from "@store/slices/toaster.slice";
import { useDispatch, useSelector } from "react-redux";

const Toaster = () => {
  const { message, severity } = useSelector((state) => state.toaster);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setMessage({ message: "", severity: "success" }));
  };

  return (
    <>
      {message.length > 0 && (
        <Snackbar
          open={true}
          autoHideDuration={10000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={handleClose}
        >
          <Alert
            variant="filled"
            sx={{ width: "100%" }}
            severity={severity}
            className="flex items-center !rounded-full"
          >
            {message}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default Toaster;
