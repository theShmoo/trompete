import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import { PostsBase, PostHeaderOptions } from './endpoints';


const styles = theme => ({
  root: {
    marginLeft: 'auto',
  },
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
  if (vote) {
    upcolor = vote.data.up ? "primary" : "inherit";
    downcolor = !vote.data.up ? "primary" : "inherit";
  }

  return <div className={classes.root}>
    <IconButton aria-label="upvote" size="small" color={upcolor} onClick={handleUpVote}><ArrowUpwardIcon /></IconButton>
    <IconButton aria-label="downvote" size="small" color={downcolor} onClick={handleDownVote}><ArrowDownwardIcon /></IconButton>
  </div>
};

export default withStyles(styles)(Votes);


