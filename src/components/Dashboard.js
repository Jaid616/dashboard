import React, { useEffect, useState, useContext } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { BASE_URL } from "../constant";
import {
  TextField,
  Button,
  Stack,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import BadgeIcon from "@mui/icons-material/Badge";
import Alert from "@mui/material/Alert";
import PasswordIcon from "@mui/icons-material/Password";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
axios.defaults.withCredentials = true;
const Dashboard = () => {
  const { state, dispatch } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState("1");
  const [loading, setloading] = useState(true);
  const [isSubmit, setisSubmit] = useState(false);
  const [changePasswordDetails, setPasswordDetails] = useState({
    msg: "",
    status: "",
  });

  const [user, setuser] = useState({});
  const [inputValue, setinputValue] = useState({
    oldpassword: "",
    newpassword: "",
    cnewpassword: "",
  });
  const histroy = useNavigate();
  const sendRequest = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/dashboard`, {
        withCredentials: true,
      });
      let data = await res.data;
       console.log(data)
      if(data){
        setuser(data);
      setloading(false);
      }
      
      dispatch({ type: "USER", payload: true });
    } catch (err) {
      dispatch({ type: "USER", payload: false });
      console.log(err)
      // histroy("/login");
    }
  };

  const changePassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/changepassword`, {
        oldpassword: inputValue.oldpassword,
        newpassword: inputValue.newpassword,
        confirmnewpassword: inputValue.cnewpassword,
      });
      const data = await res.data;
      setPasswordDetails({
        msg: data.message,
        status: true,
      });
      setisSubmit(true);
    } catch (error) {
      console.log(error);
      setPasswordDetails({
        msg: error.response.data.message,
        status: false,
      });
      setisSubmit(true);
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

  const inputHandleChange = (e) => {
    if (e.target.name === "checkbox") {
      const checked = e.target.checked;
      if (checked) {
        setShowPassword(true);
      } else {
        setShowPassword(false);
      }
    } else {
      setinputValue({
        ...inputValue,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (loading) return <p>Loading.........</p>;
  return (
    <>
      <Box sx={{ width: "100%", typography: "body1", height: "75vh" }}>
        <TabContext value={value}>
          <Box sx={{ mt: "15px" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              centered
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab label="Profile" value="1" />
              <Tab label="Change Password" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Stack justifyContent="center" alignItems="center">
              <TextField
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <BadgeIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                id="name"
                label="Name"
                defaultValue={user.name}
                size="small"
                color="secondary"
                focused
                sx={{
                  width: 350,
                  m: 2,
                }}
              />
              <TextField
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <EmailIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: 350,
                  m: 2,
                }}
                id="email"
                color="secondary"
                focused
                label="Email"
                defaultValue={user.email}
                size="small"
              />
              <TextField
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <PhoneIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: 350,
                  m: 2,
                }}
                id="number"
                label="Number"
                defaultValue={user.number}
                size="small"
                color="secondary"
                focused
              />
            </Stack>
          </TabPanel>
          <form onSubmit={changePassword} method="POST">
            <TabPanel value="2">
              <Stack justifyContent="center" alignItems="center">
                {isSubmit ? (
                  <Alert
                    severity={
                      changePasswordDetails.status ? "success" : "error"
                    }
                    sx={{
                      mb: 2,
                    }}
                  >
                    {changePasswordDetails.msg}
                  </Alert>
                ) : null}

                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton>
                          <PasswordIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  id="password-input"
                  label="Old Password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  name="oldpassword"
                  onChange={inputHandleChange}
                  value={inputValue.oldpassword}
                  color="secondary"
                  focused
                  sx={{
                    width: 350,
                    m: 1,
                  }}
                />
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton>
                          <PasswordIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  id="new-password-input"
                  label="New Password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  name="newpassword"
                  value={inputValue.newpassword}
                  onChange={inputHandleChange}
                  color="secondary"
                  focused
                  sx={{
                    width: 350,
                    m: 1,
                  }}
                />
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton>
                          <PasswordIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  id="confirm-password-input"
                  label="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  name="cnewpassword"
                  value={inputValue.cnewpassword}
                  onChange={inputHandleChange}
                  autoComplete="current-password"
                  color="secondary"
                  focused
                  sx={{
                    width: 350,
                    m: 1,
                  }}
                />
                <Stack>
                  <FormControlLabel
                    value="end"
                    control={
                      <Checkbox
                        onChange={inputHandleChange}
                        inputProps={{ "aria-label": "controlled" }}
                        label="Show Password"
                        color="secondary"
                        name="checkbox"
                      />
                    }
                    label="Show Password"
                    style={{ marginRight: "164px" }}
                  />
                </Stack>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  sx={{
                    width: 350,
                    m: 1,
                  }}
                >
                  Change Password
                </Button>
              </Stack>
            </TabPanel>
          </form>
        </TabContext>
      </Box>
    </>
  );
};

export default Dashboard;
