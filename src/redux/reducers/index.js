const initialState = {
  favoriteCompany: {
    content: [],
  },
  selectedBtn: null,
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
            (_, i) => i !== action.payload
          ),
        },
      };
    case "SELECTED_BUTTON":
      return {
        ...state,
        selectedBtn: {
          ...state.selectedBtn,
          content: action.payload,
        },
      };
    default:
      return state;
  }
};
export default mainReducer;
