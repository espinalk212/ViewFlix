import React from 'react';
import { Link } from 'react-router-dom';

class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <>
        <div className="hidden" >
          <p className="video-title">{this.props.video.title}</p>
          <p className={this.props.video.rating >= 3 ? "rating-good" : "rating-bad"}>Rating: {this.props.video.rating} stars</p>
        </ div >
        <Link to={`/videos/${this.props.video.id}`} >
        <video className="videos" src={this.props.video.videoUrl} width="320"  height="240" poster={this.props.video.posterUrl} loop muted controls onMouseOver={e => e.target.play()}
          onMouseOut={e => e.target.load()} />
        </Link>
      </>
    );
  }
}

export default VideoIndexItem;