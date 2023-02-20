import {
  Stack,
  Typography,
  Button,
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Alert,
} from "@mui/material";

import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import pic from "../images/background.svg";
import { SignUpValidate } from "../Validate";
import { NavLink } from "react-router-dom";
import { BASE_URL } from "../constant";

const Signup = () => {
  const histroy = useNavigate();
  const { _, dispatch } = useContext(UserContext);
  const [errordata, seterrordata] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmit, setisSubmit] = useState(false);
  const [changePasswordDetails, setPasswordDetails] = useState({
    msg: "",
    status: "",
  });
  const [inputValue, setinputValue] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirm_password: "",
  });

  const getLoginDetails = async () => {
    try {
      await axios.get(`${BASE_URL}/auth`);
      histroy("/dashboard");
    } catch (err) {
      histroy("/registration");
    }
  };

  useEffect(() => {
    getLoginDetails();
  }, []);

  const onChangeInputHandle = (e) => {
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
  const sendData = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/api/user/registraion`,
        {
          name: inputValue.name,
          email: inputValue.email,
          number: inputValue.number,
          password: inputValue.password,
          confirmpassword: inputValue.confirm_password,
        }
      );
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
  const submitForm = async (e) => {
    let ErrorHandle = SignUpValidate(inputValue);

    seterrordata(ErrorHandle);
    if (Object.keys(ErrorHandle).length < 1) {
      await sendData();
    }
  };

  return (
    <Grid container spacing={1} style={{ height: "90vh" }}>
      <Grid item xs={12} sm={6} md={5}>
        <Stack
          justifyContent="center"
          alignItems="center"
          flexGrow={1}
          style={{ height: "90vh" }}
        >
          <Typography
            variant="h5"
            color="initial"
            style={{ fontWeight: "700" }}
          >
            Welcome Back
          </Typography>

          <Typography
            variant="subtitle2"
            color="initial"
            sx={{
              mb: 4,
            }}
          >
            Sub-title goes here
          </Typography>

          {isSubmit ? (
            <Alert
              severity={changePasswordDetails.status ? "success" : "error"}
              sx={{
                mb: 2,
              }}
            >
              {changePasswordDetails.msg}{" "}
              {changePasswordDetails.status ? (
                <NavLink to="/login">
                  <span> Go to Login</span>{" "}
                </NavLink>
              ) : null}
            </Alert>
          ) : null}

          <TextField
            error={errordata.nameError ? true : false}
            id="outlined-name"
            label="Name"
            type="name"
            autoComplete="current-name"
            name="name"
            value={inputValue.name}
            onChange={onChangeInputHandle}
            helperText={errordata.nameError}
            color="secondary"
            sx={{
              width: 350,
              mb: 2,
              mt: 1,
            }}
            size="small"
          />
          <TextField
            error={errordata.emailError ? true : false}
            id="outlined-email"
            label="Email"
            type="email"
            autoComplete="current-email"
            name="email"
            value={inputValue.email}
            onChange={onChangeInputHandle}
            helperText={errordata.emailError}
            color="secondary"
            sx={{
              width: 350,
              mb: 2,
              mt: 1,
            }}
            size="small"
          />

          <TextField
            error={errordata.numberError ? true : false}
            id="outlined-number"
            label="Number"
            type="number"
            name="number"
            value={inputValue.number}
            onChange={onChangeInputHandle}
            color="secondary"
            helperText={errordata.numberError}
            autoComplete="current-number"
            sx={{
              width: 350,
              mb: 2,
              mt: 1,
            }}
            size="small"
          />

          <TextField
            error={errordata.passwordError ? true : false}
            id="outlined-password"
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={inputValue.password}
            onChange={onChangeInputHandle}
            autoComplete="current_password"
            color="secondary"
            helperText={errordata.passwordError}
            sx={{
              width: 350,
              mb: 2,
              mt: 1,
            }}
            size="small"
          />
          <TextField
            error={errordata.confirm_passwordError ? true : false}
            id="outlined-confirmed-password"
            label="Confirmed Password"
            type={showPassword ? "text" : "password"}
            name="confirm_password"
            value={inputValue.confirm_password}
            onChange={onChangeInputHandle}
            color="secondary"
            autoComplete="confiremed-password"
            helperText={errordata.confirm_passwordError}
            sx={{
              width: 350,
              mb: 2,
              mt: 1,
            }}
            size="small"
          />
          <Stack>
            <FormControlLabel
              value="end"
              control={
                <Checkbox
                  // checked
                  onChange={onChangeInputHandle}
                  inputProps={{ "aria-label": "controlled" }}
                  label="Show Password"
                  color="secondary"
                  name="checkbox"
                />
              }
              label="Show Password"
              style={{ marginRight: "220px", marginBottom: "10px" }}
              sx={{ "& .MuiTypography-root": { fontSize: 13 } }}
            />
          </Stack>

          <Button
            variant="contained"
            sx={{
              width: 350,
              mb: 2,
            }}
            color="secondary"
            onClick={submitForm}
          >
            SignUp
          </Button>
        </Stack>
      </Grid>

      <Grid
        item
        sm={6}
        md={5}
        sx={{
          display: {
            sm: "block",
            xs: "none",
            backgroundImage: `url(${pic})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          },
        }}
      ></Grid>
    </Grid>
  );
};

export default Signup;
