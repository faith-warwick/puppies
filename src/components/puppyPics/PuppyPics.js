import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Dialog,
  DialogTitle,
  Button,
  DialogContent,
  DialogActions
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  image: {
    maxWidth: '100%',
    maxHeight: '100%'
  },
  dialog: {
    minHeight: '70vh'
  },
  dTitle: {
    textAlign: 'center'
  },
  dContent: {
    height: '60vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

function PuppyDialog(props) {
  const classes = useStyles()

  const [inc, setInc] = useState(0)

  const showMore = () => {
    const count = props.puppyImages.length
    if (count > inc) {
      setInc(prevInc => prevInc + 1)
    } else {
      setInc(0)
    }
  }

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.close}
        maxWidth="sm"
        fullWidth={true}
        className={classes.dialog}
      >
        <DialogTitle className={classes.dTitle}>{props.breed}</DialogTitle>
        <DialogContent className={classes.dContent}>
          <img
            src={props.puppyImages[inc]}
            className={classes.image}
            alt={props.puppyImages[inc]}
            data-testid="image-for-breed"
          />
        </DialogContent>
        <DialogActions>
          {' '}
          <Button color="primary" onClick={showMore} data-testid="show-more">
            Show me more
          </Button>
          <Button color="primary" onClick={props.close} data-testid="close">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default PuppyDialog
