import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from '@material-ui/styles';
// core components
import styles from "assets/jss/material-dashboard-react/components/typographyStyle.js";

const muiStyles = makeStyles(styles);

export default function Success(props) {
  const classes = muiStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.successText}>
      {children}
    </div>
  );
}

Success.propTypes = {
  children: PropTypes.node,
};
