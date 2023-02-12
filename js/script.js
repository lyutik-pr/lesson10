'use strict';

const books = document.querySelectorAll('.book');
console.log(books);

const bookName = document.querySelectorAll('.book > h2 > a');
console.log(bookName);

const adv = document.querySelectorAll('.adv');
console.log(adv);

books[0].before(books[1]);
books[5].after(books[2]);
books[3].before(books[4]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

bookName[4].innerText = 'Книга 3. this и Протопипы Объектов';

adv[0].remove();

books[0].classList.add('second');
console.log(books[0]);
const chapters2 = document.querySelectorAll('.second > ul > li');
console.log(chapters2);
chapters2[10].before(chapters2[2]);
chapters2[3].after(chapters2[6]);
chapters2[4].before(chapters2[8]);

books[5].classList.add('fifth');
console.log(books[5]);
const chapters5 = document.querySelectorAll('.fifth > ul > li');
console.log(chapters5);
chapters5[1].after(chapters5[9]);
chapters5[5].after(chapters5[2]);
chapters5[7].after(chapters5[5]);

books[2].classList.add('sixth');
console.log(books[2]);
const chapters6 = document.querySelectorAll('.sixth > ul > li');
console.log(chapters6);
const newLi = document.createElement('li');
newLi.textContent = 'Глава 8: За пределами ES6';
chapters6[9].insertAdjacentElement("beforebegin", newLi);
