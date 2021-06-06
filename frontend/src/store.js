import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers'
import { orderCreateReducer,  orderDetailsReducer, orderPayReducer } from './reducers/orderReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems')) 
    : []

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const deliveryAddressFromStorage = localStorage.getItem('deliveryAddress')
    ? JSON.parse(localStorage.getItem('deliveryAddress'))
    : {}

const pickupInfoFromStorage = localStorage.getItem('pickupInfo')
    ? JSON.parse(localStorage.getItem('pickupInfo'))
    : {}

const deliverMethodFromStorage = localStorage.getItem('deliverMethod')
    ? JSON.parse(localStorage.getItem('deliverMethod'))
    : {}

const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
    ? JSON.parse(localStorage.getItem('paymentMethod'))
    : {}

const initialState = {
    cart: { cartItems: cartItemsFromStorage, deliveryAddress: deliveryAddressFromStorage, 
            pickupInfo: pickupInfoFromStorage, deliverMethod: deliverMethodFromStorage,
            paymentMethod: paymentMethodFromStorage },
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
