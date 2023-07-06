import * as actionTypes from "./actionTypes"

export function addAuth(authToken: AuthToken) {
  const action: AuthAction = {
    type: actionTypes.ADD_AUTH,
    authToken: authToken.value
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: AuthAction) {
  return (dispatch: DispatchType) => {
      dispatch(action)
  }
}
