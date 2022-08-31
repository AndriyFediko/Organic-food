// Carusel
let count = 0;
const sliderText = document.getElementById('sliderContet');
const userName = document.getElementById('userName');
const leftBtn = document.getElementById('buttonLeft');
const rightBtn = document.getElementById('buttonRight');
const firstSlide = document.querySelector('.slideOne');
const secondSlide = document.querySelector('.slideTwo');
const thirdSlide = document.querySelector('.slideThree');
leftBtn.onclick = function (){
    count--;
    checkCount()
    changeText()
}
rightBtn.onclick = function (){
    count++;
    checkCount()
    changeText()
}
function checkCount(){
    if(count > 2){
        count = 0;
    }
    if(count < 0){
        count = 2;
    }
}
function changeText(){
    switch(count){
        case 0:
            sliderText.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularis";
            userName.textContent = "Ahmed Hridoy";
            secondSlide.style.display = 'none';
            thirdSlide.style.display = 'none';
            firstSlide.style.display = 'flex';
        break
        case 1:
            sliderText.textContent = "a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularis";
            userName.textContent = "Alis Birtex";
            secondSlide.style.display = 'flex';
            thirdSlide.style.display = 'none';
            firstSlide.style.display = 'none';
        break
        case 2:
            sliderText.textContent = "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's";
            userName.textContent = "John Birtex";
            secondSlide.style.display = 'none';
            thirdSlide.style.display = 'flex';
            firstSlide.style.display = 'none';
        break
    }
}
// Carusel
document.querySelector('.navigationDropDown').onclick = function (){
    document.querySelector('.navigationDropDown__content').classList.toggle('dropDown__content__active');
    document.querySelector('.navigationDropdownArrow').classList.toggle('DropdownArrow__active');
}
document.querySelector('.ResourcesDropDown').onclick = function (){
    document.querySelector('.ResourcesDropDown__content').classList.toggle('dropDown__content__active');
    document.querySelector('.ResourcesDropdownArrow').classList.toggle('DropdownArrow__active');
}
document.querySelector('.ContactUsDropDown').onclick = function (){
    document.querySelector('.ContactUsDropDown__content').classList.toggle('dropDown__content__active');
    document.querySelector('.ContactUsDropdownArrow').classList.toggle('DropdownArrow__active');
}
document.querySelector('.burger').onclick = function burgerOpen(){
    document.querySelector('.burger').classList.toggle('burger__active');
    document.querySelector('.burgerTopLine').classList.toggle('burgerTopLine__active');
    document.querySelector('.burgerMiddleLine').classList.toggle('burgerMiddleLine__active');
    document.querySelector('.burgerBottomLine').classList.toggle('burgerBottomLine__active');
    document.querySelector('.burger__menu').classList.toggle('burger__menu-active');
    document.body.classList.toggle('scrollLock');
}
function burgerClose(){
    document.querySelector('.burger').classList.remove('burger__active');
    document.querySelector('.burgerTopLine').classList.remove('burgerTopLine__active');
    document.querySelector('.burgerMiddleLine').classList.remove('burgerMiddleLine__active');
    document.querySelector('.burgerBottomLine').classList.remove('burgerBottomLine__active');
    document.querySelector('.burger__menu').classList.remove('burger__menu-active');
    document.body.classList.remove('scrollLock');
}
document.getElementById('aboutScrollLink').onclick = function (){
    document.getElementById('aboutScroll').scrollIntoView({
        behavior: "smooth",
    });
}
document.getElementById('ServiceScrollLink').onclick = function (){
    document.getElementById('ServiceScroll').scrollIntoView({
        block: "center",
        behavior: "smooth",
    });
}
document.getElementById('MenuScrollLink').onclick = function (){
    document.getElementById('MenuScroll').scrollIntoView({
        block: "center",
        behavior: "smooth",
    });
}
document.getElementById('ContactScrollLink').onclick = function (){
    document.getElementById('ContactScroll').scrollIntoView({
        block: "center",
        behavior: "smooth",
    });
}
document.getElementById('aboutScrollLink__burger').onclick = function (){
    burgerClose()
    document.getElementById('aboutScroll').scrollIntoView({
        behavior: "smooth",
    });
}
document.getElementById('ServiceScrollLink__burger').onclick = function (){
    burgerClose()
    document.getElementById('ServiceScroll').scrollIntoView({
        block: "center",
        behavior: "smooth",
    });
}
document.getElementById('MenuScrollLink__burger').onclick = function (){
    burgerClose()
    document.getElementById('MenuScroll').scrollIntoView({
        block: "center",
        behavior: "smooth",
    });
}
document.getElementById('ContactScrollLink__burger').onclick = function (){
    burgerClose()
    document.getElementById('ContactScroll').scrollIntoView({
        block: "center",
        behavior: "smooth",
    });
}