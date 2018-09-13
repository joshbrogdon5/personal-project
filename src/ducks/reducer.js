const initialState = {
    user: {},
    products: [],
    shoppingCart: [],
    posts: [],
    proteins: [],
    preworkouts: [],
    multivitamins: [],
    bcaas: [],
    creatine: [],
    accessories:[]
}

const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
const STORE_ALL_PRODUCTS = 'STORE_ALL_PRODUCTS';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const ACTIVE_CART = 'ACTIVE_CART';
const STORE_CART_DATA = 'STORE_CART_DATA';
const IMPORT_POSTS = 'IMPORT_POSTS';
const STORE_PROTEINS = 'STORE_PROTEINS';
const STORE_PREWORKOUTS = 'STORE_PREWORKOUTS';

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

export const storeCartData = (cartData) => ({
  type: STORE_CART_DATA,
  payload: cartData
})

export const importPosts = (posts) => ({
  type: IMPORT_POSTS,
  payload: posts
})

export const storeProteins = (protein) => ({
  type: STORE_PROTEINS,
  payload: protein
})

export const storePreworkouts = (preworkout) => ({
  type: STORE_PREWORKOUTS,
  payload: preworkout
})





export default function reducer(state = initialState, action){
  switch (action.type) {
    case UPDATE_USER_DATA:
        return Object.assign({}, state, {user: action.payload})
    case STORE_ALL_PRODUCTS:
        return Object.assign({}, state, {products: action.payload})
    case ADD_TO_CART:
        return Object.assign({}, state, {shoppingCart: [...state.shoppingCart, action.payload]})
    case REMOVE_FROM_CART:
        let newArray = state.shoppingCart.slice();
        newArray.splice(action.index, 1);
        return Object.assign({}, state, {shoppingCart: newArray})
    case ACTIVE_CART:
        return Object.assign({}, state, {shoppingCart: action.payload})
    case STORE_CART_DATA:
        return Object.assign({}, state, {shoppingCart: action.payload})
    case IMPORT_POSTS:
        return Object.assign({}, state, {posts: action.payload})
    case STORE_PROTEINS:
        return Object.assign({}, state, {proteins: action.payload})
    case STORE_PREWORKOUTS:
        return Object.assign({}, state, {preworkouts: action.payload})


    default: return state
  }
}
