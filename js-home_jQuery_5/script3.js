// 3. Написать функцию для поиска максимальной цифры в числе.

function maxDitig(n) {
    if (n < 10)
    return n;
    return Math.max(n % 10, maxDitig(parseInt(n / 10)));
}

console.log(maxDitig(156)); //6
