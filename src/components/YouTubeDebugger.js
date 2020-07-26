// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

    constructor(){

      super()
     this.state={
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
    handleClick=()=>{
       
     this.setState({
        settings:{
          ...this.state.settings,
          bitrate: 12,
          
        }

     })

    }
    handleRe =()=>{
     this.setState({
        video:{
            ...this.state.video,
            resolution:'720p'
        }

     })


    }
    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleClick}></button>
                <button className='resolution' onClick={this.handleRe}></button>
            </div>
        )
    }
}
// this.setState({
//     addressInfo: {
//       ...this.state.addressInfo,
//       city: 'New York City'
//     }
//   });
