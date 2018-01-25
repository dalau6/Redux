const FETCHING = 'FETCHING'
const FETCHING_SUCCESS = 'FETCHING_SUCCESS'

export function fetching() {
  return {
    type: FETCHING,
  }
}

export function fetchingSuccess() {
  return {
    type: FETCHING_SUCCESS,
  }
}

const initialState = {
  isFetching: true,
}

export default function popular(state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return {
        isFetching: true,
      }
    case FETCHING_SUCCESS:
      return {
        isFetching: false,
      }
    default:
      return state
  }
}