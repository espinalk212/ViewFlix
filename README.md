# [ViewFlix](https://viewflix.herokuapp.com/#/)
A Netflix clone that implements a Rails backend and Reactjs / Redux frontend with movie trailers hosted on AWS.

### Tech Used
- Ruby 

- Ruby on Rails

- Ajax

- Amazon Web Services

- Reactjs

- Redux

- Javascript


### Key features

#### User Auth
- allows for creation of an account, logging in or demo login

#### Video Index
- upon signing in displays main video which autoplays until user interacts with the DOM
- provides video lists based on genre
- allows user to hover over videos, starting play and shows details (movie title, rating)

#### Search Feature Index
- dispatches query to the backend using Ajax, returns videos matching title and/or title
- displays movie details (movie title, genre and rating)

#### Video Index Item
- shows fullscreen video
- on hover presents interactive home button


### Visuals
- login_form component/
![Image](https://i.imgur.com/5aPSg8G.png)

### Code snippet
- video_actions.js/ 
```javascript
export const fetchVideos = () => dispatch => (
  APIUTIL.fetchVideos()
  .then(videos => dispatch(receiveVideos(videos)))
);


export const fetchVideo = videoId => dispatch => (
  APIUTIL.fetchVideo(videoId)
  .then(video => dispatch(receiveVideo(video)))
);


export const fetchVideoInfo = query => dispatch => (
  APIUTIL.fetchVideoInfo(query)
  .then(videos => {
    dispatch(receiveVideos(videos))

  })
);
```
