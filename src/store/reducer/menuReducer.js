const initialState = {
  visibleMenu: false,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_ACTION_HIDE':
      return { visibleMenu: false };
    case 'MENU_ACTION_SHOW':
      return { visibleMenu: true };
    default:
      return state;
  }
};

export default menuReducer;
