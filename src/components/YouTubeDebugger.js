// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component{
    constructor(){
        super()
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

    handleOnClick = (event) => {
        console.log(this.state.settings.bitrate)
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleOnClick2 = (event) => {
        console.log(this.state.settings.video.resolution)
        this.setState({
            settings:{
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render(){
        return(
            <div>
                <div>
                    <button className="bitrate" onClick={this.handleOnClick}>Bitrate</button>
                </div>

                <div>
                    <button className="resolution" onClick={this.handleOnClick2}>Resolution</button>
                </div>
            </div>
        )
    }
}

export default YouTubeDebugger;