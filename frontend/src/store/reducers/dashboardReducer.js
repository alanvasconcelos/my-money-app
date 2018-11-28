const initial_state = { summary: { credit: 0, debit: 0 } }

export const dashboardReducer = (state = initial_state, action) => {
  switch (action.type) {
    case 'SUMMARY_FETCHED':
      return { ...state, summary: action.payload.data }
    default:
      return state;
  }
}