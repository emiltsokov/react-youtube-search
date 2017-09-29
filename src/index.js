import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyDW4kRvYg7UOKARCDzyKABvLGfIcd6KBPg';

//create new comp
const App = function() {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

//insert it into DOM

ReactDOM.render(<App />, document.querySelector('.container'));