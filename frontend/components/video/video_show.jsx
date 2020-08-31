import React from 'react';

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
      <div className="main-video">
        <video src={this.props.video.videoUrl} 
          poster={this.props.video.posterUrl} width="100%" height="100%" 
          autoPlay controls />
      </div>
    )
  }
}

export default VideoShow;