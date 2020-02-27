import LogLink from "./LogLink";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ErrorIcon from "@material-ui/icons/Error";
import WarningIcon from "@material-ui/icons/Warning";
import InfoIcon from "@material-ui/icons/Info";
import NatureIcon from "@material-ui/icons/Nature";
import { ListItemSecondaryAction, ListItemIcon } from "@material-ui/core";

const LogItem = ({ id, type = "", message, date }) => {
  const logDate = new Date(date);
  let Icon = null;
  let color = null;

  switch (type.toLowerCase()) {
    case "error":
      Icon = ErrorIcon;
      color = "red";
      break;
    case "warning":
      Icon = WarningIcon;
      color = "gold";
      break;
    case "info":
      Icon = InfoIcon;
      color = "lightblue";
      break;
    default:
      Icon = NatureIcon;
      color = "orange";
      break;
  }

  return (
    <ListItem>
      <ListItemIcon>
        <Icon style={{ color: color }} />
      </ListItemIcon>
      <ListItemText
        primary={`${type} - ${logDate.toLocaleDateString()} ${logDate.toLocaleTimeString()}`}
        secondary={message}
      />
      <ListItemSecondaryAction>
        <LogLink label="Details" id={id} />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default LogItem;
