import Card from "@components/Card";
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";
import { Link } from "@tanstack/react-router";

const CardSeguro = ({
  cotacaoURL,
  icon,
  title,
  content,
  link,
  mediaProps,
  buttonText,
  ...props
}) => {
  return (
    <Card
      className="card card-produto flex flex-col"
      width={400}
      header={
        <CardHeader
          className="flex w-full justify-center py-10"
          title={
            <span className="flex justify-center gap-10 text-center font-extrabold">
              {icon} {title}
            </span>
          }
        />
      }
      content={
        <CardContent className="text-multi-black bg-multi-white flex !grow items-center text-left">
          {content}
        </CardContent>
      }
      media={<CardMedia {...mediaProps} />}
      actions={
        <CardActions className="flex justify-around pb-6">
          {cotacaoURL && (
            <Button
              LinkComponent={Link}
              to={cotacaoURL}
              className="btn btn-cta"
            >
              Faça sua cotação agora!
            </Button>
          )}
          <Button className="btn btn-cta" LinkComponent={Link} to={link}>
            {buttonText}
          </Button>
        </CardActions>
      }
      {...props}
    />
  );
};

export default CardSeguro;
