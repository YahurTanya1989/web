console.log("Hello")

// const button = document.createElement('button');
// button.textContent = 'Нажми меня';
// button.id = 'myButton';
// button.className = 'myClass';
// button.style.backgroundColor = 'blue';
// button.addEventListener('click', function () {
//     alert('Кнопка нажата!');
// });
// let parentElement = document.getElementById('parentElementId');
// parentElement.appendChild(button);
// let referenceElement = document.getElementById('referenceElementId');
// referenceElement.parentNode.insertBefore(button, referenceElement);
// let replacedElement = document.getElementById('replacedElementId'); // Получаем элемент, который нужно заменить
// replacedElement.parentNode.replaceChild(button, replacedElement);
const quantityValue = document.querySelector('.quantity-value'); //1.Создаем функцию в кот. етод, который позволяет найти и вернуть первый элемент на веб-странице, соответствующий заданному CSS-селектору

let quantity = 0; //2. Создаем начало счетчика
const button_plus = document.createElement('button'); //3. Создаем кнопку +
const button_minus = document.createElement('button');//4. Создаем кнопку -
function plus(){  //5. Создаем функцию сложения принажатии на +
    quantity++;
    quantityValue.innerHTML = quantity; //6.возвращает строку, содержащую весь HTML-код, который находится внутри элемента
}
function minus(){  //7. тоже самое с -
    quantity--;
    quantityValue.innerHTML = quantity;
}

button_plus.onclick = plus  //8. обработчик события на +
button_minus.onclick = minus //9. обработчик события на -
button_plus.innerText = '+'; //10. текст + внутри кнопки
button_minus.innerText = '-'; //11.текст - внутри кнопки
let res = document.getElementById('container'); // 12.поиск элемента по ИД и запись его в переменную res
res.appendChild(button_plus); //13.Позволяет вставить в конец какого-либо другой элемент на +
res.appendChild(button_minus); // 14. тоже самое на минус

const quantityButtons = document.querySelectorAll('.quantity-button'); //15. метод, который позволяет выбрать все элементы на странице, соответствующие заданному CSS-селектору, и вернуть их в виде статического списка

//16. Создаем функцию для подсчета + и -
quantityButtons.forEach(button => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;

    if (action === 'increase') {
      quantity++;
    } else if (action === 'decrease' && quantity > 0) {
      quantity--;
    }

    quantityValue.textContent = quantity;
  });
});