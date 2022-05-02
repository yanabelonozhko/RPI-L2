let position = 0;
const SlidesToShow = 6;
const SlidesToScroll = 1;
const SlidesToShow2 = 3;
const container = document.querySelector(".futured-products-photo-photo");
const track1 = document.querySelector(".futured-products-photo-photo-slider");
const track2 = document.querySelector(".futured-products-photo-desc-slider");
const track3 = document.querySelector(".futured-products-photo-buttons-slider");
const container2 = document.querySelector(".new-products-photo");
const products = document.querySelector(".new-products-photo-slider");
const product = document.querySelector(".p");
const item = document.querySelector(".d1");
const btnPrev = document.querySelector(".menu-button21");
const btnNext = document.querySelector(".menu-button22");
const btnPrev2 = document.querySelector(".prev-menu-button");
const btnNext2 = document.querySelector(".next-menu-button");

// ширина элемента стандартно = 270 px. при делении получаем
const itemW = track1.clientWidth / SlidesToShow;
const itemW2 = products.clientWidth / SlidesToShow2;
const itemsCount = 6;
const movePosition = 300;
const movePosition2 = 390;

btnPrev.addEventListener("click", () => {
  position += movePosition;
  SetPosition();
  checkButtons();
});

btnNext.addEventListener("click", () => {
  position -= movePosition;
  SetPosition();
  checkButtons();
});

btnPrev2.addEventListener("click", () => {
  position += movePosition2;
  SetPosition1();
  checkButtons1();
  console.log("prev");
});

btnNext2.addEventListener("click", () => {
  position -= movePosition2;
  SetPosition1();
  checkButtons1();
  console.log("next");
});

const SetPosition = () => {
  track1.style.transform = `translateX(${position}px)`;
  track2.style.transform = `translateX(${position}px)`;
  track3.style.transform = `translateX(${position}px)`;
};

const SetPosition1 = () => {
  products.style.transform = `translateX(${position}px)`;
};

const checkButtons = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= (itemsCount - 4) * itemW * -1;
};

const checkButtons1 = () => {
  btnPrev2.disabled = position === 0;
  btnNext2.disabled = position <= (itemsCount - 4) * itemW * -1;
};

checkButtons();

checkButtons1();
