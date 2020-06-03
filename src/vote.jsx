import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import { PostsBase, PostHeaderOptions } from './endpoints';
import { VoteSum } from './utils';


const styles = theme => ({
  root: {
    marginLeft: 'auto',
  },
  icon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  votes: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const Votes = (props) => {
  const { id, post, user, classes } = props;
  const { votes } = post;
  const flatVotes = votes ? Object.entries(votes).map(
    ([k, v]) => { return { id: k, data: v } }) : undefined;
  const foundVote = flatVotes ? flatVotes.find(v => v.data.user === user) : undefined;

  const [vote, setVote] = React.useState(foundVote);

  const votesBase = PostsBase + '/' + id + '/votes';


  const initialVote = (up) => {
    const url = votesBase + '.json';
    const data = {
      'user': user,
      'up': up,
      'time': Date.now()
    }
    const msg = {
      method: 'POST',
      headers: PostHeaderOptions,
      body: JSON.stringify({
        'user': user,
        'up': up,
        'time': Date.now()
      }),
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

  const updateVote = (up) => {
    const url = votesBase + '/' + vote.id + '/.json';
    const msg = {
      method: 'PATCH',
      headers: PostHeaderOptions,
      body: JSON.stringify({
        'up': up,
        'time': Date.now()
      }),
      redirect: 'follow'
    };
    fetch(url, msg)
      .then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            // deep copy
            const cVote = JSON.parse(JSON.stringify(vote))
            cVote.data.up = json.up;
            cVote.data.time = json.time;
            setVote(cVote);
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

  const handleVote = (up) => {
    if (vote) {
      updateVote(up);
    }
    else {
      initialVote(up);
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
    upcolor = up ? "primary" : "inherit";
    downcolor = !up ? "primary" : "inherit";
    // correct the voting by the local state
    if (foundVote && foundVote.data.up !== up) {
      voteSum += up ? 2 : -2;
    }
  }

  return <div className={classes.root}>
    <Avatar className={classes.icon}>
      <Typography variant="caption" className={classes.votes}>
        {voteSum}
      </Typography>
    </Avatar>
    <IconButton
      className={classes.icon}
      aria-label="upvote"
      size="small"
      color={upcolor}
      onClick={handleUpVote}>
      <ArrowUpwardIcon />
    </IconButton>
    <IconButton
      className={classes.icon}
      aria-label="downvote"
      size="small"
      color={downcolor}
      onClick={handleDownVote}>
      <ArrowDownwardIcon />
    </IconButton>
  </div>
};

export default withStyles(styles)(Votes);


