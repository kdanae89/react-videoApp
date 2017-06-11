import _ from 'lodash';
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

    this.state = {
      videos: [],
      selectedVideo: null
     };

    this.videoSearch('hedgehogs');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    //throttle videoSearch so that it only runs every 400 ms
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 400);

    return (
      <div>
        <SearchBar onSearchTermChange = {videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          //this function sets the selectedVideo in the state
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
      );
    }
  }

//put the component's generated HTML into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
