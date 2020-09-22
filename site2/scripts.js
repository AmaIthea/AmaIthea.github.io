
    let position = 0;
    const slidesToShow = 3;
    const slidesToScroll = 2;
    const container = document.querySelector('.sliderConteiner');
    const track = document.querySelector('.sliderConteiner__sliderTrak');
    const item = document.querySelector('.sliderConteiner__sliderItem');
    const btnPrev = document.querySelector('.btnPrev');
    const btnNext = document.querySelector('.btnNext');
    const itemsCount = items.length;
    const items = document.querySelectorAll('.sliderConteiner__sliderItem')
    const itemWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    item.each(function(index, item){
        $(item).css({
            minWidth: itemWidth,

        })
    });
    btnNext.click( function(){
        const itemsLeft = (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= movePosition >= slidesToScroll ? movePosition: itemsLeft * itemWidth;
        setPosition();
        checkBtns();
    });
    btnPrev.click( function(){

        position += movePosition;
        setPosition();
        checkBtns();
    });
    

const setPosition = () => {
    track.css({
        transform: `translateX(${position}px)`
    });
    
}; 
const checkBtns = () => {
    btnPrev.prop('disabled', position === 0);
    btnNext.prop(
        'disabled', 
        position <= -(itemsCount - slidesToShow) * itemWidth
    );
};

checkBtns();







