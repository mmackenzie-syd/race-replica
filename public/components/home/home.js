
class Home extends View {
  constructor() {
    super();
    this.template = 'components/home/home.html';
  }

  view() {
    return {
      firstName: this.firstName,
      lastName: 'Mackenzie',
    };
  }
}

const home = new Home();

let bikeColor = 'RED'; // default color

function setSlide() {
    const slide = document.getElementById("slider").value;
    const img = document.getElementById('img');
    const src = `slide/SV800MY20-${bikeColor}${slide}.png`
    img.src = src;
}

function onBikeColorClick(color) {
    bikeColor = color;
    setSlide();
}

function onInput() {
    setSlide();
}
