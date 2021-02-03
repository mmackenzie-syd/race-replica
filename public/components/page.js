const page = {
  cnt: 1,
  template: 'components/page.html',
  selected: '',
  stooges: [
    { name: "Moe" },
    { name: "Larry" },
    { name: "Curly" }
  ],
  hello: function(name) {
    this.selected = name;
    app.render(this);
  },
  increment: function() {
    this.cnt = this.cnt + 1;
    app.render(this);
  },
  state: function() {
      return {
        firstName: 'Christophe',
        lastName: 'Coenraets',
        blogURL: 'http://coenraets.org',
        cnt: this.cnt,
        stooges: this.stooges,
        selected: this.selected,
      };
  }
};

