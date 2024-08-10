let createBtn = document.querySelector('#create-btn')
let createElem = document.querySelector('#create-elem')

let editBtn = document.querySelector('#edit-btn')
let editElem = document.querySelector('#edit-elem')

cancelBtn = document.querySelectorAll('.cancel-btn')

createBtn.addEventListener('click', function(){
  createElem.classList.remove('popup__hide')
  createElem.classList.add('popup__show')
})

editBtn.addEventListener('click', function(){
  editElem.classList.remove('popup__hide')
  editElem.classList.add('popup__show')
})

cancelBtn[0].addEventListener('click', function(){
  createElem.classList.add('popup__hide')
  createElem.classList.remove('popup__show')
})

cancelBtn[1].addEventListener('click', function(){
  editElem.classList.add('popup__hide')
  editElem.classList.remove('popup__show')
})