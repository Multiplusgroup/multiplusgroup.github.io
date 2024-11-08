import { Card as BaseCard } from "@mui/material";

const Card = ({
  height,
  width = 600,
  className = "",
  header,
  content,
  media,
  actions,
  collapse,
  ...props
}) => {
  return (
    <BaseCard
      className={`card m-0 mx-auto rounded-lg p-0 ${className}`}
      sx={{
        maxHeight: `${height && `${height}px`}`,
        maxWidth: `${width}px !important`,
        height: `${!height && "100%"}`,
      }}
      {...props}
    >
      {header && header}
      {media && media}
      {content && content}
      {actions && actions}
      {collapse && collapse}
    </BaseCard>
  );
};

export default Card;
