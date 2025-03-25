import {
  Avatar,
  List as BaseList,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const List = ({ className = "", items, ...props }) => {
  return (
    <BaseList className={className} {...props}>
      {items.map((item, i) => {
        const { avatar, titulo, texto } = item;
        return (
          <ListItem key={i}>
            {avatar && (
              <ListItemAvatar>
                <Avatar>{avatar}</Avatar>
              </ListItemAvatar>
            )}
            <ListItemText primary={titulo} secondary={texto} />
          </ListItem>
        );
      })}
    </BaseList>
  );
};

export default List;
