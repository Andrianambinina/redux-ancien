export const CHANGE_COLOR = "CHANGE_COLOR";

export const colorAction = (color) => {
  return {
    type: CHANGE_COLOR,
    payload: color,
  };
};
