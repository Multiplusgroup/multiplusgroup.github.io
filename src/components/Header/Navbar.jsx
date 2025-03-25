import { NAV_LINKS } from "@constants/links";
import { Grid2 as Grid, Tab, Tabs } from "@mui/material";
import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ className = "" }) => {
  const { pathname } = useLocation();
  const [path, setPath] = useState(pathname);
  const ref = useRef(null);

  const handleChange = (path) => {
    setPath(path);
  };

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  return (
    <Grid className={className}>
      <Tabs value={path.startsWith("/seguros") ? "/seguros" : path}>
        {NAV_LINKS.map((link) => {
          const { label, to, hidden, hasToggle } = link;
          if (hidden) return null;
          return (
            <Tab
              key={to}
              to={to}
              label={label}
              onClick={() => handleChange(to)}
              value={to}
              LinkComponent={Link}
              ref={hasToggle ? ref : null}
              iconPosition="end"
            />
          );
        })}
      </Tabs>
    </Grid>
  );
};

export default Navbar;
