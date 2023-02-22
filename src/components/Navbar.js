import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import Stack from "@mui/material/Stack";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
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


  const closeNavbar = ()=>{
    setisopen(false);

  }

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
                    maxWidth: 250,
                    bgcolor: "background.paper",
                    mt: 10,
                    ml: 2,
                    mr: 4,
                  }}
                  aria-label="contacts"
                >
                  <ListItem>
                    <ListItemButton component= {NavLink} to ="/" onClick={closeNavbar}>
                      
                      <ListItemText primary="Home"
                      />
                    </ListItemButton>
                  </ListItem>

                  {state?<>
                    <ListItem >
                    <ListItemButton component={NavLink}
                        to="/dashboard"  onClick={closeNavbar}>
                      
                      <ListItemText primary="Dashboard"  />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton component={NavLink}
                        to="/logout"  onClick={closeNavbar}>
                      
                      <ListItemText primary="Logout" />
                    </ListItemButton>
                  </ListItem>
                  
                  </>:<>
                  <ListItem>
                    <ListItemButton  component={NavLink}
                        to="/login"  onClick={closeNavbar}>
                    
                      <ListItemText primary="Login" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton component={NavLink}
                        to="/registration"  onClick={closeNavbar}>
                      
                      <ListItemText primary="Registration"  />
                    </ListItemButton>
                  </ListItem>
                  
                  </>}
                  
                  
                  <ListItem>
                    <ListItemButton component={NavLink}
                        to="/contact"  onClick={closeNavbar}>
                     
                      <ListItemText primary="Contact"  />
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
                    <IconButton component = "a" href = "https://www.twitter.com/jaidnasim1">
                      <TwitterIcon fontSize="small"  />
                    </IconButton>
                    <IconButton  component = "a" href = "https://www.facebook.com/jaid.nasim.39">
                      <FacebookIcon fontSize="small" />
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
