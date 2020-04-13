import React, { Component } from "react";
import Navigation from "./components/Navigation";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appBarTitle: "Tienda Web",
    };
  }

  render() {
    return (
      <div>
        <Navigation barTitle={this.state.appBarTitle} />
      </div>
    );
  }
}

export default App;
