import * as React from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import NavigationLink from "./NavigationLink";

export default function BasicMenu({ links, target, className }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={className}>
      <IconButton
        onClick={handleClick}
        className="bg-transparent text-multiBrown transition-all duration-500 hover:bg-multiBrown hover:text-multiGreen-xLight hover:shadow-multi"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
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
        className="menu mt-2"
      >
        {links.map((navLink, i) => {
          const { label, path } = navLink;
          return (
            <MenuItem
              key={i}
              onClick={handleClose}
              className="menuItem m-0 min-w-[100%] grow p-0"
            >
              <NavigationLink to={path} className="menuItem" target={target}>
                {label}
              </NavigationLink>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
