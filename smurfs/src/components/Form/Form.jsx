import React, { useState } from 'react'
import { Form as ReactForm, Input, Button } from 'reactstrap'
import { addSmurf } from '../../action'
import { connect } from 'react-redux'

import styled from 'styled-components'

const FormContainer = styled.div`
  margin: auto;
  width: 50vw;
`

const Form = () => {
  const [input, setInput] = useState({})

  const handleChange = e => {

    setInput({ ...input, [e.target.name]: e.target.value })
  }

  return (
    <FormContainer>
      <ReactForm onSubmit={addSmurf(input)}>
        <Input type="text" name="name" value={input.name} onChange={handleChange} placeholder="Name" />

        <Input type="number" name="height" value={input.height} onChange={handleChange} placeholder="Height" />

        <Input type="number" name="age" value={input.age} onChange={handleChange} placeholder="Age" />

        <Button type="submit" color="primary" style={{ width: '200px', marginTop: '20px' }} >Submit</Button>
      </ReactForm>
    </FormContainer>

  )
}

export default connect(null, { addSmurf })(Form)
