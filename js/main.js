console.log ('To educate, engage, empower, and excite!');

let leftClientArrow = document.querySelector('#client-arrow-left');
let rightClientArrow = document.querySelector('#client-arrow-right');
let firstWork = document.querySelector('#first-work');
let secondWork = document.querySelector('#second-work');
let thirdWork = document.querySelector('#third-work');

var slideIndex = 1;
showSlide(slideIndex);

function displayWorkDetails() {
    let workDisplay = this.dataset.member;

    document.querySelector('#lightbox-client').style.display = 'grid';

    document.querySelector('#lb-title-client').textContent= clientWorkCurrent [workDisplay].title
    document.querySelector('#lb-team').textContent = clientWorkCurrent [workDisplay].members;
    document.querySelector('#lb-software').textContent = clientWorkCurrent [workDisplay].software;
    document.querySelector('#lb-idea').textContent = clientWorkCurrent [workDisplay].idea;
    document.querySelector('#lb-problems').textContent = clientWorkCurrent [workDisplay].problems;
    document.querySelector('#lb-solutions').textContent = clientWorkCurrent [workDisplay].solutions;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function showSlide(n) {
    let slides = document.querySelectorAll('.carousel .slide');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

function testimonialQuote() {
    let quote = this.dataset.member
}

leftClientArrow.addEventListener('click', prevSlide);
rightClientArrow.addEventListener('click', nextSlide);
firstWork.addEventListener('click', displayWorkDetails)
secondWork.addEventListener('click', displayWorkDetails)
thirdWork.addEventListener('click', displayWorkDetails)