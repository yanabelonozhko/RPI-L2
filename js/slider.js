/*Динамическое создание слайдера*/
let new_products = document.querySelector('.new-products');

let new_products_photo = document.createElement('div');
new_products_photo.className = "new-products-photo";
new_products.append(new_products_photo);

let new_products_photo_slider = document.createElement('div');
new_products_photo_slider.className = "new-products-photo-slider";

new_products_photo.append(new_products_photo_slider);


let el1 = document.createElement('div');
el1.className = "p";
let el2 = document.createElement('div');
el2.className = "p";
let el3 = document.createElement('div');
el3.className = "p";
let el4 = document.createElement('div');
el4.className = "p";
let el5 = document.createElement('div');
el5.className = "p";
let el6 = document.createElement('div');
el6.className = "p";

new_products_photo_slider.append(el1);
new_products_photo_slider.append(el2);
new_products_photo_slider.append(el3);
new_products_photo_slider.append(el4);
new_products_photo_slider.append(el5);
new_products_photo_slider.append(el6);

let el2Content = document.createElement('ul');
el2Content.className = "img-baby-text img-p2-text";
el2Content.style.padding = "73px 39px 72px 39px";
el2.appendChild(el2Content);
let a1 = document.createElement('a');
a1.href = "";
let a2 = document.createElement('a');
a2.href = "";
a2.title = "add to wishlist";
a2.className = "img-gift-icon";
let a3 = document.createElement('a');
a3.href = "";
a3.className = "img-cart-icon";
a3.title = "buy";

let a_li1 = document.createElement('li');
a_li1.className = "img-babyshop";
a_li1.title = "baby shop";
a_li1.textContent = "Baby Shop";
let a_li2 = document.createElement('li');
a_li2.className = "fa fa-gift fa-2x";
let a_li3 = document.createElement('li');
a_li3.className = "fa fa-shopping-cart fa-2x";

el2Content.append(a1);
el2Content.append(a2);
el2Content.append(a3);

a1.append(a_li1);
a2.append(a_li2);
a3.append(a_li3);

let img_baks = document.createElement('li');
img_baks.className = "img-baks";
el2Content.append(img_baks);


let img_baks_span = document.createElement('span');
img_baks_span.style.fontSize = "24px";
img_baks_span.textContent = "99";
let img_baks_sup = document.createElement('sup');
img_baks_sup.textContent = "00";

img_baks.append(img_baks_span);
img_baks.append(img_baks_sup);

console.log(new_products_photo);
/*Динамическое создание слайдера*/

let position1 = 0;
let position2 = 0;
let curr_baby = 2;
let right_dir = true;
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
  position2 += movePosition;
  SetPosition();
  checkButtons();
});

btnNext.addEventListener("click", () => {
  position2 -= movePosition;
  SetPosition();
  checkButtons();
});

btnPrev2.addEventListener("click", () => {
  position1 += movePosition2;
  right_dir = false;
  SetPosition1();
  checkButtons1();
  curr_baby--;
  console.log("prev");
});

btnNext2.addEventListener("click", () => {
  position1 -= movePosition2;
  right_dir = true;
  SetPosition1();
  checkButtons1();
  curr_baby++;
  console.log("next");
});

const SetPosition1 = () => {
  products.style.transform = `translateX(${position1}px)`;
  switch (curr_baby) {
    case 2:
      {
        el2.removeChild(el2Content);
        el3.appendChild(el2Content);
        console.log(el2Content);
      }
      break;
    case 3:
      {
        el3.removeChild(el2Content);
        right_dir ? el4.appendChild(el2Content) : el2.appendChild(el2Content);
        console.log(el2Content);
      }
      break;
    case 4:
      {
        el4.removeChild(el2Content);
        right_dir ? el5.appendChild(el2Content) : el3.appendChild(el2Content);
        console.log(el2Content);
      }

      break;
    case 5:
      {
        el5.removeChild(el2Content);
        right_dir ? el6.appendChild(el2Content) : el4.appendChild(el2Content);
        console.log(el2Content);
      }
      break;
    default:
      right_dir ? curr_baby = 5 : curr_baby = 2;
      break;

  }
};

const checkButtons1 = () => {

  btnPrev2.disabled = position1 === 0;
  btnNext2.disabled = position1 <= (itemsCount - 4) * itemW * - 1;
};

const SetPosition = () => {
  track1.style.transform = `translateX(${position2}px)`;
  track2.style.transform = `translateX(${position2}px)`;
  track3.style.transform = `translateX(${position2}px)`;
};

const checkButtons = () => {
  btnPrev.disabled = position2 === 0;
  btnNext.disabled = position2 <= (itemsCount - 4) * itemW * -1;
};

checkButtons();
checkButtons1();
