import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Grid,
  Card,
  CardActions,
  IconButton,
  Typography
} from '@material-ui/core'
import { CameraAlt } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  grid: {
    justifyContent: 'center',
    alignSelf: 'center',
    flexWrap: 'wrap',
    padding: '0 5% 5% 0',
    maxWidth: '90%'
  },
  card: {
    minWidth: 175,
    textAlign: 'center',
    alignItems: 'center'
  },
  cardActions: {
    justifyContent: 'center'
  }
}))

function Doggies(props) {
  const classes = useStyles()

  return (
    <Grid container className={classes.grid} spacing={2}>
      {Object.keys(props.puppies).map(puppy => (
        <Grid key={puppy} item>
          <Card className={classes.card} data-testid="dog-cards">
            <Typography variant={'h5'}>{puppy}</Typography>
            <CardActions className={classes.cardActions}>
              <IconButton
                size="small"
                color="primary"
                onClick={() => props.setBreed(puppy)}
                data-testid="puppy-button"
              >
                <CameraAlt />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Doggies
