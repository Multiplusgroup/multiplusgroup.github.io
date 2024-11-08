import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";

const Expander = ({ item }) => {
  const { titulo, detalhe, cotacaoURL } = item;
  return (
    <Accordion className="bg-transparent shadow-none" disableGutters>
      <AccordionSummary
        className="bg-multiGreen-xLight font-title text-2xl font-extrabold text-multiBrown"
        expandIcon={
          <IconButton className="button rounded-full shadow-none hover:bg-multiBrown hover:text-multiGreen-xLight">
            <ExpandMore />
          </IconButton>
        }
      >
        {titulo}
      </AccordionSummary>
      <AccordionDetails>{detalhe}</AccordionDetails>
      <Divider className="my-2 bg-multiBrown/25" />
      <AccordionActions>
        <Button
          className="button"
          LinkComponent={Link}
          target="_blank"
          to={cotacaoURL}
        >
          Fazer cotação
        </Button>
      </AccordionActions>
    </Accordion>
  );
};

export default Expander;
