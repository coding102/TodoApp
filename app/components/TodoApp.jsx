var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: [
                {
                    id: 1,
                    text: 'walk the dog'
                }, {
                    id: 2,
                    text: 'clean my room'
                }, {
                    id: 3,
                    text: 'clean the yard'
                }, {
                    id: 4,
                    text: 'need to exercise'
                }
            ]
        };
    },

    handleAddTodo: function (text) {
        alert('new todo: ' + text);
    },

    render: function () {
        // es6 destructuring
        // var {todos} = this.state;

        return (
            <div>
                <TodoList todos={this.state.todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
})

module.exports = TodoApp;