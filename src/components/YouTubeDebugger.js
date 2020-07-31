// Code YouTubeDebugger Component Here
import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
  constructor(props) {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p",
        },
      },
    };
  }

  onBitrateClick = () => {
    this.setState(() => {
      return {
        settings: {
          ...this.state.settings,
          bitrate: 12,
        },
      };
    });
  };

  onResolutionClick = () => {
    this.setState(() => {
      return {
        settings: {
          ...this.state.settings,
          video: {
            resolution: "720p",
          },
        },
      };
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.onBitrateClick} />
        <button className="resolution" onClick={this.onResolutionClick} />
      </div>
    );
  }
}
