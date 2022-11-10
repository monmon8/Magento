import React, { Component } from 'react';
class App extends Component {

  calculateSomething() {
    console.log('hello');
  }

  render() {
    const mystyle = {
      color: "black",
      textAlign: "center",
      padding: "30px",
      fontsize: "100px",
      fontFamily: "Arial"
    };
    return (
      <div>
        <h1 style={mystyle} >Magenta</h1>
          <form action="">
          <p>dkjhdfkdsh</p>
           <input type="text" name="soso" id="" />
          </form>

          <button onClick={this.calculateSomething}> Click Me</button>
      </div>
    );
  }

}


export default App;
