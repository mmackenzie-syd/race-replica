
class Specs extends View {
  constructor(args) {
    super(args);
    this.template = 'components/specs/specs.html';
  }

  async loadFile(filename) {
    const path = `data/specs/${filename}`;
    return fetch(path, {mode: 'no-cors'})
      .then(response => response.text());
  }

  onTypeChange(type) {
    const model = Object.keys(DATA[type])[0];
    app.goTo(`/specs/${type}/${model}`)
  }

  onModelChange(model) {
    const type = this.state.selectedType;
    app.goTo(`/specs/${type}/${model}`)
  }

  getSelectedType(type, selectedType) {
    return ((type === selectedType) ?  { selected: 'selected' } : null);
  }

  getSelectedModel(model, selectedModel) {
    return ((model === selectedModel) ?  { selected: 'selected' } : null);
  }

  async view() {
    const { selectedType, selectedModel } = this.state;
    const modelsByType = Object.keys(DATA[selectedType]);
    const models = modelsByType.map(model => ({ model: model, ...this.getSelectedModel(model, selectedModel) }));
    const types = Object.keys(DATA).map(bike => ({ type: bike, ...this.getSelectedType(bike, selectedType) }));
    const filename = DATA[selectedType][selectedModel].file;
    const specJson = await this.loadFile(filename);
    const spec = JSON.parse(specJson);
    return { models, types, ...spec };
  }

}

const specs = new Specs();
