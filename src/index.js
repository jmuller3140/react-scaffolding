import React from 'react'
import ReactDOM from 'react-dom'
import { RoutesComponent } from 'ROOT/components/app'
import { Provider } from 'react-redux'

import 'ROOT/assets/styles/style.scss'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
      <RoutesComponent />
  </Provider>,
  document.getElementById('root')
)
