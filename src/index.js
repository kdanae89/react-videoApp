import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCbVgju_QyNamqdVp2Sov2gKyWykZoEnfw';
//create a new component that produces some HTML
//const is just an unmutable variable in ES6
//in class componenthave to use this.props
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.video[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
      );
    }
  }

//put the component's generated HTML into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
