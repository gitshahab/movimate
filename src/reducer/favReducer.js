
export const favReducer = (state, action) => {
  switch(action.type) {
    case "ADD_FAV":
        return [...state, action.payload];
    case "REMOVE_FAV":
        return state.filter(movie => movie.id !== action.payload.id);
    default:
        return state;
  }
}
