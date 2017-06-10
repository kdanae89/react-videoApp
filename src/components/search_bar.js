import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    //set state
    this.state = { term: ''};
  }
  render() {
    //{} for vanilla elements
    //event handler
    return <input onChange={event => console.log(event.target.value)} />;
  }
//event
//   onInputChange(event) {
//     console.log(event.target.value);
//   }
}

export default SearchBar;
