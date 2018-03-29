import React from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { TODOS } from '../action';

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch({
      type: TODOS.fetchAllRequest
    })
  }

  render() {
    console.log(this.props)
    const { todos } = this.props

    return (
      <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={`item_${index}`}>{todo.title}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const selector = state => {
  return {
    todos: state.todos.todos || []
  }
}
export default connect(selector)(App)
