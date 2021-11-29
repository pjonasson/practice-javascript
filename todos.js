/* global Vue, axios */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      todos: [],
    };
  },

  created: function () {
    this.loadTodos();
  },

  methods: {
    loadTodos: function () {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        console.log(response.data);
        this.todos = response.data;
      });
    },
  },
});
