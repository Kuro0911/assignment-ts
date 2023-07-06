interface AuthToken {
    value: string,
}

type AuthAction = {
  type: string
  authToken: AuthToken
}

type AuthState = {
  authToken: AuthToken,
}

type DispatchType = (args: AuthAction) => AuthAction