import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {

    const items = ['Learn React', 'Build Awesome App'];

    return (
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App</li>
        </ul>
    );
};

const AppHeader = () => {
    return <h1>My Todo List</h1>
};

const SearchPanel = () => {
    const searchText = 'Type here to search';

    return <input placeholder={ searchText } />
};

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));