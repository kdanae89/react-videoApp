import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCbVgju_QyNamqdVp2Sov2gKyWykZoEnfw';
//create a new component that produces some HTML
//const is just an unmutable variable in ES6
const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

//put the component's generated HTML into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
