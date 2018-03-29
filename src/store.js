import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { TODOS } from './action'

import { post, get } from './services/request'

const initialState = {
}

const apiPrefix = 'http://5abcf602fd24f60014af82ca.mockapi.io/api/v1'

const reducer = combineReducers({
  form: formReducer,
  todos: (state = initialState, action) => {
    switch (action.type) {
      case TODOS.fetchAllSuccess:
        return {
          ...state,
          todos: action.payload
        }
      case TODOS.fetchAllFailure:
        return {
          ...state
        }
    }

    return state
  }
})

const middlewares = [
  store => next => action => {
    next(action)

    switch (action.type) {
      case TODOS.fetchAllRequest:
        get(`${apiPrefix}/todos`)
          .then(todos => store.dispatch({
            type: TODOS.fetchAllSuccess,
            payload: todos
          }))
          .catch(err => store.dispatch({
            type: TODOS.fetchAllFailure,
            reason: err
          }))

        break;
    }
  }
]

const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
)

export default store
