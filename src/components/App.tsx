import React, {Component} from 'react';
import Hello from './Hello';

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
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
      </div>
    )
  }
}

interface IProps {
  title: string;
}
interface IState {
  tasks: []
}

export default App;