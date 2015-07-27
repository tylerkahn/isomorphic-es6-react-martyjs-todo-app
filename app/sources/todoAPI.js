import Marty from 'marty';

export default Marty.createStateSource({
  type: 'http',
  getById(id) {
    return this.get('/api/todos/' + id);
  },
  getAll() {
    return this.get('/api/todos');
  },
  create(body) {
    let form = new FormData();
    form.append('body', body);
    return this.post({
      url: '/api/todos',
      body: form
    })
  }
});
