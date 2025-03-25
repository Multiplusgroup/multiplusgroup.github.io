import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Grid2 as Grid,
} from "@mui/material";
import Heading from "@ui/Heading";
import { useState } from "react";
import { Link } from "react-router";

const AnimatedAccordion = ({
  title = "Entre o título",
  content = "Conteúdo",
  cotacaoURL,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Accordion className="!shadow-multi !rounded-lg">
      <AccordionSummary
        className={`!bg-multi-green-light !text-multi-brown !w-full !rounded-t-lg !px-6 hover:!shadow-none md:!py-1 ${!isExpanded && "!rounded-b-lg"}`}
        expandIcon={
          <ExpandMore
            className="bg-multi-brown text-multi-green-light !h-[35px] !w-[35px] rounded-full p-2"
            fontSize="20px"
          />
        }
        onClick={() => setIsExpanded((cur) => !cur)}
      >
        <Heading as="h4" className="!font-extrabold">
          {title}
        </Heading>
      </AccordionSummary>
      <Grid className="bg-multi-white rounded-b-lg">
        <AccordionDetails>{content}</AccordionDetails>
        <Divider className="bg-multi-brown/25 my-2" />
        {cotacaoURL && (
          <AccordionActions className="bg-multi-green-light !rounded-b-lg">
            <Button
              LinkComponent={Link}
              target="_blank"
              to={cotacaoURL}
              className="btn-cta"
            >
              Fazer cotação
            </Button>
          </AccordionActions>
        )}
      </Grid>
    </Accordion>
  );
};

export default AnimatedAccordion;
