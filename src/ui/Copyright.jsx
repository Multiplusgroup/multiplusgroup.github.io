import { Grid, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Copyright = () => {
  const date = new Date().getFullYear();
  return (
    <Grid container className="copyright gap-2 px-5">
      <Grid>
        <Divider className="divider inverted" />
      </Grid>
      <Grid item>
        <p>MultiplusGroup, atentendo você desde XXXX.</p>
        <span>
          &copy; Todos os direitos de criação reservados (2024 - {date}).
        </span>
        <p>
          Website desenvolvido por{" "}
          <Link
            className="pageLink"
            to={"https://github.com/vonschappler"}
            target="_blank"
          >
            Manoel Viturino
          </Link>
        </p>
      </Grid>
    </Grid>
  );
};

export default Copyright;
