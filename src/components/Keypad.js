import React from 'react' ;

export default class Keypad extends React.Component {
  log = () => {
    console.log("entering password...")
  }
  render() {
    return(
      <div>
        <input type="password" onKeyUp={this.log} />
      </div>
    )
  }
}
