import React from "react";
import "./App.css";
import Form from "./component/Form";
import Submitted from "./component/Submitted";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tkt: 0,
    };
  }

  register = () => {
    if (this.state.tkt === 0) {
      return <Form compte={this.count} />;
    } else {
      return <Submitted />;
    }
  };

  count = () => {
    let counter = this.state.tkt;
    counter++;
    this.setState({ tkt: counter });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.register()}</div>
      </div>
    );
  }
}

export default App;
