import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SendIcon from '@material-ui/icons/Send';
import DoneIcon from '@material-ui/icons/Done';

import { PostsURL, PostHeaderOptions } from './endpoints';

const styles = theme => ({
  form: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  textField: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
});

const PostForm = (props) => {
  const { classes, user, onSend } = props;
  const [text, setText] = React.useState('');
  const [done, setDone] = React.useState(false);
  const [error, setError] = React.useState("Leere Trompete");
  const hasError = error !== ""

  const wrappedOnSend = () => {
    onSend();
  };

  const handleSend = () => {
    if (hasError) return;

    const msg = {
      method: 'POST',
      headers: PostHeaderOptions,
      body: JSON.stringify({
        'user': user,
        'text': text,
        'time': Date.now()
      }),
      redirect: 'follow'
    };
    fetch(PostsURL, msg)
      .then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            setDone(true);
            setText("");
            wrappedOnSend();
          }).catch(() => {
            setError("Fehler beim Verarbeiten der Nachricht...");
          });
        }
        else {
          setError("Mein Server mag diese Nachricht nicht...");
        }
      })
      // this would recover the error message
      //.then( data => setError("sending failed..." + data.errors[0].msg))
      .catch(() => {
        setError("Fehler beim Senden der Nachricht...");
      });
  };

  const handleChange = (event) => {
    if (done) {
      setDone(false);
    }
    setText(event.target.value);
    setError(event.target.value ? "" : "Leere Trompete");
  };

  return <form className={classes.form}>
    <TextField
      id="my-text"
      multiline
      error={hasError}
      className={classes.textField}
      rowsMax={4}
      fullWidth
      value={text}
      onKeyPress={(ev) => {
        if (ev.key === 'Enter') {
          handleSend();
          ev.preventDefault();
        }
      }}
      onChange={handleChange}
    />
    <Button
      variant="contained"
      disabled={done || hasError}
      onClick={handleSend}
      className={classes.button}
      color={done ? "secondary" : "primary"}
      endIcon={done ? <DoneIcon /> : <SendIcon />}>
      Send
          </Button>
    {done ? <Typography variant="body1" color="primary">Gesendet!</Typography> : ""}
  </form>
};

export default withStyles(styles)(PostForm);
