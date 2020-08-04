import React from 'react';
import {Player, BigButton, ControlBar } from 'video-react';

class VideoShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.videoId)
  }

  render(){
    if (this.props.video === undefined) {
      return null;
    }

    return(
      <Player ref={(player) => { this.player = player }} src={this.props.video.videoUrl} poster={this.props.video.posterUrl} autoPlay fluid={false} >
      </Player>
    )
  }
}

export default VideoShow;