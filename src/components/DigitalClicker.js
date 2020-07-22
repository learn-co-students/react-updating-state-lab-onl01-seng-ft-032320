import React, { Component } from 'react'

export default class DigitalClicker extends Component {

   constructor(props){
      super(props)
      this.state ={
         timesClicked: 0
      }
   }

   updateTimesClicked = () => {
         this.setState(pState => {
            return {timesClicked: pState.timesClicked + 1}
         })         
   }


   render() {
      return (
         <div>
            <button 
               onClick={this.updateTimesClicked}>
                  {this.state.timesClicked}
            </button>
         </div>
      )
   }
}
