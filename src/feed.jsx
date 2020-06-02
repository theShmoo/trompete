import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Post from './post';
import { Posts, GetRequestOptions } from './endpoints';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class Feed extends React.Component {
  state = {
    data: {}
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
    fetch(Posts, GetRequestOptions).then(response => response.json())
      .then(json => {
        this.setState({ data: json })
      });
  }

  render() {
    const { classes } = this.props;
    const PostTexts = Object.entries(this.state.data).map(
      ([k, v], i) => {
        return <Post post={v} key={i} />
      });

    return <Grid className={classes.root} container spacing={2}>
      {PostTexts}
    </Grid>
  }
};

export default withStyles(styles)(Feed);
