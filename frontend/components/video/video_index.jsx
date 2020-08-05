import React from "react";
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
  constructor(props){
    super(props)

    this.showMain.bind(this);
  }


  componentDidMount(){
    this.props.fetchVideos()
  }

  showMain(videoGenre) {
    const allVideos = videoGenre.map(video => {
      return (
        <video className="main-video" src={video.videoUrl} key={video.id} autoPlay controls/>
      )
    });
    return allVideos[0];
  }

  render(){
    const videoItem = videoGenre => (
      videoGenre.map(video => (
      <li className="video-container"><VideoIndexItem key={video.id} video={video} /></li>
    )));

    return(
      <div className="video-index">

          <div className='main-video-container'>
            <div className="main-video" >
              {this.showMain(this.props.actionVideos)}
            </div>
          </div>

            <h1 className='title'>Comedy</h1>
            <ul className="genre-container">
                {videoItem(this.props.comedyVideos)}
            </ul>


            <h1 className='title'>Action</h1>
            <ul className="genre-container">
                {videoItem(this.props.actionVideos)}
            </ul>


            <h1 className='title'>Non-fiction</h1>
            <ul className="genre-container">
                {videoItem(this.props.nonfictionVideos)}
            </ul>

            <h1 className='title'>Family</h1>
            <ul className="genre-container"    >
                {videoItem(this.props.familyVideos)}
            </ul>

            <h1 className='title'>Horror</h1>
            <ul className="genre-container"   >
              {videoItem(this.props.horrorVideos)}
            </ul>

            <h1 className='title'>Fiction</h1>
            <ul className="genre-container"  >
              {videoItem(this.props.fictionVideos)}
            </ul>

        </div>
    );
  }
}

export default VideoIndex;