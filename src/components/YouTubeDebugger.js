// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }


  bitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
    console.log('something')
  }

  resolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: '720p'
        }
      }
    })
    console.log('something else')
  }

  render() {
    return (
      <div>
        <button onClick={this.bitrateClick} className="bitrate">{this.state.settings.bitrate}</button>

        <button onClick={this.resolutionClick} className="resolution">{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}

export default YouTubeDebugger;