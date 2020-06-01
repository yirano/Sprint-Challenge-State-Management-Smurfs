import React, { useEffect } from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { loadData } from '../../action'

const Container = (props) => {
  useEffect(() => {
    props.loadData()
  }, [])
  return (
    <>
      {props.characters.map(c => <Card key={c.id} character={c} />)}
    </>
  )
}

const mapStateToProps = state => {
  return {
    characters: state.data
  }
}

// export default Container
export default connect(mapStateToProps, { loadData })(Container)
