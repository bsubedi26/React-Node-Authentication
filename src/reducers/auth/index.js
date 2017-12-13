import initialState from './state'
import feathers from 'util/feathers'
const user = feathers.service('user')

const types = {
  AUTHENTICATE: 'AUTH/AUTHENTICATE',
  RESET: 'AUTH/RESET',

  SIGNUP: 'AUTH/SIGNUP',
  VERIFY_JWT: 'AUTH/VERIFY_JWT',
  CURRENT_USER: 'AUTH/CURRENT_USER',
  LOGOUT: 'AUTH/LOGOUT'
}

export const actions = {
  signup(payload) {
    return dispatch => {
      return dispatch({ type: types.SIGNUP, payload: user.create(payload) })
    }        
  },
  authenticate(payload) {
    return dispatch => {

      return dispatch({ type: types.AUTHENTICATE, payload: feathers.authenticate(payload) })
      .then(response => {
        dispatch({ type: types.VERIFY_JWT, payload: feathers.passport.verifyJWT(response.value.accessToken)});
        return Promise.resolve(response)      
      })
      .catch(error => {
        return Promise.reject(error)
      })
    }        
  },
  logout() {
    return dispatch => {
      dispatch({ type: types.RESET })
      return dispatch({ type: types.LOGOUT, payload: feathers.logout() })
    }
  }
}


export default function reducer (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case `${types.AUTHENTICATE}_PENDING`: {
      return {
        ...state,
        isPending: true
      }
    }

    case `${types.AUTHENTICATE}_REJECTED`: {
      return {
        ...state,
        isPending: false,
        isError: payload
      }
    }

    case `${types.AUTHENTICATE}_FULFILLED`: {
      const { accessToken } = payload
      return {
        ...state,
        isPending: false,
        isError: null,
        accessToken
      }
    }

    case `${types.VERIFY_JWT}_FULFILLED`: {
      return {
        ...state,
        isError: null,
        decodedToken: payload,
        id: payload.userId
      }
    }
    
    case types.CURRENT_USER: {
      return {
        ...state,
        email: payload
      }
    }

    case types.RESET: {
      return {
        ...initialState
      }
    }

    default: return state
  }
}
