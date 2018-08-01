const initialState = {
    user: {},
    products: [],
    shoppingCart: []
}

const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
const STORE_ALL_PRODUCTS = 'STORE_ALL_PRODUCTS';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const ACTIVE_CART = 'ACTIVE_CART';

export const updateUserData = (user) => ({
  type: UPDATE_USER_DATA,
  payload: user
});

export const storeProducts = (products) => ({
  type: STORE_ALL_PRODUCTS,
  payload: products
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCart = (productIndex) => ({
  type: REMOVE_FROM_CART,
  payload: productIndex
})

export const activeCart = (cart) => ({
  type: ACTIVE_CART,
  payload: cart
})






export default function reducer(state = initialState, action){
  switch (action.type) {
    case UPDATE_USER_DATA:
        return Object.assign({}, state, {user: action.payload})
    case STORE_ALL_PRODUCTS:
        console.log(action.payload)
        return Object.assign({}, state, {products: action.payload})
    case ADD_TO_CART:
        return Object.assign({}, state, {shoppingCart: [...state.shoppingCart, action.payload]})
    case REMOVE_FROM_CART:
        let newArray = state.shoppingCart.slice();
        newArray.splice(action.index, 1);
        return Object.assign({}, state, {shoppingCart: newArray})
    case ACTIVE_CART:
        return Object.assign({}, state, {shoppingCart: action.payload})

    default: return state
  }
}
