import { NAV_LINKS } from "@constants/links";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Grid2 as Grid, IconButton, Menu, MenuItem } from "@mui/material";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

const Navbutton = ({ className = "" }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid className={className}>
      <IconButton
        onClick={handleOpen}
        className="!text-multi-brown hover:!bg-multi-brown hover:!text-multi-green-light hover:!shadow-multi !bg-transparent !transition-all !duration-500"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={open}
        onClose={handleClose}
        className="!mt-2"
      >
        {NAV_LINKS.map((navLink) => {
          const { label, to, hidden } = navLink;
          if (hidden) return null;
          return (
            <MenuItem
              key={to}
              onClick={handleClose}
              className={`menu-item m-0`}
            >
              <Link to={to} className="menuItem">
                {label}
              </Link>
            </MenuItem>
          );
        })}
      </Menu>
    </Grid>
  );
};

export default Navbutton;
