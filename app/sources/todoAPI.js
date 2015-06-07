var Marty = require('marty');

var TodoAPI = Marty.createStateSource({
  type: 'http',
  getById(id) {
    return this.get('http://localhost:5001/api/todos/' + id);
  },
  getAll() {
    return this.get('http://localhost:5001/api/todos');
  }
});

module.exports = TodoAPI;
