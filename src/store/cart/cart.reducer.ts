import { AnyAction } from 'redux'

import { Item } from './cart.types'
import { setIsCartOpen, setItems } from './cart.action'

export type State = {
  readonly isCartOpen: boolean
  readonly items: Item[]
}

export const INITIAL_STATE: State = {
  isCartOpen: false,
  items: [],
}

export const cartReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): State => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    }
  }

  if (setItems.match(action)) {
    return {
      ...state,
      items: action.payload,
    }
  }

  return state
}
