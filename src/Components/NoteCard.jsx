import React from "react";
import { Card, Typography, CardHeader, CardMedia, CardContent, Avatar, IconButton, makeStyles } from '@material-ui/core/'
import DeleteSweepTwoTone from '@material-ui/icons/DeleteSweepTwoTone';
import { green , blue , pink } from '@material-ui/core/colors'



const styles = makeStyles({
  primaryProColor: {
    color: '#6426bf'
  },

  avatar: {
    backgroundColor:(note) => {
      if (note.radio === 'good day') {
        return green[700]
      } else if(note.radio === 'sad day'){
        return pink[700]
      }else{
        return blue[400]
      }

    }
  }
})



export default function NoteCard({ note, handleDelete }) {
  const classes = styles(note);

  return (

    <div>
      <Card elevation={4}>
        <CardHeader

          avatar={
            <Avatar className={classes.avatar}>
              {note.radio[0].toUpperCase()}
            </Avatar>
          }
          action={

            <IconButton onClick={() => handleDelete(note.id)} >
              <DeleteSweepTwoTone color="error" />
            </IconButton>
          }

          className={classes.primaryProColor}

          title={note.title}
          subheader={note.radio}
        />

        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {note.putNote}
          </Typography>
        </CardContent>
      </Card>
    </div>

  )
}