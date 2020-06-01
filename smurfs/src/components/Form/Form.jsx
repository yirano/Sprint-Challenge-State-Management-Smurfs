import React, { useState } from 'react'
import { Form as ReactForm, Input, Button } from 'reactstrap'
import { addSmurf } from '../../action'
import { connect } from 'react-redux'

const Form = () => {
  const [input, setInput] = useState({})

  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  return (
    <ReactForm onSubmit={addSmurf(input)}>
      <Input type="text" name="name" value={input.name} onChange={handleChange} placeholder="Name" />
      <Input type="text" name="height" value={input.height} onChange={handleChange} placeholder="Height" />
      <Input type="text" name="age" value={input.age} onChange={handleChange} placeholder="Age" />
      <Button type="submit">Submit</Button>
    </ReactForm>
  )
}

export default connect(null, { addSmurf })(Form)
