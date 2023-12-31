import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";

const styles = {
  grid: {
    margin: "0 -15px !important",
    width: "unset",
  },
};

const muiStyles = makeStyles(styles);

export default function GridContainer(props) {
  const classes = muiStyles();
  const { children, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}

GridContainer.propTypes = {
  children: PropTypes.node,
};
