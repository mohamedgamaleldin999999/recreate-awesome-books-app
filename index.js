import { Book } from './modules/book.js'
import * as display from './modules/display.js'
import { updateTime } from './modules/time.js'

const bookObject = new Book()
const addButton = document.querySelector('.add_button')
addButton.addEventListener('click', () => {
  bookObject.addBook()
})
window.onload = bookObject.bookArray.forEach(bookObject.displayBookDetails)

const list = document.querySelector('#list')
const add = document.querySelector('#add')
const contact = document.querySelector('#contact')
const bookList = document.querySelector('.bookList')
const addBooks = document.querySelector('.addBooks')
const contactInformation = document.querySelector('.contact_information')

list.addEventListener('click', () => {
  display.changeDisplayedPage(bookList, addBooks, contactInformation)
  display.redIndicator(list, add, contact)
})

add.addEventListener('click', () => {
  display.changeDisplayedPage(addBooks, bookList, contactInformation)
  display.redIndicator(add, list, contact)
})

contact.addEventListener('click', () => {
  display.changeDisplayedPage(contactInformation, addBooks, bookList)
  display.redIndicator(contact, list, add)
})

updateTime()
setInterval(updateTime, 1000)
