import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import pup from '../../graphics/puppy.png'

import Doggies from '../../components/doggies/Doggies'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: '16px',
    textAlign: 'center'
  },
  puppy: {
    alignSelf: 'center',
    height: 'auto',
    width: '30%',
    maxWidth: '100%'
  },
  grid: {
    spacing: 2
  }
}))

function LandingPage() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img src={pup} className={classes.puppy} alt="Puppy logo" />
      <Typography
        variant="h2"
        data-testid="welcome-message"
        className={classes.titleText}
      >
        PUPPIES
      </Typography>
      <Doggies />
    </div>
  )
}

export default LandingPage
