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

const SeguroExpander = ({ item }) => {
  const { titulo, detalhe, cotacaoURL } = item;
  return (
    <Accordion
      className="!rounded-none bg-transparent shadow-multi"
      disableGutters
    >
      <AccordionSummary
        className="bg-multiGreen-xLight px-6 py-2 font-title text-xl font-extrabold text-multiBrown md:text-3xl"
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

export default SeguroExpander;
