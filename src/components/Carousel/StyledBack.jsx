import { ChevronLeft } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const StyledBack = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      className="!text-multi-green-light !bg-multi-black/50 hover:!bg-multi-green-light hover:!text-multi-brown !absolute !left-[10px] transition-all duration-500"
    >
      <ChevronLeft />
    </IconButton>
  );
};

export default StyledBack;
