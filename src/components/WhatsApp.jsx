import { WhatsApp } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { Link } from "react-router-dom";

const WhatsAppButton = () => {
  return (
    <Fab
      className="fixed bottom-[15px] right-[15px] bg-multiGreen-dark text-multiGray-light transition-all duration-500 hover:bg-multiGreen-xLight hover:font-bold hover:text-multiBrown"
      LinkComponent={Link}
      to="https://wa.me/556183113891"
      target="_blank"
    >
      <WhatsApp />
    </Fab>
  );
};

export default WhatsAppButton;
