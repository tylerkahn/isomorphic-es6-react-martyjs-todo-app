from flask import Flask, jsonify, request


app = Flask(__name__)


class Todo(object):
    counter = 0

    def __init__(self, body=None):
        self.id = Todo.counter
        Todo.counter += 1
        self.body = body

    def to_dict(self):
        return {
            'id': self.id,
            'body': self.body
        }


todos_store = {
    0: Todo("hello world"),
    1: Todo("create app")
}


@app.route("/api/todos")
def todos():
    return jsonify(todos=[t.to_dict() for t in todos_store.values()])


@app.route("/api/todos", methods=['POST'])
def todos_add():
    todo = Todo(request.form.get('body'))
    todos_store[todo.id] = todo
    return jsonify(todo=todo.to_dict()), 201


@app.route("/api/todos/<int:id>")
def todo(id):
    if id in todos_store:
        return jsonify(todo=todos_store[id].to_dict())
    else:
        return '', 404


@app.route("/api/todos/<int:id>", methods=['DELETE'])
def todo_delete(id):
    if id in todos_store:
        del todos_store[id]
        return '', 204
    else:
        return '', 404


if __name__ == "__main__":
    app.run(debug=True, port=5001)
