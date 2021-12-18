import React, { useState } from 'react'
import { Typography, Button, Container, makeStyles, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core/'


import NoteAddTwoToneIcon from '@material-ui/icons/NoteAddTwoTone'

import { useHistory } from 'react-router-dom';
const doStyles = makeStyles({
  btn: {
    fontSize: '0.9rem',
    backgroundColor: 'violet',
    transition: '0.4s all ease-in-out',
    '&:hover': {
      backgroundColor: 'blue',
      fontSize: '1rem'
    }
  },

  felid: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Create() {
  const history = useHistory();
  const classes = doStyles();
  const [title, setTitle] = useState('');
  const [putNote, setPutNote] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [putNoteError, setputNoteError] = useState(false);
  const [radio, setRadio] = useState('etc');

 



  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setputNoteError(false);

    if (!title.trim().length) {
      setTitleError(true);
    };


    if (!putNote.trim().length) {
      setputNoteError(true);

    };

    if (title && putNote) {
      fetch('http://localhost:8000/notes' , {
        method: 'POST',
        headers: {"Content-type": "application/json"} ,
        body: JSON.stringify({title , putNote , radio})
      }).then(() => history.push('/'))
      
      
      
    }



  }
  return (
    <Container size="sm">
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.felid}
          color="secondary"
          label="title your Note"
          variant="standard"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setPutNote(e.target.value)}

          className={classes.felid}
          color="secondary"
          label="put your note here"
          variant="standard"
          multiline
          rows={5}
          fullWidth
          error={putNoteError}
          required
        />


        <FormControl color='secondary' className={classes.felid}>
          <FormLabel>how was you'r day</FormLabel>
          <RadioGroup value={radio} onChange={(e) => setRadio(e.target.value)} >
            <FormControlLabel value="good day" control={<Radio />} label='good day' />
            <FormControlLabel value="sad day" control={<Radio />} label='Sad day' />
            <FormControlLabel value="etc" control={<Radio />} label='etc...' />


          </RadioGroup>
        </FormControl>

        <Button
          className={classes.btn}

          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<NoteAddTwoToneIcon />}
        >
          Create a new note
        </Button>
      </form>

  
    </Container>
  )
}
