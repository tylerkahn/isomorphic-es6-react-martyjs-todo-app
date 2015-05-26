from flask import Flask, jsonify
from flask.ext.cors import CORS

app = Flask(__name__)
cors = CORS(app, resources=r'/api/*', allow_headers="Content-Type")


class Todo(object):
    def __init__(self, id, body=None):
        self.id = id
        self.body = body

todos = {
    0: Todo(0, "hello world"),
    1: Todo(1, "create app"),
}


@app.route("/api/todos")
def todos():
    return jsonify(todos=todos.values())


@app.route("/api/todos/<id>")
def todo(id):
    if id in todos:
        return jsonify(todo=todos[id])
    else:
        return ('', 404)

if __name__ == "__main__":
    app.run(debug=True, port=5001)
