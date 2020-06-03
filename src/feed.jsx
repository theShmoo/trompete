import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Post from './post';
import OrderingForm from './orderingForm';
import { PostsURL, GetRequestOptions } from './endpoints';
import { VoteSum } from './utils';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

const possibleOrderings = [
  { name: "Neueste", value: "newest" },
  { name: "Hottest", value: "hottest" },
]

class Feed extends React.Component {
  state = {
    data: {},
    error: "",
    ordering: possibleOrderings[0]
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

  handleOrderChange = (ordering) => {
    this.setState({ ordering: ordering });
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
    const { data, ordering } = this.state;
    const { value } = ordering;
    const FlatPosts = Object.entries(data).map(([k, v]) => { return { id: k, data: v }; });
    const SortedPosts = FlatPosts.sort((lhs, rhs) => {
      if (value === "newest") {
        return rhs.data.time - lhs.data.time;
      }
      else if (value === "hottest") {
        const lvotes = VoteSum(lhs.data.votes);
        const rvotes = VoteSum(rhs.data.votes);
        const score = rvotes - lvotes;
        return score;
      }
      else {
        return 0;
      }
    }).map((post, i) => {
      return <Post id={post.id} post={post.data} user={user} key={post.id} />
    });

    return <Grid className={classes.root} container spacing={1}>
      <Grid item xs={12}>
        <OrderingForm ordering={ordering} orderings={possibleOrderings} onChange={this.handleOrderChange} />
      </Grid>
      {SortedPosts}
    </Grid>
  }
};

export default withStyles(styles)(Feed);
