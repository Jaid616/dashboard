import React, { useEffect, useContext } from "react";
import { Grid, Typography, Stack } from "@mui/material";
import personalphoto from "../images/personal.svg";
import axios from "axios";
import { UserContext } from "../App";
import { BASE_URL } from "../constant";
const Home = () => {
  const { _, dispatch } = useContext(UserContext);

  const sendRequest = async () => {
    try {
      await axios.get(`${BASE_URL}/auth`);

      dispatch({ type: "USER", payload: true });
    } catch (err) {
      dispatch({ type: "USER", payload: false });
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);
  return (
    <>
      <Grid container spacing={1} style={{ height: "90vh", marginTop: "10px" }}>
        <Grid
          item
          sm={12}
          md={12}
          xs={12}
          sx={{
            display: {
              backgroundImage: `url(${personalphoto})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            },
          }}
        >
          <Stack
            justifyContent="center"
            alignItems="center"
            style={{ height: "90vh", width: "100%" }}
          >
            <Typography
              sx={{ fontWeight: "bold", fontSize: 14 }}
              variant="subtitle2"
              color="secondary"
            >
              Welcome{" "}
            </Typography>
            <Typography
              sx={{ fontWeight: "1000", fontSize: 25 }}
              variant="h5"
              color="initial"
            >
              We Are The Mern Developer
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
