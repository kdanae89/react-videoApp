import React from 'react';
import ReactDOM from 'react-dom';
//create a new component that produces some HTML
//const is just an unmutable variable in ES6
const App = () => {
  return <div>Hi!</div>;
}

//put the component's generated HTML into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
