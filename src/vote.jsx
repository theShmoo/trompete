import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import { PostsBase, PostHeaderOptions } from './endpoints';
import { VoteSum } from './utils';


const styles = theme => ({
  root: {
    paddingLeft: theme.spacing(1)
  },
  icon: {
    padding: 0
  },
  votes: {
  }
});

const Votes = (props) => {
  const { id, post, user, parent, classes } = props;
  const { votes } = post;
  const flatVotes = votes ? Object.entries(votes).map(
    ([k, v]) => { return { id: k, data: v } }) : undefined;
  const foundVote = flatVotes ? flatVotes.find(v => v.data.user === user) : undefined;

  const [vote, setVote] = React.useState(foundVote);

  const votesBase = parent ?
    PostsBase + '/' + parent + '/comments/' + id + '/votes' :
    PostsBase + '/' + id + '/votes';


  const initialVote = (data, up) => {
    const url = votesBase + '.json';
    const msg = {
      method: 'POST',
      headers: PostHeaderOptions,
      body: JSON.stringify(data),
      redirect: 'follow'
    };
    fetch(url, msg)
      .then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            setVote({
              data: data,
              id: json.name
            });
          });
        }
        else {
          throw new Error("Whoops!");
        }
      })
      .catch(() => {
        console.log("Fehler beim Senden des Votes...");
      });
  }

  const updateVote = (data, up) => {
    const url = votesBase + '/' + vote.id + '/.json';
    const msg = {
      method: 'PATCH',
      headers: PostHeaderOptions,
      body: JSON.stringify(data),
      redirect: 'follow'
    };
    fetch(url, msg)
      .then((response) => {
        if (response.ok) {
          // good
        }
        else {
          throw new Error("Whoops!");
        }
      })
      .catch(() => {
        console.log("Fehler beim Senden des Votes...");
      });
  }

  const handleVote = (up) => {
    if (vote) {
      // if the vote does not have an id yet we just ignore it
      // also we ignore it if the vote has the same up state
      if (vote.id && vote.data.up !== up) {
        const cVote = JSON.parse(JSON.stringify(vote))
        cVote.data.up = up;
        cVote.data.time = Date.now();
        setVote(cVote);
        updateVote(cVote.data, up);
      }
    }
    else {
      const data = {
        'user': user,
        'up': up,
        'time': Date.now()
      }
      setVote({ data: data });
      initialVote(data, up);
    }
  };

  const handleUpVote = (event) => {
    handleVote(true);
  }

  const handleDownVote = (event) => {
    handleVote(false);
  }
  let upcolor = "inherit";
  let downcolor = "inherit";
  let voteSum = VoteSum(votes);
  if (vote) {
    const { up } = vote.data;
    upcolor = up ? "primary" : "secondary";
    downcolor = !up ? "primary" : "secondary";
    // correct the voting by the local state
    if (foundVote) {
      if (foundVote.data.up !== up) {
        voteSum += up ? 2 : -2;
      }
    }
    else {
      voteSum += up ? 1 : -1;
    }
  }

  return <Box
    flexDirection="column"
    display="flex"
    alignItems="center"
    className={classes.root}>
    <Typography variant="caption" className={classes.votes}>
      <IconButton
        className={classes.icon}
        aria-label="upvote"
        size="small"
        color={upcolor}
        onClick={handleUpVote}>
        <ArrowUpwardIcon fontSize="inherit" />
      </IconButton>
      <Box
        display="flex"
        justifyContent="center"
        className={classes.icon}>
        {voteSum}
      </Box>
      <IconButton
        className={classes.icon}
        aria-label="downvote"
        size="small"
        color={downcolor}
        onClick={handleDownVote}>
        <ArrowDownwardIcon fontSize="inherit" />
      </IconButton>
    </Typography>
  </Box>
};

export default withStyles(styles)(Votes);


