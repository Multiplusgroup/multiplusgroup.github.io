import { Grid2 as Grid } from "@mui/material";
import { Link } from "@tanstack/react-router";

const date = new Date().getFullYear();

const Copyright = () => {
  return (
    <Grid className="copyright">
      <span>
        <Link to="https://github.com/vonschappler" target="_blank">
          Manoel Viturino
        </Link>{" "}
        - Criando websites desde 2010
      </span>
      <span>&copy; 2024 - {date}</span>
    </Grid>
  );
};

export default Copyright;
