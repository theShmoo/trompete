import React, { Component } from 'react';
import PropTypes from 'prop-types';
// material-ui
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import withRoot from './withRoot';
import PostForm from './postForm';
import Feed from './feed';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  main: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  },
  ui: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  },
});

const TrompeteIcon = () => { return <span role="img" aria-label="trompete" style={{ margin: "1ex" }}>🎺</span>; };

const user = 'databases/users/M8qkGNG5pSfIyxBcxPP';

class App extends Component {

  state = {
    refreshFeed: false
  };

  render() {
    const { classes } = this.props;

    const handleSend = () => { this.setState(prevState => { return { refreshFeed: !prevState.refreshFeed } }); };

    return <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <TrompeteIcon />
          <Typography variant="h6" color="inherit" className={classes.flex}>
            Trompete
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper square elevation={4} className={classes.ui}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <PostForm user={user} onSend={handleSend} />
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={2} className={classes.main}>
        <Grid item xs={12}>
          <Feed user={user} refresh={this.state.refreshFeed} />
        </Grid>
      </Grid>
    </div>
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
