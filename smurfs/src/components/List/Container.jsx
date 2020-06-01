import React, { useEffect } from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { loadData } from '../../action'

import styled from 'styled-components'

const StyledContainer = styled.div`
  padding: 40px 3%;
  display: flex;
  justify-content: center;
`
const Container = (props) => {
  useEffect(() => {
    props.loadData()
  }, [])
  return (
    <StyledContainer>
      {props.characters.map(c => <Card key={c.id} character={c} />)}
    </StyledContainer>
  )
}

const mapStateToProps = state => {
  return {
    characters: state.data
  }
}

// export default Container
export default connect(mapStateToProps, { loadData })(Container)
