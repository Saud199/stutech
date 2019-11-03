import React, {Component} from 'react';
import Navigator from './navigation/stackNavigation.js';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {

  render() {
    return (
  <Provider store={store}> 
      <Navigator />
  </Provider>
    );
  }
  
}

export default App;
