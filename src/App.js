import React from 'react';
import Routes from './Routes';
import './App.scss';
import 'font-awesome/css/font-awesome.css';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';

const store = createStore();

class App extends React.Component {
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
