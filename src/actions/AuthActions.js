import { NavigationActions } from 'react-navigation';

export const login = () => dispatch => {
  dispatch({ type: 'Login' });
};

export const logout = () => dispatch => {
  dispatch({ type: 'Logout' });
};
