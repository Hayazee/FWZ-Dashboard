import React from "react";
import { Box, Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import {Typography} from "@material-ui/core";

function TopNavBar() {
  return (
    <>
      <Box color="white" fontWeight={500} className="TopBarBg" p={1}>
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Typography variant="body1">
                <i className="fa-solid fa-phone"></i> +1 (044) 123 456 789
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1">
                <i className="fa-regular fa-envelope"></i> info@travon.com 789
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">
                <i className="fa-solid fa-location-dot"></i> 9550 Bolsa Ave
                #126, United States
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1">
                <Link to="/login">
                  <i className="fa-regular fa-user"></i> Login / Register
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1">
                <Box display="flex">
                  Follow Us:
                  <Box ml={2}>
                    <i className="fa-brands fa-facebook-f"></i>
                  </Box>
                  <Box ml={2}>
                    <i className="fa-brands fa-twitter"></i>
                  </Box>
                  <Box ml={2}>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Box>
                  <Box ml={2}>
                    <i className="fa-brands fa-instagram"></i>
                  </Box>
                  <Box ml={2}>
                    <i className="fa-brands fa-whatsapp"></i>
                  </Box>
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
export default TopNavBar;
