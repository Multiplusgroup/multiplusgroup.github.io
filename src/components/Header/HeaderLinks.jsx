import NavigationButton from "@/components/header/NavigationButton";
import { NAV_LINKS as navLinks } from "@/constants/links";
import { root } from "@/constants/pageElements";
import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const HeaderLinks = ({ ...props }) => {
  const { pathname } = useLocation();
  const [path, setPath] = useState(pathname);

  const handleChangePath = (value) => setPath(value);

  useEffect(() => {
    if (path === pathname) root.scrollTop = 0;
  }, [pathname, path]);

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
          const { label, path, mainPath, hidden } = navLink;
          return (
            <Tab
              to={path}
              key={path}
              LinkComponent={NavLink}
              label={label}
              value={path}
              className={`navItem !max-h-[48px] ${hidden && "hidden"}`}
              onClick={() => handleChangePath(mainPath)}
            />
          );
        })}
      </Tabs>
      <NavigationButton className="block lg:hidden" links={navLinks} />
    </>
  );
};

export default HeaderLinks;
