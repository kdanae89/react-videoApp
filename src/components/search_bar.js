import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    //initializes state - only time we set the state this way
    this.state = { term: ''};
  }
  render() {
    //{} for vanilla elements
    //event handler
    //any time we change state - setState
    return (
      <div>
        <input
        value = {this.state.term}
        onChange= {event => this.setState({ term: event.target.value})} />
      </div>
    );
  }
//event
//   onInputChange(event) {
//     console.log(event.target.value);
//   }
}

export default SearchBar;
