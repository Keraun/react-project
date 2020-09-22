import typeToReducer from 'type-to-reducer'
import { pendingAction, rejectedAction } from 'type-to-reducer-addons'

const initialState = {
  user: {
    data: null,
    fetching: false,
    fetched: false,
    error: false,
  },
}

const USER_FETCH = 'USER_FETCH'

export const USE_TEXT_THUNK = function(a) {
  return function(dispatch) {
    dispatch(USER_FETCH_ACTION({ b: 1 }))
  }
}

export const USER_FETCH_ACTION = function(data = {}) {
  return { type: USER_FETCH, payload: Promise.resolve(data) }
}

export default typeToReducer(
  {
    [USER_FETCH]: {
      PENDING: (state, action) => pendingAction(state, action, 'user'),
      REJECTED: (state, action) => rejectedAction(state, action, 'user'),
      FULFILLED: (state, action) => {
        return {
          user: {
            ...initialState.user,
            fetching: false,
            fetched: true,
            data: {
              ...action.payload,
            },
          },
        }
      },
    },
  },
  initialState,
)
