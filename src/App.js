import React from 'react';
import Routes from './Routes';
import './App.scss';
import 'font-awesome/css/font-awesome.css';
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';

const store = createStore();

class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAc7UsKVAInDJJh3DtKpzBlEmY0oQjRzm8",
      authDomain: "pwa-online-hackathon.firebaseapp.com",
      databaseURL: "https://pwa-online-hackathon.firebaseio.com",
      projectId: "pwa-online-hackathon",
      storageBucket: "pwa-online-hackathon.appspot.com",
      messagingSenderId: "445619580921"
    });
  }
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Routes />
        </Provider>
      </div>
    );
  }
}

export default App;
