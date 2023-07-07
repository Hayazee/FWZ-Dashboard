import React from "react";
import ZokiTextField from "css/styledComponents/zokiTextField";
import ZokiButtonsDark from "css/styledComponents/zokiButtonsDark";
import Typography from "@mui/material/Typography";
import { Grid, Box } from "@mui/material";

const SignUpModel = () => {
  return (
    <>
      <Box
        className="SubscriptionTransparent"
        p={6}
        pt={5}
        pb={5}
        position="absolute"
        bottom="80%"
        marginLeft="10%"
        marginRight="10%"
        width="80%"
        bgcolor="#3cb371"
        borderRadius={8}
        textAlign="center"
        color="white"
      >
        <Typography variant="h4" className="zokiHeadings">
          Get Special Offer & More from Fly With Zoki
        </Typography>
        <Typography variant="h6" className="zokiParagraph">
          Sign up now & get the best deals straight in your inbox!
        </Typography>
        <Box width="50%" ml="25%" mt={3}>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <ZokiTextField />
            </Grid>
            <Grid item xs={4}>
              <ZokiButtonsDark content="Subscribe" />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default SignUpModel;
