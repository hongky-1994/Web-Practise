var next_btn = document.getElementsByClassName('next-btn')[0];
var prev_btn = document.getElementsByClassName('prev-btn')[0];
var img = document.getElementsByClassName('img-holder');
var placeLocation = document.getElementsByClassName('place-localion');
var placeName = document.getElementsByClassName('place-name-text');
var pageNumber = document.getElementsByClassName('page');
var hr = document.getElementsByClassName('page-dash')[0];
next_btn.addEventListener('click',next);
prev_btn.addEventListener('click',prev);


function next (){
    hr.firstElementChild.style.transform = 'rotate(-45deg)';

    pageNumber[0].classList.remove('current-page');
    pageNumber[1].classList.add('current-page');

    placeName[1].classList.add('active-name');
    placeName[0].classList.remove('active-name');
    placeName[1].parentElement.style.transform = "translateX(-50%)";

    placeLocation[0].classList.remove('active-location');
    placeLocation[1].classList.add('active-location');

    next_btn.parentElement.classList.remove('active-btn');
    prev_btn.parentElement.classList.add('active-btn');

    img[0].style.transform = 'translateX(-100%)';
    img[0].firstElementChild.style.zIndex = 0;
    img[0].lastElementChild.style.zIndex = 1;

}



function prev (){
    hr.firstElementChild.style.transform = 'rotate(45deg)';

    pageNumber[1].classList.remove('current-page');
    pageNumber[0].classList.add('current-page');

    placeName[0].classList.add('active-name');
    placeName[1].classList.remove('active-name');
    placeName[0].parentElement.style.transform = "translateX(0%)";

    placeLocation[1].classList.remove('active-location');
    placeLocation[0].classList.add('active-location');

    prev_btn.parentElement.classList.remove('active-btn');
    next_btn.parentElement.classList.add('active-btn');

    img[0].style.transform = 'translateX(0)';
    img[0].firstElementChild.style.zIndex = 1;
    img[0].lastElementChild.style.zIndex = 0;
}


