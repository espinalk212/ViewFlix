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
          <div >
            nested in here are videos sorted by genre
          </div>
        </div>
      </div>
    );
  }
}

export default VideoIndex;