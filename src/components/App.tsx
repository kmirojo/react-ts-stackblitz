import React, { Component } from "react";
import Hello from "./Hello";
import TaskForm from "./TaskForm";

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      tasks: []
    };
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            {this.props.title}
          </a>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <TaskForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

interface IProps {
  title: string;
}
interface IState {
  tasks: [];
}

export default App;
