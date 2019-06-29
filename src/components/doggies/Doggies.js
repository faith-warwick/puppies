import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Card } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  thing: {
    fontSize: '16px'
  },
  grid: {
    justifyContent: 'center',
    alignSelf: 'center',
    flexWrap: 'wrap',
    padding: '5%',
    maxWidth: '90%'
  },
  card: {
    minWidth: 175
  }
}))

function Doggies(props) {
  const classes = useStyles()
  return (
    <Grid container className={classes.grid} spacing={2}>
      {['puppy', 'doggo'].map(value => (
        <Grid key={value} item>
          <Card className={classes.card} data-testid="dog-cards">
            {value}
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Doggies
