import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid2 as Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

const SeguroDetalhe = ({
  open,
  handleToggle,
  content,
  title,
  icon,
  redirectTo,
}) => {
  const handleClose = () => {
    handleToggle();
  };
  const ref = useRef(null);

  return (
    <Dialog
      open={open}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      className="modal article"
      onClose={handleClose}
    >
      <DialogTitle
        className="articleTitle shadow-multi"
        id="scroll-dialog-title"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          key={`${title}`}
        >
          <Grid container className="center flex flex-col gap-4">
            <Grid className="text-center font-title text-5xl font-bold">
              <span className="flex flex-col items-center justify-center gap-7 pt-7 md:flex-row">
                {icon}
                {title}
              </span>
            </Grid>
            <Grid>
              <Divider className="divider inverted" />
            </Grid>
          </Grid>
        </motion.div>
      </DialogTitle>

      <DialogContent
        ref={ref}
        tabIndex={-1}
        id="modalContent"
        className="articleContent !text-multiGray-dark"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          key={`articleContent`}
        >
          {content}
        </motion.div>
      </DialogContent>
      <DialogActions className="m-0 p-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          key={`articleContent`}
          className="flex w-full flex-col"
        >
          <Grid className="flex items-center justify-end gap-5 bg-multiGreen-xLight px-6 py-3 shadow-multi transition-all duration-700">
            <Button onClick={handleClose} className="button">
              Ver outras opções de seguro
            </Button>
            <Button
              to={redirectTo}
              LinkComponent={NavLink}
              target="_blank"
              className="button inverted"
            >
              Fazer cotação
            </Button>
          </Grid>
        </motion.div>
      </DialogActions>
    </Dialog>
  );
};

export default SeguroDetalhe;
