var React = require('react');
// generates unique id "npm install node-uuid --save-dev"
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        };
    },
    // lifecycle method updates after props or state changes
    componentDidUpdate: function () {
        TodoAPI.setTodos(this.state.todos);
    },

    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos, 
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        });
    },


    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },

    render: function () {
        // es6 destructuring
        // var {todos} = this.state;
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch} />
                            <TodoList />
                            <AddTodo onAddTodo={this.handleAddTodo} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;