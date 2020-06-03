import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TimeAgo from 'react-timeago'
import germanStrings from 'react-timeago/lib/language-strings/de'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

import Vote from './vote';

const formatter = buildFormatter(germanStrings);

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  box: {
    margin: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
  comments: {
    marginRight: theme.spacing(4),
  }
});

const Ago = ({ time }) => {
  return <Box flexGrow={1} >
    <Typography variant="caption" color="inherit">
      <TimeAgo date={time} formatter={formatter} />
    </Typography>
  </Box>
}

const CommentHint = ({ comments }) => {
  return <Box>
    <Typography variant="caption" color="inherit">
      0 Kommentare
    </Typography>
  </Box>
}

const Post = (props) => {
  const { id, post, user, classes } = props;
  const { text, time, comments } = post;

  return <Grid item xs={12} sm={6} lg={4} className={classes.root}>
    <Paper square elevation={2} className={classes.box}>
      <Box display="flex" >
        <Box flexGrow={1} >
          <Typography variant="h6" color="inherit">
            {text}
          </Typography>
        </Box>
        <Box>
          <Vote post={post} id={id} user={user} />
        </Box>
      </Box>
      <Box display="flex" className={classes.comments}>
        <Ago time={time} />
        <CommentHint post={comments} />
      </Box>
    </Paper>
  </Grid>
};

export default withStyles(styles)(Post);

