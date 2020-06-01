import React from 'react'
import { deleteSmurf } from '../../action'
import { connect } from 'react-redux'

import { Button } from 'reactstrap'

const Card = (props) => {
  console.log("Card -> props", props)
  const { character } = props

  const handleDelete = e => {
    props.deleteSmurf(e.target.id)
  }

  const handleEdit = e => {
    console.log('edit triggered')
  }

  return (
    <div>
      <h3>{character.name}</h3>
      <p>{character.age} years old</p>
      <p>{character.height}</p>
      <Button id={character.id} onClick={e => handleDelete(e)} color="danger">Delete</Button>

    </div>
  )
}

export default connect(null, { deleteSmurf })(Card)
