
import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Vote from './vote';
import Ago from './myAgo';
import PostForm from './postForm';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  comment: {
    borderLeft: 'solid black 1px',
    paddingLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
  }
});

const Comment = ({ comment, user, postid, classes }) => {

  const { text, time } = comment.data;
  return <Box display="flex" className={classes.comment}>
    <Box flexGrow={1} >
      <Ago time={time} />
      <Typography variant="body1" color="inherit">
        {text}
      </Typography>
    </Box>
    <Box>
      <Vote post={comment.data} id={comment.id} parent={postid} user={user} />
    </Box>
  </Box>
}

const Comments = (props) => {
  const { user, post, postid, classes } = props;
  const [comments, setComments] = React.useState(post.comments);

  const flatComments = comments ? Object.entries(comments).map(
    ([k, v]) => { return { id: k, data: v } }) : [];
  const components = flatComments.map(t => <Comment key={t.id} comment={t} user={user} postid={postid} classes={classes} />);
  const handleSend = (id, comment) => {
    setComments({
      ...comments,
      [id]: comment
    });
  }

  return <Grid item sx={12} className={classes.root}>
    <PostForm user={user} postid={postid} onSend={handleSend} />
    {components}
  </Grid>
}

export default withStyles(styles)(Comments);

