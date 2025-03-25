import { WhatsApp } from "@mui/icons-material";
import { Button, Grid2 as Grid, IconButton } from "@mui/material";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const WhatsAppButton = () => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const button = ref.current;
    const handleMouseEnter = () => {
      return setIsHovered(true);
    };
    const handleMouseLeave = () => {
      return setIsHovered(false);
    };
    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseenter", handleMouseLeave);
    };
  }, [isHovered]);

  return (
    <Grid
      className={`fixed bottom-[10px] z-10 flex w-[40px] rounded-r-full ${isHovered && "shadow-multi w-fit transition-all delay-[350ms]"}`}
      ref={ref}
    >
      <IconButton
        className={`whatsapp z-0 ${isHovered && "!rounded-none"}`}
        LinkComponent={Link}
        to="https://wa.me/message/VGMGOFEQJQ5HC1"
        target="_blank"
      >
        <WhatsApp />
      </IconButton>
      <Button
        className={`whatsapp -z-[1] flex translate-x-[-150px] flex-col !items-start !border-none opacity-0 ${isHovered && "z-0 translate-x-[0px] !scale-x-100 !rounded-r-full !pr-[1.5rem] !opacity-100"}`}
        LinkComponent={Link}
        to="https://wa.me/message/VGMGOFEQJQ5HC1"
        target="_blank"
      >
        {isHovered && (
          <>
            <p className="!text-xs">Atendimento por</p>
            <p className="text-xl">WhatsApp</p>
          </>
        )}
      </Button>
    </Grid>
  );
};

export default WhatsAppButton;
