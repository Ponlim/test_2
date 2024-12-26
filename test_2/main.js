// test 1: 




// const regExp = /[0-9]/g

// const extractNumbers = (str) => {
//     return regExp.test(str);
// }

// extractNumbers("a1fg5hj6") // вернёт [1, 5, 6]

// console.log(extractNumbers('a1fg5hj6'));






// test 2: 





let num = 0

const messgeInterval = () => {
    num++
    let i = 1;
    
    console.log(num);
    if (num < 144) {
        messgeInterval()
        requestAnimationFrame(messgeInterval)
    }
    const messgeInterval = setInterval(() => {
        console.log(num, i);
        i++;
    }, 1000);
};

messgeInterval();

const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i); 
        i++; 
        if (i > 10) {
            clearInterval(interval);
            console.log("Остановка вывода.");
        }
    }, 1000); 
};

count();



// Напишите функцию рекурсию которая будет выводить в консоль числа фибоначчи с задержкой в одну секунду 
// (ограничение число 144)







// test 3: 







// Сделать запрос на API используя async await и try catch 
// Делайте запроса на этот API => https://fakestoreapi.com/products
// Из полученных данных возьмите ключ title у каждого объекта и выведите их в консоль 





// test 4: 
// const block = document.getElementById('block');

// block.addEventListener('click', () => {
//     block.classList.toggle('colored');
// });





// При помощи делегирования событий сделайте так чтобы при нажатии на какую либо из кнопок
//  менялся цвет заднего фона body на цвет нажатой кнопки





// test 5:







// Создайте кнопку которая будет отображать блок либо скрывать его
// Надо сделать блок просто квадратным, а рядом кнопка , если нажать на  
// неё то блок скроется, если снова нажать на ту же кнопку то блок снова покажется










// тест 6


// Отобразите на странице цифру ноль и начните его увеличивать на +1 
// каждую мили-секунду  - остановите отсчёт когда счётчик дойдёт до 100




//  тест 7




// Создайте кнопку при нажатии на которую будет отправляться GET запрос на JSON и полученные данные от 
// туда выводите в консоль (JSON создавайте на своё усмотрение) используйте async await