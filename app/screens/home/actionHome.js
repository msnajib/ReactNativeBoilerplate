import * as types from './types';

export const toggleTheme = value => ({
  type: types.TOGGLE_THEME,
  theme: value,
});