import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import ImageElm from "../../components/utils/ImageElm";
import LogoImg from "/logo.svg";
import LogOutIcon from "@mui/icons-material/ExitToApp";
import authService from "../../appwrite/auth";

export default function TopBar({ openModal }) {
  async function handleLogout() {
    const res = await authService.logout();
    console.log("TopBar.jsx::res > ", res);
  }

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <ImageElm sx={{ height: "25px" }} src={LogoImg} alt="FlowBoard logo" />
        <Stack direction="row" spacing={1}>
          <Button variant="contained" onClick={openModal}>
            Create Board
          </Button>
          <Button
            variant="text"
            color="inherit"
            startIcon={<LogOutIcon />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
