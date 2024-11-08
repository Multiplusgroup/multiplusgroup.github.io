import NavigationButton from "@/components/Header/NavigationButton";
import { PROMO_LINKS as navLinks } from "@/constants/links";
import { Button, Grid2 as Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

const HeaderPromo = () => {
  return (
    <>
      <Grid container className="hidden justify-end gap-4 md:flex">
        {navLinks.map((navLink) => {
          const { label, path } = navLink;
          return (
            <Button
              to={path}
              key={path}
              LinkComponent={NavLink}
              target="_blank"
              className="button buttonCTA !max-h-[48px] hover:!bg-multiGreen-xLight/50"
            >
              {label}
            </Button>
          );
        })}
      </Grid>
      <NavigationButton
        links={navLinks}
        className="block md:hidden"
        target="_blank"
      />
    </>
  );
};

export default HeaderPromo;
