import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_DELIVERY_ADDRESS, CART_SAVE_PAYMENT_METHOD,
         CART_SAVE_DELIVER_METHOD, CART_SAVE_PICKUP_INFO } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [], deliveryAddress: {}, pickupInfo: {} }, action) => {
    switch(action.type) {
        case CART_ADD_ITEM:
            const item = action.payload

            const existItem = state.cartItems.find(x => x.product === item.product)

            if(existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload)
            }

        case CART_SAVE_DELIVERY_ADDRESS:
            return {
                ...state,
                deliveryAddress: action.payload,
            }

        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload,
            }

        case CART_SAVE_DELIVER_METHOD:
            return {
                ...state,
                deliverMethod: action.payload,
            }

        case CART_SAVE_PICKUP_INFO:
            return {
                ...state,
                pickupInfo: action.payload,
            }

        default:
            return state
    }
}