import {
  Stack,
  Typography,
  Button,
  Grid,
  TextField,
  Alert,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import pic from "../images/background.svg";
import { LoginValidate } from "../Validate";
import { UserContext } from "../App";
import { BASE_URL } from "../constant";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const histroy = useNavigate();
  const [errordata, seterrordata] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const [changePasswordDetails, setPasswordDetails] = useState({
    msg: "",
    status: "",
  });
  const [inputValue, setinputValue] = useState({
    email: "",
    password: "",
  });

  const getLoginDetails = async () => {


    try {
      await axios.get(`${BASE_URL}/auth`,{
        withCredentials: true,
      });

      histroy("/dashboard");
    } catch (err) {
      histroy("/login");
    }
  };

  useEffect(() => {
    getLoginDetails();
  }, []);

  const sendRequest = async () => {
    try {

     await axios.post(`${BASE_URL}/api/user/login`,
       {
       
        email: inputValue.email,
        password: inputValue.password,
      },
                       {
     withCredentials: true,
     });
      

      dispatch({ type: "USER", payload: true });
      histroy("/dashboard");
    } catch (error) {
      console.log(error)
      setPasswordDetails({

        msg: error.response.data.message,
        status: "error",
      });
      setisSubmit(true);
    }
  };

  const submitForm = async (e) => {
    let ErrorHandle = LoginValidate(inputValue);

    seterrordata(ErrorHandle);
    if (Object.keys(ErrorHandle).length < 1) {
      await sendRequest();
    }
  };

  const onchangeInputHandler = (e) => {
    setinputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Grid container spacing={0} style={{ height: "90vh" }}>
      <Grid item xs={12} sm={6} md={5}>
        <Stack
          justifyContent="center"
          alignItems="center"
          flexGrow={1}
          style={{ height: "80vh" }}
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
              severity="error"
              sx={{
                mb: 2,
              }}
            >
              {changePasswordDetails.msg}
            </Alert>
          ) : null}
          <TextField
            color="secondary"
            error={errordata.emailError ? true : false}
            id="email-input"
            label="Email"
            type="Email"
            autoComplete="current-email"
            size="small"
            name="email"
            helperText={errordata.emailError}
            onChange={onchangeInputHandler}
            value={inputValue.email}
            sx={{
              width: 350,
              m: 1,
            }}
            // fullWidth
          />

          <TextField
            error={errordata.passwordError ? true : false}
            color="secondary"
            id="-password-input"
            label="Password"
            type="password"
            name="password"
            value={inputValue.password}
            helperText={errordata.passwordError}
            onChange={onchangeInputHandler}
            autoComplete="current-password"
            size="small"
            sx={{
              width: 350,
              m: 1,
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{
              width: 350,
              m: 1,
            }}
            onClick={submitForm}
          >
            Login
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

export default Login;
