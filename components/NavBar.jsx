import Link from "next/link";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const Navbar = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/api/login">
            <a>Login</a>
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;
