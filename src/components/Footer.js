import React from "react";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <>
      <Stack
        heigth="50px"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100px"
        style={{ backgroundColor: "#9c27b0", marginTop: "10px" }}
      >
        <Stack direction="row" spacing={1}>
          <IconButton aria-label="twitter" style={{ color: "#ffffff" }}  component = "a" href = "https://twitter.com/jaidnasim1">
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="facebook" style={{ color: "#ffffff" }}  component = "a" href = "https://www.facebook.com/jaid.nasim.39">
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="github" style={{ color: "#ffffff" }}  component = "a" href = "https://github.com/Jaid616">
            <GitHubIcon />
          </IconButton>
          <IconButton aria-label="linkedin" style={{ color: "#ffffff" }}  component = "a" href = "https://www.linkedin.com/in/jaid-nasim-148113240">
            <LinkedInIcon />
          </IconButton>
          <IconButton aria-label="instagram" style={{ color: "#ffffff" }}  component = "a" href = "https://www.instagram.com/jaidnasim">
            <InstagramIcon />
          </IconButton>
        </Stack>
        <Typography variant="subtitle2" color="#ffffff">
          © Jaid Nasim 2023
        </Typography>
      </Stack>
    </>
  );
};

export default Footer;
