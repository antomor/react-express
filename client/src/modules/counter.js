export const COUNT_REQUEST = 'COUNT_REQUEST'
export const COUNT_RECEIVED = 'COUNT_RECEIVED'

const initialState = {
  isCalculating: false,
  duplicates: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case COUNT_REQUEST:
      return {
        ...state,
        isCalculating: true
      }
    case COUNT_RECEIVED:
      return {
        ...state,
        isCalculating: !state.isCalculating,
        duplicates: action.duplicates
      }
    default:
      return state
  }
}
