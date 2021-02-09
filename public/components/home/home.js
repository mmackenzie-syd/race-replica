

class Home extends View {
  constructor() {
    super();
    this.template = 'components/home/home.html';
    this.state = {
        slide: 17,
        bikeColor: 'RED'
    }
  }
  view() {
      // const image = `slide/SV800MY20-${bikeColor}${slide}.png`;
      // return {
      //     image
      // }
      // this method causes flicker, so commented until I work out why
  }

  setImage() {
      // temporary until work out the flickering
      const { bikeColor, slide } = this.state;
      const img = document.getElementById('img');
      const src = `slide/SV800MY20-${bikeColor}${slide}.png`
      img.src = src;
  }

  onBikeColorClick(bikeColor) {
    this.setState({ bikeColor: bikeColor });
    console.log('state', this.state, bikeColor)
    // app.render(this);
      this.setImage();
  }

  // onInput() {} for slider that as removed for the moment

  nextSlide() {
    let { slide } = this.state;
    if ((slide - 1) > -1) {
        slide = slide -1;
        this.setState({ slide })
        // app.render(this); -- causes flicker
        this.setImage();
    }
  }

  prevSlide() {
    let { slide } = this.state;
    if ((slide + 1) < 36) {
        slide = slide + 1;
        this.setState({ slide })
        // app.render(this); -- causes flicker
        this.setImage()
    }
  }
}

const home = new Home();
