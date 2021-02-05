
class Articles extends View {
  constructor(args) {
    super(args);
    this.template = 'components/articles/articles.html';
    this.state = {};
    this.file='';
    this.loaded = false;
    this.next = false;
    this.prev = false;
  }

  onLoad() {
      const number_of_columns = 4;
      const desired_column_height = 510; // in pxs
      const identifier = '.articles-content-col'
      document.getElementById('hiddenTxt').innerHTML = articles.file;
      PageAlgo.initialise(number_of_columns, desired_column_height, identifier);
      PageAlgo.First();
      setTimeout(() => {
          PageAlgo.First();
      }, 200);
  }

  async loadFile(filename) {
    const path = `data/articles/${filename}`;
    return fetch(path, {mode: 'no-cors'})
      .then(response => response.text());
  }

  onPrevPage() {
      PageAlgo.Prev();
  }

  onNextPage() {
      PageAlgo.Next();
  }

  onTypeChange(type) {
    const magazine = Object.keys(MAGAZINES[type])[0];
    app.goTo(`/articles/${type}/${magazine}`)
  }

  onMagazineChange(magazine) {
    const type = this.state.selectedType;
    app.goTo(`/articles/${type}/${magazine}`)
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
      this.filename = filename;
      this.file = await this.loadFile(filename);
      return {
         magazines,
         types
      };
  }

}
//
const articles = new Articles();
