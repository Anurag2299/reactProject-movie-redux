import React, { Component } from 'react';
import {Provider} from 'react-redux';

import Search from './components/Search';
import Results from './components/Results';


import store from './store';

class App extends Component {
  render() {
    return (
   <Provider store={store}>
         <div>
     <header>
      <h1>Search Movie</h1>
      </header>
      <main>
         <Search />
         <Results />
      </main> 
      </div>
   </Provider>
    );
  }
}

export default App;