import React, { Component } from 'react';
import ButtonPanel from "./ButtonPanel";
class App extends Component {
  render() {
    const mystyle = {
      color: "black",
      textAlign: "center",
      padding: "30px",
      fontsize: "100px",
      fontFamily: "Arial"
    };
    return (
      <h1 style={mystyle} >Magenta</h1>
    );
  }

}


export default App;
