import React from 'react';
import VideoListItem from './video_list_item';
//in a functional component props is an argument
//use functional components whenever we take properties and return static jsx
//faster and lighter than clss components
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key={video.etag}
        video={video}/>
    );
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
