/* eslint-disable no-param-reassign */
import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterButtons: [
        {
          id: 1,
          label: 'All',
          status: 'all',
        },
        {
          id: 2,
          label: 'Active',
          status: 'active',
        },
        {
          id: 3,
          label: 'Done',
          status: 'done',
        },
      ],
    };
  }

  render() {
    const { filterButtons } = this.state;
    const { status, onChangeStatusFilter } = this.props;

    return (
      <div className="btn-group">
        {filterButtons.map((button) => {
          const isActive = button.status === status;
          const classNames = isActive ? 'btn-info' : 'btn-outline-secondary';

          return (
            <button
              key={button.id}
              type="button"
              className={`btn ${classNames}`}
              onClick={() => onChangeStatusFilter(button.status)}
            >
              {button.label}
            </button>
          );
        })}
      </div>
    );
  }
}
