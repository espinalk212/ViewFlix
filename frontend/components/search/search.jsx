import React from 'react';
import { Link } from 'react-router-dom';




class SearchIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  

  componentDidMount() {
    this.props.fetchVideoInfo(this.props.genre).then(this.props.clearVideos())
  }

  componentWillUnmount(){
    this.props.clearVideos()
  }
  

  render() {

    const video = this.props.videos.map(video => (
        <ul className="search-item">
          <Link className='link' to={`videos/${video.id}`} key={video.id}><img src={video.posterUrl}/>
            <li>{video.title}</li></Link>
          {/* <li>{video.description}</li> */}
        <li className={ video.rating >= 3 ? "rating-good-show" : "rating-bad-show" }>Rating: {video.rating}</li>
          <li className="genre">Genre: {video.genre}</li>
        </ul>
    ))

    return (
        <div className="search-container">
            {video}
        </div>
    )
  }
}

export default SearchIndex;