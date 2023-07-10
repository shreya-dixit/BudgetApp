import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import {store, persistor} from './redux/store';
import React from 'react';
import {Text} from 'react-native';
//import {View} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';

export const AppRedux = () => (
  <Provider store={store}>
    <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
AppRegistry.registerComponent(appName, () => AppRedux);
