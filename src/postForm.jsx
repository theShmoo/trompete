import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SendIcon from '@material-ui/icons/Send';
import DoneIcon from '@material-ui/icons/Done';

import { PostsURL, PostsBase, PostHeaderOptions } from './endpoints';

const styles = theme => ({
  form: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  textField: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
});

const PostForm = (props) => {
  const { classes, user, onSend, postid } = props;
  const [text, setText] = React.useState('');
  const [done, setDone] = React.useState(false);
  const [error, setError] = React.useState("Leere Trompete");
  const hasError = error !== ""

  const wrappedOnSend = (id, data) => {
    onSend(id, data);
  };

  const handleSend = () => {
    if (hasError) return;
    const url = postid ? PostsBase + "/" + postid + "/comments.json" : PostsURL;
    const data = {
      'user': user,
      'text': text,
      'time': Date.now()
    };
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
            setDone(true);
            setText("");
            wrappedOnSend(json.name, data);
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
      {postid ? "Antworten" : "Trompete!"}
    </Button>
    {done ? <Typography variant="body1" color="primary">Gesendet!</Typography> : ""}
  </form>
};

export default withStyles(styles)(PostForm);

PostForm.defaultProps = {
  comment: false,
}
