
class Articles extends View {
  constructor(args) {
    super(args);
    this.template = 'components/articles/articles.html';
    this.state = {};
  }

  async loadFile(filename) {
    const path = `data/specs/${filename}`;
    return fetch(path, {mode: 'no-cors'})
      .then(response => response.text());
  }

  onTypeChange(type) {
    const model = Object.keys(DATA[type])[0];
    app.goTo(`/articles/${type}/${magazine}`)
  }

  onModelChange(model) {
    const type = this.state.selectedType;
    app.goTo(`/articles/${type}/${model}`)
  }

  getSelectedType(type, selectedType) {
    return ((type === selectedType) ?  { selected: 'selected' } : null);
  }

  getSelectedMagazine(magazine, selectedMagazine) {
    return ((model === selectedModel) ?  { selected: 'selected' } : null);
  }

  setState(state) {
    const selectedType = state.selectedType || 'GSX400';
    const selectedMagazine = state.selectedMagazine || 'Two_Wheels_1982';
    this.state = {
      selectedType,
      selectedMagazine
    }
  }

  async view() {
    const { selectedType, selectedMagazine } = this.state;
    const filename = MAGAZINES[selectedType][selectedMagazine];

    const types = Object.keys(MAGAZINES).map(key => ({
      type: key,
      ...this.getSelectedType(key, selectedType)
    }));
    const magazines = Object.keys(MAGAZINES[selectedType]).map(key => ({
      magazine: key,
      ...this.getSelectedType(key, selectedMagazine)
    }));

    console.log('state--', types, magazines)

    return {
      magazines,
      types
    };
  }

}
//
const articles = new Articles();

//
// 'GSX400': {
//   'Two_Wheels_1982': 'gsx400apr1982.html',
// },
// 'GSXR-400': {
//   "AMCN_1984": 'gsxr400nov1984.html',
//     "Two_Wheels_Jan_85": 'gsxr400jan1985.html',
//     "Two_Wheels_Jul_85": 'gsxr400jul1985.html',
// },
// 'GSXR-750': {
//   "Two_Wheels_1985": 'gsxr750aug.html',
// },
// 'GS1000': {
//   'Two_Wheels_1980': 'gs1000feb1980.html',
//     'Classic_Motor_Bikes': 'gs1000mar2012.html',
//     'Sports_Bike': 'gs1000may1984.html',
// }

//
//
// switch(params.action){
//   case 'NEW_TYPE':
//     state.type = params.type;
//     state.types = service.types;
//     state.articles = [];
//     state.page = 1;
//     service.getArticles(params.type).forEach(function(article){
//
//       state.articles.push(article.title);
//     });
//
//     state.article = state.articles[0];
//
//     service.getArticle(params.type, state.article).then(function(res){
//
//       state.file = res;
//
//       state.render('Articles', articles);
//
//     }, function(rej){
//
//       console.log(rej);
//     })
//
//     break;
//
//   case 'NEW_ARTICLE':
//     state.types = service.types;
//     state.type = params.type;
//     state.article = params.article;
//
//     state.articles = [];
//     state.page = 1;
//     service.getArticles(params.type).forEach(function(article){
//
//       state.articles.push(article.title);
//     });
//
//     service.getArticle(params.type, params.article).then(function(res){
//
//       state.file = res;
//
//       state.render('Articles', articles);
//
//     }, function(rej){
//
//       console.log(rej);
//     })
//
//     break;
//   default:
//     params.type = 'GSXR-400';
//     params.article = 'Two Wheels Jan 85';
//     state.type = params.type;
//     state.types = service.types;
//     state.article = params.article;
//     state.articles = [];
//     state.page = 1;
//     service.getArticles(params.type).forEach(function(article){
//       state.articles.push(article.title);
//     });
//
//     service.getArticle(params.type, params.article).then(function(res){
//
//       state.file = res;
//
//       state.render('Articles', articles);
//
//     }, function(rej){
//
//       console.log(rej);
//     })
//
//     break;
// }
