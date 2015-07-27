#isomorphic-es6-react-martyjs-todo-app

##Quick start


    npm install -g webpack webpack-dev-server gulp
    npm install
    pip install -r requirements.txt

    python todo-api.py # start API server
    gulp               # start js app stack

Open [http://localhost:5003/todos](http://localhost:5003/todos) in browser

Also try using curl to verify that this is all isomorphic

## Overview

- port 5000: express server serving the app
- port 5001: python API server
- port 5002: webpack-dev-server
- port 5003: proxy server (reverse proxies requests to /api/ to API server)

Whenever you save a file in the `app` folder, `server/index.js` is run through webpack (using webpack.config.server.js) and the server process is restarted. Additionally, webpack-dev-server runs with target `app/main.js` using webpack.config.client.js in --hot mode  and code changes are reflected in real-time in the browser.
