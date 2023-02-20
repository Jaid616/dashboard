import { Stack, Typography, Button, Grid, TextField,Alert } from "@mui/material";
import React, { useState } from "react";
import contact_pic from "../images/contact_bg.svg";
import { BASE_URL } from "../constant";
import axios from "axios";

const Contact = () => {
  const [isSubmit , setisSubmit] = useState(false);
  const [responsemsg , setresponsemsg] = useState({
    msg:"",
    status:""
  });
  const [inputValue, setinputValue] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const onchangeInputHandler = (e) => {
    setinputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e)=>{
    e.preventDefault();
      try {
       let response=  await axios.post(`${BASE_URL}/sendmail`, {
          name:inputValue.name,
          email: inputValue.email,
          msg: inputValue.msg,
        });
         
        if(response){

          setresponsemsg({
            msg: response.data.message,
            status: true
          }
          )
        } 
          setisSubmit(true)

         
      } catch (error) {
          
          if(error)
         {

           setresponsemsg({
             msg : error.response.data.message,
             status:false
            })

           
           setisSubmit(true);
         }
        };
         
      }


  return (
    <>
      <Grid container spacing={3} style={{ height: "90vh" }}>
        <Grid item xs={12} sm={6} md={5}>
          <Stack
            justifyContent="center"
            alignItems="center"
            flexGrow={1}
            style={{ height: "70vh" }}
          >
            <Typography
              variant="h5"
              color="initial"
              style={{ fontWeight: "700", margin: "4rem" }}
            >
              Get In Touch
            </Typography>
            {isSubmit ? (
            <Alert
            severity={responsemsg.status ? "success" : "error"}
              sx={{
                mb: 2,
              }}
            >
              {responsemsg.msg || " "}
            </Alert>
          ) : null}
            <form style={{textAlign:"center"}} onSubmit = {submitForm} method="POST">

            <TextField
              id="outlined-name-input"
              label="Name"
              type="name"
              autoComplete="current-name"
              name="name"
              color="secondary"
              onChange={onchangeInputHandler}
              value={inputValue.name}
              sx={{
                width: 350,
                mb: 2,
                mt: 1,
              }}
              size="small"
              />
            <TextField
              id="outlined-email-input"
              label="Email"
              type="email"
              autoComplete="current-email"
              name="email"
              onChange={onchangeInputHandler}
              value={inputValue.email}
              color="secondary"
              sx={{
                width: 350,
                mb: 2,
                mt: 1,
              }}
              size="small"
            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              onChange={onchangeInputHandler}
              value={inputValue.msg}
              name="msg"
              multiline
              rows={4}
              color="secondary"
              sx={{
                width: 350,
                m: 1,
              }}
              />

            <Button
              variant="contained"
              type="submit"
              sx={{
                width: 350,
                m: 1,
              }}
              color="secondary"
              >
              
              Submit
            </Button>
        </form>
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
              backgroundImage: `url(${contact_pic})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            },
          }}
        ></Grid>
      </Grid>
    </>
  );
        }

export default Contact;
