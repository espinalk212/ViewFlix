import React from "react";

class VideoIndex extends React.Component {
  constructor(props){
    super(props)

    
  }

  componentDidMount(){
    this.props.fetchVideos()
  }

  render(){
    return(
      <div>
        <div>
          <div className="main-video">
            HERE IS THE MAIN VIDEO COMPONENT
          </div>

            <div className="genre-container">
              <ul>
                <h1 className='title'>Comedy</h1>
                {/* {this.props.comedyVideos} */}
              </ul>
            </div>

            <div className="genre-container">
              <ul>
              <h1 className='title'>Action</h1>
                {/* {this.props.actionVideos} */}
              </ul>
            </div>

            <div className="genre-container">
              <ul>
                <h1 className='title'>Non-fiction</h1>
                {/* {this.props.nonfictionVideos} */}
              </ul>
            </div>

            <div className="genre-container"    >
              <ul>
                <h1 className='title'>Family</h1>
                {/* {this.props.familyVideos} */}
              </ul>
            </div>

            <div className="genre-container"   >
              <ul>
                <h1 className='title'>Horror</h1>
                {/* {this.props.horrorVideos} */}
              </ul>
            </div>

            <div className="genre-container"  >
              <ul>
                <h1 className='title'>Fiction</h1>
                {/* {this.props.fictionVideos} */}
              </ul>
            </div>
          
          </div>
        </div>
    );
  }
}

export default VideoIndex;