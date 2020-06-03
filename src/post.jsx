import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


import Vote from './vote';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  box: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    display: "flex",
  },
});

const Post = (props) => {
  const { id, post, user, classes } = props;
  const { text } = post;

  return <Grid item xs={12} sm={6} lg={4} className={classes.root}>
    <Paper square elevation={2} className={classes.box}>
      <Typography variant="h6" color="inherit">
        {text}
      </Typography>
      <Vote post={post} id={id} user={user} />
    </Paper>
  </Grid>
};

export default withStyles(styles)(Post);

