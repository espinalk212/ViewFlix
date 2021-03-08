import React from 'react';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { Link } from 'react-router-dom';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }

  componentDidMount() {
    console.log(this.props);
    // this.setState({
    //   videos: this.state.videos.push(
    //     userVideos.forEach(video => this.props.fetchVideo(video))
    //   ),
    // });
  }

  render() {
    const item = this.state.videos.map(video => {
      return <li>{video.title}</li>;
    });
    return (
      <>
        <div>{item}</div>
      </>
    );
  }
}

export default Playlist;
