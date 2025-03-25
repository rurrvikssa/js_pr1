'use strict';
let surname = prompt('Введите фамилию');
let firstname = prompt('Введите имя', 'Виктория');
let secondname = prompt('Введите отчество');

let isTrue = confirm(`Вас зовут ${surname} ${firstname} ${secondname}?`);

confirm(isTrue);