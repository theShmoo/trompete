import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import CommentIcon from '@material-ui/icons/Comment';
import Button from '@material-ui/core/Button';

import Vote from './vote';
import Ago from './myAgo';
import Comments from './comments';

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
  comment: {
    margin: theme.spacing(0),
    padding: theme.spacing(0)
  }
});

const CommentHint = ({ comments, classes, onClick }) => {
  const num = comments ? Object.keys(comments).length : 0;
  return <Box flexGrow={1} >
    <Button
      className={classes.comment}
      variant="text"
      size="small"
      color="secondary"
      onClick={onClick}
      startIcon={<CommentIcon />}
    ><Typography variant="caption" color="inherit">
        {num === 1 ? num + " Kommentar" : num + " Kommentare"}
      </Typography>
    </Button>
  </Box>
}

const Post = (props) => {
  const { id, post, user, classes } = props;
  const { text, time, comments } = post;

  const [showComments, setShowComments] = React.useState(false);

  const handleShowComments = (event) => setShowComments(!showComments);

  return <Grid item xs={12} className={classes.root}>
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
      <Box display="flex" >
        <CommentHint comments={comments} classes={classes} onClick={handleShowComments} />
        <Ago time={time} />
      </Box>
      {showComments ? <Comments post={post} postid={id} user={user} /> : ""}
    </Paper>
  </Grid>
};

export default withStyles(styles)(Post);

