import { Divider, Grid2 as Grid } from "@mui/material";
import { Link } from "react-router-dom";

const date = new Date().getFullYear();

const Copyright = () => {
  return (
    <Grid container className="copyright gap-2 px-5">
      <Divider
        className="mx-auto w-[50%] bg-multiGreen-xLight/25"
        variant="middle"
      />
      <Grid>
        <p>Multiplusgroup &bull; {date}</p>
        <span>&copy; Direitos de criação e design reservados</span> &bull;{" "}
        <span>
          Website desenvolvido por{" "}
          <Link
            className="pageLink"
            to={"https://github.com/vonschappler"}
            target="_blank"
          >
            Manoel Viturino
          </Link>
        </span>
      </Grid>
    </Grid>
  );
};

export default Copyright;
