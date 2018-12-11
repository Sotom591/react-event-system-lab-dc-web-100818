// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

passwordHandler = () => console.log("Entering password...")

render(){
  return(
    <div>
      <form>
        <label>
        Code:
        <input type="password"
        onKeyUp={this.passwordHandler}/>
        </label>
      </form>

    </div>
  )
}
}
