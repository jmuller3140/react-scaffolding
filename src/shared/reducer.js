import {
  MODAL_TOGGLE,
} from './constants'
    
const initialState = {
  modal: {
    showModal: false
  },
}
    
export default (state = initialState, action) => {
  switch (action.type) {
    // -------------- Sign In -------------- // 
    case MODAL_TOGGLE:
      return {
        ...state,
        modal: {...action.payload}
      }
    
    default:
      return state
  }
}