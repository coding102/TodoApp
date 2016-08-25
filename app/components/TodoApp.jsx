var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
// generates unique id "npm install node-uuid --save-dev"
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'walk the dog'
                }, {
                    id: uuid(),
                    text: 'clean my room'
                }, {
                    id: uuid(),
                    text: 'clean the yard'
                }, {
                    id: uuid(),
                    text: 'need to exercise'
                }
            ]
        };
    },

    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos, 
                {
                    id: uuid(),
                    text: text
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

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={this.state.todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
})

module.exports = TodoApp;