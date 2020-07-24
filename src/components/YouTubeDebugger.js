import React, { Component } from 'react'

class YouTubeDebugger extends Component {
    constructor(props) {
        super(props);
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

    handleBitrateChange = () => {
        this.setState({
            ...this.state.errors,
            ...this.state.user,
            settings: {
                bitrate: 12,
                video: {
                resolution: "1080p",
                },
            },
        });
    }

    handleResolutionChange = () => {
        this.setState({
            ...this.state.errors,
            ...this.state.user,
            settings: {
                bitrate: 8,
                video: {
                resolution: "720p",
                },
            },
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleBitrateChange} className="bitrate">Bitrate to 12</button>
                <button onClick={this.handleResolutionChange} className="resolution">Resolution to 720</button>
            </div>
        )
    }
}

export default YouTubeDebugger;