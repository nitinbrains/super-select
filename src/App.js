import React, { Component } from 'react'
import SuperSelect from './lib/components/SuperSelect'
import icon from "./down_icon.svg"

class App extends Component {
  render() {
    return (
      <div>
          <SuperSelect/>
          <img style={{position:"sticky",left:"98%",marginTop:'-52px'}} src={icon}/>
      </div>
    )
  }
}

export default App;
