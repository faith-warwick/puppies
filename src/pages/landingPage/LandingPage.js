import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import pup from '../../graphics/puppy.png'

import Doggies from '../../components/doggies/Doggies'
import PuppyPictures from '../../components/puppyPics/PuppyPics'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  headcard: {
    display: 'flex',
    justifyContent: 'center',
    width: '90%',
    flexWrap: 'wrap'
  },
  titleText: {
    textAlign: 'center',
    color: 'white',
    alignSelf: 'center'
  },
  puppy: {
    alignSelf: 'center',
    height: 'auto',
    width: '30%',
    maxWidth: '100%'
  }
}))

function LandingPage() {
  const [puppies, setPuppies] = useState([])
  const [breed, setBreed] = useState(null)
  const [puppyImages, setPuppyImages] = useState([])

  const resetState = () => {
    setBreed(null)
    setPuppyImages([])
  }

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(res => setPuppies(res.message))
  }, [puppies])

  useEffect(() => {
    if (breed) {
      fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(res => res.json())
        .then(res => setPuppyImages(res.message))
    }
  }, [breed])

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.headcard}>
        <img src={pup} className={classes.puppy} alt="Puppy logo" />
        <Typography
          variant="h1"
          data-testid="welcome-message"
          className={classes.titleText}
        >
          PUPPIES
        </Typography>
      </div>
      <Doggies puppies={puppies} setBreed={setBreed} />
      {breed ? (
        <PuppyPictures
          open={Boolean(breed)}
          breed={breed}
          puppyImages={puppyImages}
          close={resetState}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default LandingPage
