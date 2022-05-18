// 1.
let a = +prompt('Введите начало диапазона');
let b = +prompt('Введите конец диапазона');
let sum =0;

while(a <= b) {
    sum+=a;  
    a++;
 }
alert(sum);

// 2.
let firstNumber = +prompt('Для нахождения НОД двух чисел введите первую цифру');
let secondNumber = +prompt('Введите вторую цифру');

    while (firstNumber != 0 && secondNumber != 0) {
        if (firstNumber > secondNumber) {
            firstNumber = firstNumber % secondNumber;
        } else {
            secondNumber = secondNumber % firstNumber;
        }
    }

    alert(firstNumber + secondNumber);


// 3.
let number = +prompt('Введите число');
let divisors = '';


for (let i = 2; i < number; i++) {
    if (number % i == 0 && number != 1 ) {
        divisors += i;
        divisors += ' ';
    }
}
alert('Делители числа: ' + divisors);

// 4.
let userNumber = prompt('Введите число '); 
let count = 0;

for (let i = 0; i < userNumber.length; i++) {
    count += 1;
}
alert('Число состоит из: ' + count + ' цифр');

// 5.
let positive = 0;
let negative = 0;
let zero = 0;
let even = 0;
let odd = 0;

for (let i = 1; i <= 10; i++ ) {
    let num = prompt("Введите числа");
    
    if (num > 0) {
        positive++;
    }
    if (num < 0) {
        negative++;
    }
    if (num == 0) {
        zero++;
    }
    if (num % 2 == 0) {
        even++;
    }
    if (num % 2 !== 0) {
        odd++;
    }
}
alert(` Из введенных цифр положительных: ${positive}, отрицательных: ${negative}, нулей: ${zero}, четных: ${even}, нечетных: ${odd}.`)

// 6.
do {
    let firstN = prompt(' Введите первое число');
    let secondN = prompt(' Введите второе число');
    let operator = prompt(' Введите математический оператор', '+, -, *, /')
    let answer = eval(`${firstN} ${operator} ${secondN}`);
    alert(`Ответ ${answer}`);
    '' + firstN + operator 
    
} while (confirm(' Решить еще один пример?'));
            
// 7.
do {
    let q = prompt(' Введите число', '1234567890');
    let move = Number( prompt(' На сколько цифр сдвинуть?') );
    alert(q.slice(move) + q.slice(0, move));

} while (confirm(' Еще одно число ?'));


// 8.
let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let currDay = 0;

while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
    currDay = (currDay + 1) % days.length;
}


// 9.
let tables = [];

    for (let i = 2; i <= 9; i++) {
        tables.push(`\n Таблица умножения ${i}:\n`);

    for (let j = 1; j <=10; j++) {
        tables.push(`${i} * ${j} = ${i*j}; `);
        };
    };

    alert(tables.join(''));
            console.log(tables.join(''));

// 10.
 let guessedNum = Number(alert("Загадайте число от 1 до 100"));
    let lowerLimit = 0;
    let upperLimit = 100;
    let N = 50;

    while (guessedNum !== N ) {
        let answer = prompt(`Ваше число >, <, или равно ${N}`, '>, <, =');
        if (answer == '>') {
            lowerLimit = N;
            N = Math.ceil((upperLimit - lowerLimit) / 2 + lowerLimit);
        } else if (answer == '<') {
            upperLimit = N; 
            N = Math.ceil((upperLimit - lowerLimit) / 2 + lowerLimit);
        } else {
            break;
        };
    };
    alert(`Задуманное число ${N}`);