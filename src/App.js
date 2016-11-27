import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { View, Text } from 'react-native';
import firebase from 'firebase';

import reducers from './reducers';
import LoginForm from './components/LoginForm.js';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBuyzMLgKUSGWyk5oC9SNC5Lj1JO6ZSHVA',
      authDomain: 'manager-9dae6.firebaseapp.com',
      databaseURL: 'https://manager-9dae6.firebaseio.com',
      storageBucket: 'manager-9dae6.appspot.com',
      messagingSenderId: '41550204155'
  };

  firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
