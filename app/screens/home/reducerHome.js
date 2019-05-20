import * as types from '*/types';
import Themes from '?/themes';

const initialState = {
  colors: Themes.Colors.Light
};

export default function reducerHome(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_THEME:
      switch (action.theme) {
        case 'light':
          return {
            ...state,
            colors: Themes.Colors.Light
          };
        case 'dark':
          return {
            ...state,
            colors: Themes.Colors.Dark
          };
      }
    default:
      return state;
  }
}