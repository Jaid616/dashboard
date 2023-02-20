import React from "react";
import { Grid, Typography, Stack } from "@mui/material";
import personalphoto from "../images/personal.svg";

const Error = () => {
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
              Error{" "}
            </Typography>
            <Typography
              sx={{ fontWeight: "1000", fontSize: 25 }}
              variant="h5"
              color="initial"
            >
              404 page not found
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Error;
