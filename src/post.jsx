import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  box: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  }
});

const Post = (props) => {

  const { post, classes } = props;
  const { text } = post;

  return <Grid item xs={12} sm={6} lg={4} className={classes.root}>
    <Paper square elevation={2} className={classes.box}>
      <Typography variant="h6" color="inherit">
        {text}
      </Typography>
    </Paper>
  </Grid>
};

export default withStyles(styles)(Post);

