import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../Router';
import NavReducer from './NavReducer';
import AuthReducer from './AuthReducer';

const AppReducer = combineReducers({
  nav: NavReducer,
  auth: AuthReducer
});

const RootReducer = (state, action) => {
  if (action.type === 'Logout') {
    // To be updated, noted on comments in the gitLab issue #37
    state = undefined;
  }

  return AppReducer(state, action);
};

export default RootReducer;
