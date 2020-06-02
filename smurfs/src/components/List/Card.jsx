import React from 'react'
import { deleteSmurf } from '../../action'
import { connect } from 'react-redux'

import { Button } from 'reactstrap'

import styled from 'styled-components'

const StyledCard = styled.div`
  padding: 20px;
  border: 1px solid blue;
  border-radius: 5px;
  width: 200px;
  text-align: center;
  margin: 10px;
`

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
    <StyledCard>
      <h3>{character.name}</h3>
      <p>{character.age} years old</p>
      <p>{character.height}</p>
      <Button id={character.id} onClick={e => handleDelete(e)} color="danger">Delete</Button>

    </StyledCard>
  )
}

export default connect(null, { deleteSmurf })(Card)
