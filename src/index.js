import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';

import './index.css';

const App = () => {

    const todoData = [
        {
            id: 1,
            label: 'Drink Coffee',
            important: false
        },
        {
            id: 2,
            label: 'Make Awesome App',
            important: true
        },
        {
            id: 3,
            label: 'Have a lunch',
            important: false
        }
    ]

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));