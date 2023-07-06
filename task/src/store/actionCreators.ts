import * as actionTypes from "./actionTypes"

export function addAuth(authToken: AuthToken) {
  const action: AuthAction = {
    type: actionTypes.ADD_AUTH,
    authToken,
  }

  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: AuthAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
      console.log("ACTION_UPDATED " + action);
    }, 10)
  }
}
