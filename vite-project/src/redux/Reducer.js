import { GET } from "./ActionType"

const initialState = {
    users:[]
}

export const reducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case GET:
    return { ...state,users:payload.getuser }

  default:
    return state
  }
}
