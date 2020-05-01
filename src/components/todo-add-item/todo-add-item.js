import React, { Component } from 'react';

import './todo-add-item.css';

export default class TodoAddItem extends Component {
  render() {
    return (
      <form className="todo-add-item">
        <input
          type="text"
          className="form-control"
          onChange={this.onLableChange}
          placeholder="What needs to be done"
        />
        <button
          className="btn btn-outline-secondary float-left"
          onClick={() => this.props.onItemAdded('Hello world')}
        >
          Add Item
        </button>
      </form>
    );
  }
}
