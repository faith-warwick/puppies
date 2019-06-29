import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10)
  },
  thing: {
    fontSize: '16px'
  }
}))

function DogCard() {
  const classes = useStyles()
  return (
    <Typography
      variant="h2"
      data-testid="dog-card-text"
      className={classes.thing}
    >
      Dog card
    </Typography>
  )
}

export default DogCard
