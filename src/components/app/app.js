import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import TodoAddItem from '../todo-add-item';

import './app.css';

export default class App extends Component {

    constructor() {
        super();

        this.createTodoItem = (label) => {
            return {
                label,
                important: false,
                done: false,
                id: this.maxId++
            }
        };

        this.maxId = 100;

        this.state = {
            todoData: [
                this.createTodoItem('Drink Coffee'),
                this.createTodoItem('Make Awesome App'),
                this.createTodoItem('Have a lunch')
            ]
        };

        this.deleteItem = (id) => {
            this.setState(({ todoData }) => {
                const idx = todoData.findIndex((el) => el.id === id);
                const newArray = [
                    ...todoData.slice(0, idx),
                    ...todoData.slice(idx + 1)
                ];

                return {
                    todoData: newArray
                };
            });
        };

        this.addItem = (text) => {
            const newItem = this.createTodoItem(text);

            this.setState(({ todoData }) => {
                const newArray = [
                    ...todoData,
                    newItem
                ];

                return {
                    todoData: newArray
                };
            });
        };

        this.onToggleImportant = (id) => {
            console.log('toggle important', id);
        };

        this.onToggleDone = (id) => {
            console.log('toggle done', id);
        };
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={ 1 } done={ 3 } />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={ this.state.todoData }
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone } />
                <TodoAddItem onItemAdded={ this.addItem } />
            </div>
        );
    };
};