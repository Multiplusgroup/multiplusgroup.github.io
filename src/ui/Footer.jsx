import Copyright from "@components/Footer/Copyright";
import LogoFooter from "@components/Footer/LogoFooter";
import { NAV_LINKS } from "@constants/links";
import { Grid2 as Grid } from "@mui/material";
import AnimatedFooter from "@ui/AnimatedFooter";
import Heading from "@ui/Heading";

import { Link } from "@tanstack/react-router";

const Footer = () => {
  return (
    <AnimatedFooter>
      <Grid className="flex w-full flex-col items-center justify-around gap-5 text-center md:flex-row md:items-start md:justify-center md:gap-20 md:text-left lg:gap-40">
        <LogoFooter />
        <Grid className="text-sm">
          <Heading
            as="h4"
            className="pb-5 !text-[1rem] leading-loose uppercase"
          >
            Endereço
          </Heading>
          <p>Q. 07, Etapa A </p>
          <p>Lote 17 - SOBRELOJA</p>
          <p>72876-021</p>
          <p>Valparaízo de Goiás/GO</p>
        </Grid>
        <Grid className="text-sm">
          <Heading
            as="h4"
            className="pb-5 !text-[1rem] leading-loose uppercase"
          >
            E-mail e telefone
          </Heading>
          <p>email1@email.com</p>
          <p>email2@email.com</p>
          <p>(61) XXXX-XXXX</p>
          <p>(61) XXXX-XXXX</p>
        </Grid>
        <Grid className="text-sm">
          <Heading
            as="h4"
            className="pb-5 !text-[1rem] leading-loose uppercase"
          >
            Acesso rápido
          </Heading>
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => {
              const { label, to } = link;
              if (label !== "Test Route")
                return (
                  <Link to={to} key={to}>
                    {label}
                  </Link>
                );
            })}
          </nav>
        </Grid>
      </Grid>
      <Copyright />
    </AnimatedFooter>
  );
};

export default Footer;
