import React from 'react';
import VideoIndexItem from './video_index_item';
import { Link } from 'react-router-dom';

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);

    this.showMain.bind(this);
  }

  componentDidMount() {
    // this.props.fetchVideos();
    this.props.fetchPlaylist(1);
  }

  showMain(videoGenre) {
    const allVideos = videoGenre.map(video => {
      return (
        <video
          className="main-video"
          width="100%"
          src={video.videoUrl}
          key={video.id}
          controls
          onMouseOver={e => e.target.play()}
          onMouseOut={e => e.target.pause()}
        />
      );
    });
    return allVideos[0];
  }

  render() {
    const videoItem = videoGenre =>
      videoGenre.map(video => (
        <li className="video-container" key={video.id}>
          <VideoIndexItem addVideo={this.props.addVideo} video={video} />
        </li>
      ));

    return (
      <div className="video-index">
        <div className="main-video-container">
          <div className="main-video">
            {this.showMain(this.props.actionVideos)}
          </div>
        </div>

        <h1 className="title">
          <Link className="link" to="/search/comedy">
            Comedy
          </Link>
        </h1>
        <ul className="genre-container">
          {videoItem(this.props.comedyVideos)}
        </ul>

        <h1 className="title">
          <Link className="link" to="/search/action">
            Action
          </Link>
        </h1>
        <ul className="genre-container">
          {videoItem(this.props.actionVideos)}
        </ul>

        <h1 className="title">
          <Link className="link" to="/search/nonfiction">
            Non-fiction
          </Link>
        </h1>
        <ul className="genre-container">
          {videoItem(this.props.nonfictionVideos)}
        </ul>

        <h1 className="title">
          <Link className="link" to="/search/family">
            Family
          </Link>
        </h1>
        <ul className="genre-container">
          {videoItem(this.props.familyVideos)}
        </ul>

        <h1 className="title">
          <Link className="link" to="/search/horror">
            Horror
          </Link>
        </h1>
        <ul className="genre-container">
          {videoItem(this.props.horrorVideos)}
        </ul>

        <h1 className="title">
          <Link className="link" to="/search/fiction">
            Fiction
          </Link>
        </h1>
        <ul className="genre-container">
          {videoItem(this.props.fictionVideos)}
        </ul>
      </div>
    );
  }
}

export default VideoIndex;
