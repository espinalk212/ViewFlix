import React from "react";
import { Player, BigPlayButton, ControlBar  } from 'video-react';
import {Link } from 'react-router-dom';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
  constructor(props){
    super(props)

    this.showPosters.bind(this);
    this.showMain.bind(this);
    
  }

  componentDidMount(){
    this.props.fetchVideos()
  }

  showPosters(videoGenre) {
   return videoGenre.map(video => {
     return(
       <Link to={`/videos/${video.id}`} >
        <div className="poster" >
          <Player  src={video.videoUrl}  poster={video.posterUrl} key={video.id} >
              {/* <BigPlayButton position='none' /> */}
              <ControlBar disableCompletely={true} />
            </Player>
            <span className="hidden" >
              <p>{video.title}</p>
            </span>
          </div>
        </Link>
      )
    })
  }

  showMain(videoGenre) {
    return videoGenre.map(video => {
      return(
        <Player  ref={player => { this.player = player }} autoPlay >
            <ControlBar disableCompletely={true} />
            <BigPlayButton position='center' />
            <source src={video.videoUrl} key={video.id} />
          </Player>
      )
    })
  }
  

  render(){
    // const videoItem = videos.map(video => (
    //   <VideoIndexItem key={video.id} video={video} />
    // ));

    return(
      <div className="video-index">
        <div >
          <div className='main-video-container'>
            <div className="main-video" >
              {this.showMain(this.props.actionVideos)}
            </div>
          </div>

            <h1 className='title'>Comedy</h1>
            <div className="genre-container">
              <ul className='video'>
                {this.showPosters(this.props.comedyVideos)}
              </ul>
            </div>

            <h1 className='title'>Action</h1>
            <div className="genre-container">
              <ul className='video'>
                {this.showPosters(this.props.actionVideos)}
              </ul>
            </div>

            <h1 className='title'>Non-fiction</h1>
            <div className="genre-container">
              <ul className='video'>
              {this.showPosters(this.props.nonfictionVideos)}
              </ul>
            </div>

            <h1 className='title'>Family</h1>
            <div className="genre-container"    >
              <ul className='video'>
              {this.showPosters(this.props.familyVideos)}
              </ul>
            </div>

            <h1 className='title'>Horror</h1>
            <div className="genre-container"   >
              <ul className='video'>
                {this.showPosters(this.props.horrorVideos)} 
              </ul>
            </div>

            <h1 className='title'>Fiction</h1>
            <div className="genre-container"  >
              <ul className='video'>
                {this.showPosters(this.props.fictionVideos)}
              </ul>
            </div>
          
          </div>
        </div>
    );
  }
}

export default VideoIndex;