import React, {Component} from 'react';

class TaskForm extends Component<any, any> {

  handleNewTask(ev: React.FormEvent) {
    ev.preventDefault();
    alert('saving')
  }

  render() {
    return (
      <div className="card card-body">
        <form onSubmit={e => this.handleNewTask(e)}>
          <input type="text" placeholder="Task Title" className="form-control" />
          <textarea className="form-control" placeholder="Task Description"></textarea>
          <button type="submit" className="btn btn-primary btn-block"> Save </button>
        </form>
      </div>
    )
  }
}

export default TaskForm;