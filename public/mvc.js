
$(document).ready(function() {
  let route = window.location.hash.slice(1);
  const app = new MVC(); // get instance

  $(window).on('hashchange', function(){      // call routes on hash change
    const route = window.location.hash.slice(1);
    app.emit('GET', route); // emit get calls
  });
  if (!route) {
    window.location = '/#/home'
  } else {
    app.emit('GET', route); // emit get calls when page loads
  }
});

let instance = null;

class MVC extends EventEmitter {
  constructor() {
    super();
    // singleton
    if (instance) {
      return instance;
    }
    this.components = [];

    this.on('GET', (url) => {
      const matchedRoute = this.router(url);
      this.emit(matchedRoute.signal, matchedRoute.params, this);
    });

    instance = this;
  }

  renderAt(index) {
    this.index = index;
  }

  async loadTemplate(path) {
    return fetch(path, {mode: 'no-cors'})
      .then(response => response.text());
  }

  async render(obj) {
    if (obj.errorCheck()) {
      return;
    }
    if (!this.index) {
      console.error('ERROR: NO INDEX DEFINED');
    }
    const idx = this.components.findIndex(component => (obj.template === component.template));
    if (idx === -1) {
      const txt = await this.loadTemplate(obj.template);
      this.components.push({
        template: obj.template,
        txt,
      });
      await this.screenMap(obj, txt);
      console.log('called load')
      obj.onLoad();
    } else {
      const txt = this.components[idx].txt;
      await this.screenMap(obj, txt);
      console.log('called non load')
      obj.onLoad();
    }
  }

  async screenMap(obj, txt) {
    const view = await obj.view();
    const html = await Mustache.render(txt, view);
    $(this.index).html(html);
  }

  router(url) {
    // https://stackoverflow.com/questions/37737499/simple-javascript-url-routing-regex/40739605
    // this._events is the list of event listeners
    const _url = 'GET' + url;

    // sort longest path first
    const routes = Object.keys(this._events).sort((a,b) => (b.length - a.length));

    const regexArr = routes.map((path) => {
      const str = path.replace(/:[^\s/]+/g, '([\\w-]+)');
      const regex = new RegExp(`^${str}$`);
      const names = path.match(/:[^\\s/]+/g);
      return {
        regex,
        path,
        names: (names ? names.map(name => name.substring(1)) : []),
      };
    });

    for (let i = 0, l = regexArr.length; i < l; i++) {
      const { regex, path, names } = regexArr[i];
      const found = _url.match(regex);
      if (found) {
        let params = {};
        for (let i = 0; i < names.length; i++) {
          const name = names[i];
          params[name] = found.slice(1)[i];
        }
        return {
          signal: path,
          params,
        };
      }
    }
    return [];
  }

  get(url, callback) {
    // wrapper for event emitter 'on'
    this.on('GET' + url, callback);
  };

  goTo(route) {
    location.hash = route;
  }
}

class View {
  constructor() {
    this.template = '';
    this.state = {};
  }

  onLoad() {

  }

  errorCheck() {
    if (!this.template) {
      console.error('ERROR: COMPONENT HAS NO TEMPLATE');
      return true;
    }
    if (typeof this['view'] !== 'function') {
      console.error('ERROR: COMPONENT HAS NO VIEW');
    }
    return false;
  }

  setState(state) {
    if (state) {
      this.state = { ...this.state, ...state };
    }
  }
}
