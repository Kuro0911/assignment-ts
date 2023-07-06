import * as actionTypes from "./actionTypes"

const initialState: AuthState = {
  authToken: {
    value: "invalid",
  }
}

const reducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
    console.log(action)
    switch (action.type) {
        case actionTypes.ADD_AUTH:
            return {
                ...state,
                authToken: action.authToken
            }
        }
  return state
}

export default reducer