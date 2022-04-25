    let position = 0;
    const SlidesToShow = 6;
    const SlidesToScroll = 1;
    const container = document.querySelector('.futured-products-photo-photo');
    const track1 = document.querySelector('.futured-products-photo-photo-slider');
    const track2 = document.querySelector('.futured-products-photo-desc-slider');
    const track3 = document.querySelector('.futured-products-photo-buttons-slider');
    const item = document.querySelector('.d1'); 
    const btnPrev = document.querySelector('.menu-button21');
    const btnNext = document.querySelector('.menu-button22');

    // ширина элемента стандартно = 270 px. при делении получаем 
    const itemW = (track1.clientWidth / SlidesToShow) ;
    const itemsCount = 6;
    const movePosition = 300; 
    
    btnPrev.addEventListener('click',() => {
        position += movePosition;
        SetPosition();
        checkButtons();
    });

    btnNext.addEventListener('click',() => {
        position -= movePosition;
        SetPosition();
        checkButtons();
    });

const SetPosition = () => {
    track1.style.transform = `translateX(${position}px)`;
    track2.style.transform = `translateX(${position}px)`;
    track3.style.transform = `translateX(${position}px)`;
};

const checkButtons = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= (((itemsCount - 4) * itemW )*-1);
};

checkButtons();