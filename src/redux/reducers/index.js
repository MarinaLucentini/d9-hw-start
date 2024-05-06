const initialState = {
  favoriteCompany: {
    content: [],
  },
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favoriteCompany: {
          ...state.favoriteCompany,
          content: state.favoriteCompany.content.concat(
            action.payload
          ),
        },
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favoriteCompany: {
          ...state.favoriteCompany,
          content: state.favoriteCompany.content.filter(
            (company) => company !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};
export default mainReducer;
