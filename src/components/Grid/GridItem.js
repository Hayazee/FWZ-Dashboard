import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";

const styles = {
  grid: {
    padding: "0 15px !important",
  },
};

const muiStyles = makeStyles(styles);

export default function GridItem(props) {
  const classes = muiStyles();
  const { children, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}

GridItem.propTypes = {
  children: PropTypes.node,
};
