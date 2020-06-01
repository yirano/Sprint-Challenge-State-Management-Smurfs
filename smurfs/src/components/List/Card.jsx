import React from 'react'

const Card = (props) => {
  console.log("Card -> props", props)
  const { character } = props
  return (
    <div>
      <h3>{character.name}</h3>
      <p>{character.age} years old</p>
      <p>{character.height}</p>
    </div>
  )
}

export default Card
