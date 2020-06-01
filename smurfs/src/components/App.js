import React, { Component } from "react"
import Container from './List/Container'
import Form from './Form/Form'
class App extends Component {

  render() {
    return (
      <div className="App">
        <Form />
        <Container />
      </div>
    )
  }
}

export default App
