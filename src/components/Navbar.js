import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import Stack from "@mui/material/Stack";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Box,
} from "@mui/material";
import { useState, useContext } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

function Navbar() {
  const ismobile = useMediaQuery("(min-width:600px)");
  const { state, dispatch } = useContext(UserContext);
  const [isopen, setisopen] = useState(false);

  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          {ismobile ? (
            <>
              <Stack direction="row" flexGrow={1}>
                <Box
                  component="img"
                  sx={{
                    height: 60,
                  }}
                  alt="Your logo."
                  src={Logo}
                />
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="end"
                  flexGrow={1}
                >
                  <Button
                    component={NavLink}
                    to="/"
                    variant="text"
                    style={{ color: "#fff" }}
                  >
                    Home
                  </Button>
                  {state ? (
                    <>
                      {" "}
                      <Button
                        component={NavLink}
                        to="/dashboard"
                        variant="text"
                        style={{ color: "#fff" }}
                      >
                        Profile
                      </Button>
                      <Button
                        component={NavLink}
                        to="/logout"
                        variant="text"
                        style={{ color: "#fff" }}
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        component={NavLink}
                        to="/login"
                        variant="text"
                        style={{ color: "#fff" }}
                      >
                        Login
                      </Button>
                      <Button
                        component={NavLink}
                        to="/registration"
                        variant="text"
                        style={{ color: "#fff" }}
                      >
                        Registration
                      </Button>
                    </>
                  )}
                  <Button
                    component={NavLink}
                    to="/contact"
                    variant="text"
                    style={{ color: "#fff" }}
                  >
                    Contact
                  </Button>
                </Stack>
              </Stack>
            </>
          ) : (
            <>
              
              <MenuIcon
                onClick={() => {
                  setisopen(true);
                }}
              />
              <Box
                component="img"
                sx={{
                  height: 60,
                }}
                alt="Your logo."
                src={Logo}
              />
              <Drawer
                anchor="left"
                open={isopen}
                onClose={() => {
                  setisopen(false);
                }}
              >
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 200,
                    bgcolor: "background.paper",
                    mt: 10,
                    ml: 2,
                    mr: 4,
                  }}
                  aria-label="contacts"
                >
                  <ListItem>
                    <ListItemButton>
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary="Home"  component={NavLink}
                        to="/"/>
                    </ListItemButton>
                  </ListItem>

                  {state?<>
                    <ListItem>
                    <ListItemButton>
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary="Dashboard" component={NavLink}
                        to="/dashboard" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary="Logout" component={NavLink}
                        to="/logout"/>
                    </ListItemButton>
                  </ListItem>
                  
                  </>:<>
                  <ListItem>
                    <ListItemButton>
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary="Login" component={NavLink}
                        to="/login" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary="Registration" component={NavLink}
                        to="/registration" />
                    </ListItemButton>
                  </ListItem>
                  
                  </>}
                  
                  
                  <ListItem>
                    <ListItemButton>
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary="Contact" component={NavLink}
                        to="/contact" />
                    </ListItemButton>
                  </ListItem>
                </List>

                <Stack justifyContent="flex-end" style={{ height: "70%" }}>
                  <Stack justifyContent="center" alignItems="center">
                    <Typography variant="subtitle2" color="initial">
                      Share on Us
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <IconButton>
                      <HomeIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                      <HomeIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </Stack>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
