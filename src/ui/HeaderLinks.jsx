import { Button } from "@mui/material";

import { forwardRef, useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Tabs as BaseTabs, Tab } from "@mui/material";

import NavigationButton from "./NavigationButton";

import { NAV_LINKS as navLinks } from "../siteConstants/links";

const Tabs = forwardRef((props, ref) => {
  return <BaseTabs ref={ref} {...props} />;
});

Tabs.displayName = "Tabs";

const HeaderLinks = ({ ...props }) => {
  const { pathname } = useLocation();
  const [path, setPath] = useState(pathname);
  const handleChangePath = (value) => setPath(value);
  useEffect(() => {
    setPath(pathname);
  }, [pathname]);
  return (
    <>
      <Tabs
        value={path}
        variant="scrollable"
        {...props}
        allowScrollButtonsMobile
        className="hidden lg:block"
      >
        {navLinks.map((navLink) => {
          const { label, path } = navLink;
          return (
            <Tab
              to={path}
              key={path}
              LinkComponent={NavLink}
              label={label}
              value={path}
              className="navItem !max-h-[48px] "
              onClick={() => handleChangePath(path)}
            />
          );
        })}
      </Tabs>
      <NavigationButton className="block lg:hidden" links={navLinks} />
    </>
  );
};

export default HeaderLinks;
