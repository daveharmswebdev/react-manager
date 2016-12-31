import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
       apiKey: 'AIzaSyAkCm3T1X2lbHmOrF3dkE6WdZk-PapBuhg',
       authDomain: 'manager-965c9.firebaseapp.com',
       databaseURL: 'https://manager-965c9.firebaseio.com',
       storageBucket: 'manager-965c9.appspot.com',
       messagingSenderId: '504395830386'
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
