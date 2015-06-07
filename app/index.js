import Marty from 'marty';
import path from 'path';
// Dynamically require in everything within the 'actions', 'queries', 'sources' and 'stores' folders
let context = require.context("./", true, /(actions|queries|sources|stores)/);

export default class Application extends Marty.Application {
  constructor(options) {
    super(options);

    context.keys().forEach((key) =>  {
      if (!/\.js/.test(key)) {
        let id = path.basename(key);
        this.register(id, context(key));
      }
    });
    this.router = require('./router');
  }
}
