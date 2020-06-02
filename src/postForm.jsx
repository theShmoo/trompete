import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SendIcon from '@material-ui/icons/Send';
import DoneIcon from '@material-ui/icons/Done';

import { Posts } from './endpoints';

const styles = theme => ({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    margin: theme.spacing(1),
  },
  textField: {
    margin: theme.spacing(2),
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
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'user': user,
        'text': text
      }),
      redirect: 'follow'
    };
    fetch(Posts, msg)
      .then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            console.log(json);
            setDone(true);
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
    setText(event.target.value);
    setError(event.target.value ? "" : "Leere Trompete");
  };

  return <form className={classes.form} autoComplete="off">
    <FormControl className={classes.formControl}>
      <TextField
        id="my-text"
        multiline
        error={hasError}
        margin="normal"
        className={classes.textField}
        rowsMax={4}
        InputLabelProps={{
          shrink: true,
        }}
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
    </FormControl>
    <FormControl className={classes.formControl}>
      <Button
        variant="contained"
        disabled={done || hasError}
        onClick={handleSend}
        className={classes.button}
        color={done ? "secondary" : "primary"}
        endIcon={done ? <DoneIcon /> : <SendIcon />}>
        Send
            </Button>
      {done ? <Typography variant="body1" color="primary">Danke!</Typography> : ""}
    </FormControl>
  </form>
};

export default withStyles(styles)(PostForm);
