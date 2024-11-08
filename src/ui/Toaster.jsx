import { useSelector, useDispatch } from "react-redux";
import { Snackbar, Alert } from "@mui/material";
import {
  resetFormData,
  resetToasterMessage,
} from "@/features/emails/emails.slice";

const Toaster = ({ className = "", ...props }) => {
  const { alertOpen, message, error, success } = useSelector(
    (state) => state.emails,
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(resetToasterMessage());
    success && dispatch(resetFormData());
  };

  return (
    <>
      {message.length > 0 && (
        <Snackbar
          open={alertOpen && true}
          autoHideDuration={10000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={handleClose}
        >
          <Alert
            variant="filled"
            sx={{ width: "100%" }}
            className={`alert solid ${className}`}
            severity={error ? "error" : "success"}
            {...props}
          >
            {message}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default Toaster;
