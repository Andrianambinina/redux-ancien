import { CHANGE_COLOR, colorAction } from "./action";

const initState = {
  listColors: ["Black", "Red", "Blue", "Gray", "Green"],
  color: "Black",
};

export const colorReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};
