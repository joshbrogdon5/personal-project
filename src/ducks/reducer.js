const initialState = {
    user: {},
    products: [],
    shoppingCart: []
}

const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

export const updateUserData = (user) => ({
  type: UPDATE_USER_DATA,
  payload: user
});


export default function reducer(state = initialState, action){
  switch (action.type) {
    case UPDATE_USER_DATA:
        return Object.assign({}, state, {user: action.payload})

    default: return state
  }
}
