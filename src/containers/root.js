import React, { Component } from 'react'
import { Provider } from 'react-redux'
import CounterPage from '../containers/counterPage'
import configureStore from '../state/configureStore'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
        <Provider store={store}>
          <CounterPage />
        </Provider>
    )
  }
}
