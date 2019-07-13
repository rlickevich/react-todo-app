import React from 'react';
import './app-header.css';
import PropTypes from "prop-types";

const AppHeader = ({toDo, done}) => 
  toDo && done ? (
    // if a todo and done is passed in, return the props else return null
  <div className="app-header d-flex">
    <h1>Todo List</h1>
    <h2 className="todo-done">{toDo} more to do, {done} done</h2>
  </div>

): null

// throws an error if either of these are missing. 
AppHeader.propTypes = {
  toDo: PropTypes.number,  
  done: PropTypes.number, 
}


export default AppHeader;