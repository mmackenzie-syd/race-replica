
class Home extends View {
  constructor() {
    super();
    this.template = 'components/home/home.html';
  }

  view() {
    return {};
  }
}

const home = new Home();

let bikeColor = 'RED'; // default color

let slide = 17;

function setSlide() {
    // const slide = document.getElementById("slider").value;
    // const img = document.getElementById('img');
    // const src = `slide/SV800MY20-${bikeColor}${slide}.png`
    // img.src = src;
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

function nextSlide() {
    console.log('clicked')
    if ((slide - 1) > -1) {
        slide = slide -1;
        const img = document.getElementById('img');
        const src = `slide/SV800MY20-${bikeColor}${slide}.png`
        img.src = src;
    }
}

function prevSlide() {
    if ((slide + 1) < 36) {
        slide = slide + 1;
        const img = document.getElementById('img');
        const src = `slide/SV800MY20-${bikeColor}${slide}.png`
        img.src = src;
    }
}
