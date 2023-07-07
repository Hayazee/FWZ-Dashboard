import React from "react";
import { Box } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import FWZLogo from "../images/Navbar & Footer/Footer/FWZ_logo.svg";
import { Container } from "@mui/material";
import GalleryImg1 from "../images/Navbar & Footer/Footer/Gallery/GalleryImg1.jpg";
import GalleryImg2 from "../images/Navbar & Footer/Footer/Gallery/GalleryImg2.jpg";
import GalleryImg3 from "../images/Navbar & Footer/Footer/Gallery/GalleryImg3.jpg";
import GalleryImg4 from "../images/Navbar & Footer/Footer/Gallery/GalleryImg4.jpg";
import GalleryImg5 from "../images/Navbar & Footer/Footer/Gallery/GalleryImg5.jpg";
import GalleryImg6 from "../images/Navbar & Footer/Footer/Gallery/GalleryImg6.jpg";
import Copyright from "./Copyright";
import SignUpModel from "./SignUpModel";

const footer = () => {
  return (
    <>
      <Box position="relative" mt={22}>
        {/* Footer Top Section */}
        <SignUpModel />

        {/* Footer Bottom Section */}
        <Box bgcolor="#161921" pt="15%" pb="10%" color="white">
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <img src={FWZLogo} alt="Fly WIth Zoki Logo Of Footer" />
                <Box mt={3}>
                  <Typography variant="h6" className="zokiParagraph">
                    Globally communicate adaptive e-markets & timely
                    manufactured product. Objectively exploit collaborative
                    relationships vis-a-vis competitive manufactured.
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Grid container spacing={2}>
                    <Grid item xs={2}>
                      <Box
                        borderRadius={50}
                        bgcolor="#7A7A7A"
                        display="flex"
                        fontWeight="600"
                        color="white"
                        alignItems="center"
                        width={40}
                        height={40}
                        justifyContent="center"
                        sx={{
                          cursor: "pointer",
                          transition: "background-color 0.3s ease",
                          "&:hover": {
                            backgroundColor: "#3cb371",
                          },
                        }}
                      >
                        R
                      </Box>
                    </Grid>
                    <Grid item xs={2}>
                      <Box
                        borderRadius={50}
                        bgcolor="#7A7A7A"
                        display="flex"
                        fontWeight="600"
                        color="white"
                        alignItems="center"
                        width={40}
                        height={40}
                        justifyContent="center"
                        sx={{
                          cursor: "pointer",
                          transition: "background-color 0.3s ease",
                          "&:hover": {
                            backgroundColor: "#3cb371",
                          },
                        }}
                      >
                        R
                      </Box>
                    </Grid>
                    <Grid item xs={2}>
                      <Box
                        borderRadius={50}
                        bgcolor="#7A7A7A"
                        display="flex"
                        fontWeight="600"
                        color="white"
                        alignItems="center"
                        width={40}
                        height={40}
                        justifyContent="center"
                        sx={{
                          cursor: "pointer",
                          transition: "background-color 0.3s ease",
                          "&:hover": {
                            backgroundColor: "#3cb371",
                          },
                        }}
                      >
                        R
                      </Box>
                    </Grid>
                    <Grid item xs={2}>
                      <Box
                        borderRadius={50}
                        bgcolor="#7A7A7A"
                        display="flex"
                        fontWeight="600"
                        color="white"
                        alignItems="center"
                        width={40}
                        height={40}
                        justifyContent="center"
                        sx={{
                          cursor: "pointer",
                          transition: "background-color 0.3s ease",
                          "&:hover": {
                            backgroundColor: "#3cb371",
                          },
                        }}
                      >
                        R
                      </Box>
                    </Grid>
                    <Grid item xs={2}>
                      <Box
                        borderRadius={50}
                        bgcolor="#7A7A7A"
                        display="flex"
                        fontWeight="600"
                        color="white"
                        alignItems="center"
                        width={40}
                        height={40}
                        justifyContent="center"
                        sx={{
                          cursor: "pointer",
                          transition: "background-color 0.3s ease",
                          "&:hover": {
                            backgroundColor: "#3cb371",
                          },
                        }}
                      >
                        R
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6" className="zokiHeadings">
                  Quick Links
                  <Box display="felx">
                    <Box display="flex" alignItems="center">
                      <hr
                        style={{
                          width: "50px",
                          borderColor: "#3cb371",
                          margin: 0,
                        }}
                      />
                      <hr
                        style={{
                          width: "10px",
                          borderColor: "#3cb371",
                          marginLeft: "5px",
                        }}
                      />
                    </Box>
                  </Box>
                </Typography>
                <Box mt={3}>
                  <Box mb={1}>
                    <Typography variant="h6" className="zokiParagraph">
                      <i className="fa-solid fa-arrow-right"></i> About
                    </Typography>
                  </Box>
                  <Box mb={1}>
                    <Typography variant="h6" className="zokiParagraph">
                      <i className="fa-solid fa-arrow-right"></i> Trips
                    </Typography>
                  </Box>
                  <Box mb={1}>
                    <Typography variant="h6" className="zokiParagraph">
                      <i className="fa-solid fa-arrow-right"></i> Blog
                    </Typography>
                  </Box>
                  <Box mb={1}>
                    <Typography variant="h6" className="zokiParagraph">
                      <i className="fa-solid fa-arrow-right"></i> Contact Us
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6" className="zokiHeadings">
                  Contact Us
                  <Box display="felx">
                    <Box display="flex" alignItems="center">
                      <hr
                        style={{
                          width: "50px",
                          borderColor: "#3cb371",
                          margin: 0,
                        }}
                      />
                      <hr
                        style={{
                          width: "10px",
                          borderColor: "#3cb371",
                          marginLeft: "5px",
                        }}
                      />
                    </Box>
                    <Box mt={3}>
                      <Box display="flex" alignItems="center" mb={2}>
                        <Typography variant="h6" className="zokiParagraph">
                          <Box display="flex" alignItems="center">
                            <Box
                              borderRadius={5}
                              bgcolor="#3cb371"
                              color="white"
                              width={20}
                              height={20}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              fontSize={12}
                              marginRight={1}
                            >
                              <i className="fa-solid fa-location-dot"></i>
                            </Box>
                            Location
                          </Box>
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" mb={2}>
                        <Typography variant="h6" className="zokiParagraph">
                          <Box display="flex" alignItems="center">
                            <Box
                              borderRadius={5}
                              bgcolor="#3cb371"
                              color="white"
                              width={20}
                              height={20}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              fontSize={12}
                              marginRight={1}
                            >
                              <i className="fa-solid fa-phone"></i>
                            </Box>
                            Numbers
                          </Box>
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" mb={2}>
                        <Typography variant="h6" className="zokiParagraph">
                          <Box display="flex" alignItems="center">
                            <Box
                              borderRadius={5}
                              bgcolor="#3cb371"
                              color="white"
                              width={20}
                              height={20}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              fontSize={12}
                              marginRight={1}
                            >
                              <i className="fa-solid fa-envelope"></i>
                            </Box>
                            E-mail
                          </Box>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6" className="zokiHeadings">
                  Gallery Showcase
                  <Box display="flex" alignItems="center">
                    <hr
                      style={{
                        width: "50px",
                        borderColor: "#3cb371",
                        margin: 0,
                      }}
                    />
                    <hr
                      style={{
                        width: "10px",
                        borderColor: "#3cb371",
                        marginLeft: "5px",
                      }}
                    />
                  </Box>
                  <Box mt={3}>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Box borderRadius={5}>
                          <img
                            src={GalleryImg1}
                            alt="Footer Gallery Image 1"
                            style={{ width: "100%", borderRadius: "5px" }}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box borderRadius={5}>
                          <img
                            src={GalleryImg2}
                            alt="Footer Gallery Image 2"
                            style={{ width: "100%", borderRadius: "5px" }}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box borderRadius={5}>
                          <img
                            src={GalleryImg3}
                            alt="Footer Gallery Image 3"
                            style={{ width: "100%", borderRadius: "5px" }}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Box borderRadius={5}>
                          <img
                            src={GalleryImg4}
                            alt="Footer Gallery Image 1"
                            style={{ width: "100%", borderRadius: "5px" }}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box borderRadius={5}>
                          <img
                            src={GalleryImg5}
                            alt="Footer Gallery Image 1"
                            style={{ width: "100%", borderRadius: "5px" }}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box borderRadius={5}>
                          <img
                            src={GalleryImg6}
                            alt="Footer Gallery Image 1"
                            style={{ width: "100%", borderRadius: "5px" }}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Footer Copyright Section */}
        <Copyright />
      </Box>
    </>
  );
};

export default footer;
