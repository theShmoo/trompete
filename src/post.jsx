import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TimeAgo from 'react-timeago'

import Vote from './vote';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  box: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
  }
});

const Ago = (props) => {
  return <Grid xs={12}>
    <Typography variant="caption" color="inherit">
      <TimeAgo date={props.time} />
    </Typography>
  </Grid>
}

const Post = (props) => {
  const { id, post, user, classes } = props;
  const { text, time } = post;

  return <Grid item xs={12} sm={6} lg={4} className={classes.root}>
    <Paper square elevation={2} className={classes.box}>
      <Box display="flex" >
        <Typography variant="h6" color="inherit">
          {text}
        </Typography>
        <Vote post={post} id={id} user={user} />
      </Box>
      <Ago time={time} />
    </Paper>
  </Grid>
};

export default withStyles(styles)(Post);

