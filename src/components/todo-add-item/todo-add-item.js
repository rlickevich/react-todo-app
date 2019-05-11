import React, { Component } from 'react';

import './todo-add-item.css';

export default class TodoAddItem extends Component {

    render() {
        return (
            <div className="todo-add-item">
                <button 
                    className="btn btn-outline-secondary float-left"
                    onClick={() => this.props.onItemAdded('Hello world')}>
                    Add Item
                </button>
            </div>
        );
    }
}