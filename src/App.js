import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import AppReducer from './reducers';
import { persistStore, autoRehydrate } from 'redux-persist';
import AppWithNavigationState from './Router';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rehydrationComplete: false
    };

    const Enhancer = compose(applyMiddleware(ReduxThunk), autoRehydrate());

    this.store = createStore(AppReducer, {}, Enhancer);

    persistStore(
      this.store,
      {
        storage: AsyncStorage,
        blacklist: ['login']
      },
      () => {
        this.setState({ rehydrationComplete: true });
      }
    );
  }

  render() {
    const rehydrationComplete = this.state.rehydrationComplete;
    return rehydrationComplete ? (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    ) : null;
  }
}

export default App;
