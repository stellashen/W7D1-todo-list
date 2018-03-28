import React from 'react';
import createId from '../../util/create_id';
export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.createNewTodo = this.createNewTodo.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  createNewTodo(e) {
    e.preventDefault();
    const todo = Object.assign({}, { id: createId() }, this.state);
    this.props.receiveTodo(todo);
    // reset form
    this.setState({
      title: "",
      body: ""
    });
  }

  checkBoxState() {
    const checkbox = document.getElementById('done');
    checkbox.addEventListener('change', () => {
      console.log(checkbox);
      if (checkbox.value === "true") {
        this.setState({done: true});
      } else {
        this.setState({done: false});
      }
    });
  }

  render() {
    return (
      <form className="todo-form" onSubmit={ this.createNewTodo }>
        <label>Title
        <input
          onChange={this.update('title')}
          type="text"
          value={this.state.title}/>
        </label>

        <br/>

        <label>Body
          <textarea
            onChange={this.update('body')}
            value={this.state.body}></textarea>
        </label>

        <br/>
        <button id="submit-new-todo">Create new todo!</button>
      </form>
    );
  }
}
