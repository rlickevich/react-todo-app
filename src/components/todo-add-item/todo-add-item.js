import React, { Component } from 'react';

import './todo-add-item.css';

export default class TodoAddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: '',
    };

    this.onLableChange = (e) => {
      this.setState({
        label: e.target.value,
      });
    };

    this.onSubmit = (e) => {
      e.preventDefault();
      this.props.onItemAdded(this.state.label);
      this.setState({
        label: '',
      });
    };
  }

  render() {
    return (
      <form className="todo-add-item d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLableChange}
          placeholder="What needs to be done"
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary">Add Item</button>
      </form>
    );
  }
}
