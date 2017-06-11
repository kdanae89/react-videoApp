import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    //initializes state - only time we set the state this way is in a component
    this.state = { term: ''};
  }
  render() {
    //{} for vanilla elements
    //event handler
    //any time we change state - setState
    return (
      <div className="search-bar">
        <input
        placeholder="Search Youtube"
        value = {this.state.term}
        onChange= {event => this.onInputChange(event.target.value)}/>
        <input className="button"type="submit" value=""></input>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
//event
//   onInputChange(event) {
//     console.log(event.target.value);
//   }
}

export default SearchBar;
