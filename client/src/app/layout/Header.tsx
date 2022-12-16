import {
  AppBar,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";

interface Props {
  darkMode: boolean;
  handleChange: () => void;
}

function Header({ darkMode, handleChange }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">ReStore</Typography>
        <Switch
          checked={darkMode}
          onChange={handleChange}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
