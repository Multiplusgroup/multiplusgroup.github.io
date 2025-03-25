import { ChevronRight } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const StyledNext = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      className="!text-multi-green-light !bg-multi-black/50 hover:!bg-multi-green-light hover:!text-multi-brown !absolute !right-[10px] transition-all duration-500"
    >
      <ChevronRight />
    </IconButton>
  );
};

export default StyledNext;
