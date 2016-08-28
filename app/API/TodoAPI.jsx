var $ = require('jquery');

// set and fetch TodoItem from localstorage
module.exports = {
    setTodos: function(todos) {
        if ($.isArray(todos)) {
            // array to string
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },

    getTodos: function () {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        // string to array, try catch block to check stringTodos valid object
        try {
            todos = JSON.parse(stringTodos)
        } catch (e) {

        }

        return $.isArray(todos) ? todos : [];
        
    }
};