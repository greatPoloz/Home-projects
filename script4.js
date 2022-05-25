// 4. Написать функцию, которая определяет простое ли переданное число.
function simpleNum(num, div) {
    if (num <= div) return false;
        if (num % 2 === 0) return false;
        return true;
        return simpleNum(num); 

}

console.log(simpleNum(3)); //true
console.log(simpleNum(2)); //false