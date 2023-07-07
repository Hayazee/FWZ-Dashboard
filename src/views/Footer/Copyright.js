import React from "react";
import { Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const Copyright = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <>
      <Box
        bgcolor="#7A7A7A"
        textAlign="center"
        color="white"
        fontSize={14}
        p={2}
      >
        <Typography variant="p" className="zokiParagraph">
          Copyright © {currentYear} FlyWithZoki. All Rights Reserved by
          FlyWithZoki.com
        </Typography>
      </Box>
    </>
  );
};

export default Copyright;
