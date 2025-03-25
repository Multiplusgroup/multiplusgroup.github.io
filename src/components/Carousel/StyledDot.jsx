import { Circle } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const StyledDot = ({ onClick, active }) => {
  return (
    <IconButton
      onClick={(e) => {
        onClick();
        e.preventDefault();
      }}
      className={`border-multi-black !text-multi-black/25 h-[3px] w-[3px] rounded-full !border !transition-colors !duration-500 ${active && "!border-multi-brown !text-multi-brown"}`}
    >
      <Circle className={`!text-xs`} />
    </IconButton>
  );
};

export default StyledDot;
