import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from '@material-ui/styles';
// core components
import styles from "assets/jss/material-dashboard-react/components/typographyStyle.js";

const muiStyles = makeStyles(styles);

export default function Quote(props) {
  const classes = muiStyles();
  const { text, author } = props;
  return (
    <blockquote className={classes.defaultFontStyle + " " + classes.quote}>
      <p className={classes.quoteText}>{text}</p>
      <small className={classes.quoteAuthor}>{author}</small>
    </blockquote>
  );
}

Quote.propTypes = {
  text: PropTypes.node,
  author: PropTypes.node,
};
