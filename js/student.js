let workButton = document.querySelector ('#work-button');
let portfolioButton = document.querySelector ('#portfolio-button');
let idp2024 = document.querySelector('#year-2024');
let idp2023 = document.querySelector('#year-2023');
let idp2022 = document.querySelector('#year-2022');
let lightboxStudent = document.querySelectorAll('.project-lightbox');

function displayWork () {
  let examplesOne = document.querySelector ('#stu-examples-row-1')
  let examplesTwo = document.querySelector ('#stu-examples-row-2')

  if (examplesOne.style.display === 'block') {
    examplesOne.style.display = 'none';
  } else {
    examplesOne.style.display = 'block';
  }

  if (examplesTwo.style.display === 'block') {
    examplesTwo.style.display = 'none';
  } else {
    examplesTwo.style.display = 'block';
  }
}

function displayPortfolio() {
    let studentList = document.querySelectorAll('#stu-por-list-con a');
    let yearSelector = document.querySelector('#year-selector');
    let currentYear = document.querySelector('#year-display');

    studentList.forEach(item => {
        if (item.style.display === 'none' || item.style.display === '') {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    if (yearSelector.style.display === 'flex') {
        yearSelector.style.display = 'none';
      } else {
        yearSelector.style.display = 'flex';
      }

      if (currentYear.style.display === 'block') {
        currentYear.style.display = 'none';
      } else {
        currentYear.style.display = 'block';
      }
}

function displayStudents () {
    let studentName = this.dataset.member

    document.querySelector('#current-year').textContent= idp_students [studentName].year
    document.querySelector('#name-1').textContent= idp_students [studentName].namea
    document.querySelector('#name-2').textContent= idp_students [studentName].nameb
    document.querySelector('#name-3').textContent= idp_students [studentName].namec
    document.querySelector('#name-4').textContent= idp_students [studentName].named
    document.querySelector('#name-5').textContent= idp_students [studentName].namee
    document.querySelector('#name-6').textContent= idp_students [studentName].namef
    document.querySelector('#name-7').textContent= idp_students [studentName].nameg
    document.querySelector('#name-8').textContent= idp_students [studentName].nameh
    document.querySelector('#name-9').textContent= idp_students [studentName].namei
    document.querySelector('#name-10').textContent= idp_students [studentName].namej
    document.querySelector('#name-11').textContent= idp_students [studentName].namek
    document.querySelector('#name-12').textContent= idp_students [studentName].namel
    document.querySelector('#name-13').textContent= idp_students [studentName].namem
    document.querySelector('#name-14').textContent= idp_students [studentName].namen
    document.querySelector('#name-15').textContent= idp_students [studentName].nameo
    document.querySelector('#name-16').textContent= idp_students [studentName].namep
}

function openStudentLightbox() {
    let studentLightbox = this.dataset.member

    document.querySelector('#lightbox-student').style.display = 'grid';

    document.querySelector('#lb-title-student').textContent= project_members [studentLightbox].projectname
    document.querySelector('#lb-description').textContent= project_members [studentLightbox].description
    document.querySelector('#lb-team').textContent= project_members [studentLightbox].members
    document.querySelector('#lb-link1').textContent= project_members [studentLightbox].link1
    document.querySelector('#lb-link2').textContent= project_members [studentLightbox].link2
    document.querySelector('#lb-link3').textContent= project_members [studentLightbox].link3
    document.querySelector('#lb-link4').textContent= project_members [studentLightbox].link4
}

workButton.addEventListener('click', displayWork)
portfolioButton.addEventListener('click', displayPortfolio)
idp2024.addEventListener('click', displayStudents)
idp2023.addEventListener('click', displayStudents)
idp2022.addEventListener('click', displayStudents)
lightboxStudent.forEach(lightbox => lightbox.addEventListener('click', openStudentLightbox))