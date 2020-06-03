import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Post from './post';
import { PostsURL, GetRequestOptions } from './endpoints';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class Feed extends React.Component {
  state = {
    data: {},
    error: ""
  }

  setData(data) {
    this.setState({ data: data });
  }

  componentDidMount(prevProps) {
    this.update()
  }

  componentDidUpdate(prevProps) {
    if (this.props.refresh !== prevProps.refresh) {
      this.update()
    }
  }

  update() {
    // const { user } = this.props;
    fetch(PostsURL, GetRequestOptions).then(response => response.json())
      .then(json => {
        this.setData(json);
      });
  }

  render() {
    const { user, classes } = this.props;
    const PostTexts = Object.entries(this.state.data).map(
      ([k, v], i) => {
        return <Post id={k} post={v} user={user} onVote={this.handleVote} key={i} />
      });

    return <Grid className={classes.root} container spacing={2}>
      {PostTexts}
    </Grid>
  }
};

export default withStyles(styles)(Feed);
