import React from "react";

class VideoIndex extends React.Component {
  constructor(props){
    super(props)

    this.showVideos.bind(this);
    
  }

  componentDidMount(){
    this.props.fetchVideos()
  }

  showVideos(videoGenre) {
   return videoGenre.map(video => {
      return( 
        <li className='video' key={video.id} >{video.description}</li>
      )
    })
  }
  

  render(){

    return(
      <div>
        <div>
          <div className="main-video">
            HERE IS THE MAIN VIDEO COMPONENT
          </div>

            <h1 className='title'>Comedy</h1>
            <div className="genre-container">
              <ul>
                {this.showVideos(this.props.comedyVideos)}
              </ul>
            </div>

            <h1 className='title'>Action</h1>
            <div className="genre-container">
              <ul>
                {this.showVideos(this.props.actionVideos)}
              </ul>
            </div>

            <h1 className='title'>Non-fiction</h1>
            <div className="genre-container">
              <ul>
              {this.showVideos(this.props.nonfictionVideos)}
              </ul>
            </div>

            <h1 className='title'>Family</h1>
            <div className="genre-container"    >
              <ul>
              {this.showVideos(this.props.familyVideos)}
              </ul>
            </div>

            <h1 className='title'>Horror</h1>
            <div className="genre-container"   >
              <ul>
                {this.showVideos(this.props.horrorVideos)} 
              </ul>
            </div>

            <h1 className='title'>Fiction</h1>
            <div className="genre-container"  >
              <ul>
                {this.showVideos(this.props.fictionVideos)}
              </ul>
            </div>
          
          </div>
        </div>
    );
  }
}

export default VideoIndex;