
class Photos extends View {
  constructor(args) {
    super(args);
    this.template = 'components/photos/photos.html';
  }

  getPhotos(type, model, page) {
    const count = DATA[type][model].imageCount;
    const pages = count / 8;
    const start = (count / 8) * (Number(page) - 1);
    const end = ((start + 8) >= count) ? count : (start + 8);
    const baseAddr = `data/photos/${type}/${model}/`;
    const images = [];
    for( let i = start + 1; i < end + 1; i++) {
      images.push({
        href: baseAddr + `img${i}.jpg`,
        src: baseAddr + `thbs/img${i}.jpg`,
      });
    }
    return { images, pages };
  }

  onTypeChange(type) {
    const modelsByType = Object.keys(DATA[type]);
    const filteredModels = modelsByType.filter((model) => {
      const count = DATA[type][model].imageCount;
      return (count !== 0);
    });
    app.goTo(`/photos/${type}/${filteredModels[0]}/1`)
  }

  onModelChange(model) {
    const type = this.state.selectedType;
    app.goTo(`/photos/${type}/${model}/1`)
  }

  getSelectedType(type, selectedType) {
    return ((type === selectedType) ?  { selected: 'selected' } : null);
  }

  getSelectedModel(model, selectedModel) {
    return ((model === selectedModel) ?  { selected: 'selected' } : null);
  }

  onNextPage () {
      console.log('next page')
    const { selectedType, selectedModel, page } = this.state;
    const count = DATA[selectedType][selectedModel].imageCount;
    const nextPage = ((page + 1) * 8 > count) ? page : (page + 1);
    app.goTo(`/photos/${selectedType}/${selectedModel}/${nextPage}`);
  };

  onPrevPage() {
    const { selectedType, selectedModel, page } = this.state;
    const prevPage = ((page - 1) === 0) ? 1 : (page - 1);
    app.goTo(`/photos/${selectedType}/${selectedModel}/${prevPage}`);
  };

  view() {
    const { selectedType, selectedModel, page } = this.state;
    const modelsByType = Object.keys(DATA[selectedType]);
    const models = modelsByType.map(model => ({ model: model, ...this.getSelectedModel(model, selectedModel) }));
    const types = Object.keys(DATA).map(bike => ({ type: bike, ...this.getSelectedType(bike, selectedType) }));
    const filteredModels = models.filter(({ model }) => {
      const count = DATA[selectedType][model].imageCount;
      return (count !== 0);
    })
    const { images, pages } = this.getPhotos(selectedType, selectedModel, page);
    return { models: filteredModels, types, images, page, pages };
  }

}

const photos = new Photos();
