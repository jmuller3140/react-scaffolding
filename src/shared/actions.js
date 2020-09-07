import { MODAL_TOGGLE } from './constants'
export const toggleModal = (payload) => {
  return {
    type: MODAL_TOGGLE,
    payload
  }
}