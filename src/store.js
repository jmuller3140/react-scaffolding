import {
  createStore,
  combineReducers,
  compose
} from 'redux'
    
import { default as AppReducers } from 'ROOT/components/app/reducers'
  
// Combine all reducers
const reducers = combineReducers({
  app: AppReducers,
})
const composeEnhancers = process.env.BUILD === 'production' ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

// Prepare Store
const store = createStore(reducers, composeEnhancers())
  
export default store