import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyA-RmayoEgKPIxJApsPKuV875rEX5gvesQ";

//Create a new component. This Component Should Produce Some HTML
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideos: null
    };
    YTSearch({ key: API_KEY, term: "surfboards" }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideos: videos[0]
      }); 

      //same as this.setState({ videos: videos }) only works when key and value the same name in ES6
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideos}/>
        <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it (in the DOM - Document Object Model )
ReactDOM.render(<App />, document.querySelector(".container"));
