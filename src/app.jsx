import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import withRoot from './withRoot';
import PostForm from './postForm';
import Feed from './feed';

const styles = theme => ({
  flex: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
  },
  main: {
    padding: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  description: {
    padding: theme.spacing(2),
  }
});

const TrompeteIcon = () => { return <span role="img" aria-label="trompete" style={{ margin: "1ex" }}>🎺</span>; };

const user = '-M8qkGNG5pSfIyxBcxPP';

class App extends Component {

  state = {
    refreshFeed: false
  };

  render() {
    const { classes } = this.props;

    const handleSend = (id, data) => { this.setState(prevState => { return { refreshFeed: !prevState.refreshFeed } }); };

    return <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <TrompeteIcon />
          <Typography variant="h5" className={classes.flex}>
            Trompete
          </Typography>
        </Toolbar>
      </AppBar>
      <Container spacing={2} fixed={true} maxWidth={1200} className={classes.main}>
        <Paper square elevation={4} >
          <Typography variant="body1" className={classes.description}>
            Trompete eine Nachricht an alle Pfadfinder!
          </Typography>
          <PostForm user={user} onSend={handleSend} />
        </Paper>
        <Feed user={user} refresh={this.state.refreshFeed} />
      </Container>
    </div >
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
