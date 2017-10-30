import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginScreen from './containers/Login';
import MainScreen from './containers/Main';
import ProfileScreen from './containers/Profile';

export const AppNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login'
    }
  },
  Main: {
    screen: MainScreen,
    navigationOptions: {
      title: 'Home'
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile'
    }
  }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
