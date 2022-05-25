// 5. Написать функцию для вывода всех множителей переданного числа в возрастающем порядке. 
// Например: число 18 – множители 2 * 3 * 3.

function multiplier(n) {
    let arr = [];
      for(let i =1; i<=n; i++){
    if(n % i === 0){
      arr.push(i);
    }
  }
  return arr;

  num_factors.sort(function(x, y) {
    return x - y;});
    return num_factors;
    
}
console.log(multiplier(18)); // [ 2, 3, 3 ]
