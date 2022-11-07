import { CategoryItem } from '../categories/category.types'

export enum CART_ACTION_TYPES {
  SET_ITEMS = 'cart/SET_ITEMS',
  SET_IS_CART_OPEN = 'cart/SET_IS_CART_OPEN',
}

export type Item = CategoryItem & {
  quantity: number
}
