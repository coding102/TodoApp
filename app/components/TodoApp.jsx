var React = require('react');
var TodoList = require('TodoList');

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

    render: function () {
        // es6 destructuring
        // var {todos} = this.state;

        return (
            <div>
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
})

module.exports = TodoApp;