import * as actionTypes from "./actionTypes"

const initialState: AuthState = {
  authToken: {
    value: "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.3cbz59gCt4x9Xy7-8sOuEN_90mXUPmvHuDJoh2MwxqH5n4F8pd3vea4TgVxJXL2c2JRBj9QLUpabu0cPF8ZLx-O_x9PW_rdm.a2ArWIgOhcqp4R8zmuMLJQ.eHcgj4HavLcFtZcYAvb_zuyjxBgaMEHv-uvNbk6tuJKYppO-EYW7VY1Y5Nm6TecY0oMMuneir80uwcGqdYEtZJbGLV9UWi0hVFqu_cLmDJ3-QDS3DCn4xO6ZKkYonn3PtJ4RgCuSsZuiEOHUKObzIs8ziH_2f9l9cvJm4XyI8mI.ukaF9kkheUbiLP_UtGTK5LRtp2OgdUKxLm0oITiZ-UA",
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