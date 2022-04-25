    let position = 0;
    const SlidesToShow = 6;
    const SlidesToScroll = 1;
    const container = document.querySelector('.futured-products-photo-photo');
    const track = document.querySelector('.futured-products-photo-photo-slider');
    const item = document.querySelector('.d1');

    // ура, оно работает 
    const btnPrev = document.querySelector('.menu-button21');
    const btnNext = document.querySelector('.menu-button22');

    // ширина элемента стандартно = 270 px. приделении получаем 
    const itemW = (track.clientWidth / SlidesToShow) ;
    const itemsCount = 6;
    const movePosition = 300; 


    btnPrev.addEventListener('click',() => {
        position += movePosition;
        console.log('prevvvvv');
        SetPosition();
        checkButtons();
    });

    btnNext.addEventListener('click',() => {
        console.log('nexttt');
        position -= movePosition;
        SetPosition();
        checkButtons();
    });



const SetPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkButtons = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= (((itemsCount - 4) * itemW )*-1);
};

checkButtons();