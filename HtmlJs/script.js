/*
var quantity = prompt("Add meg a darabszámot");
var type = prompt("Add meg a tipust");

var types = {
  student: 300,
  adult: 350,
  retired: 280
};
var price = types[type];
console.log(price);

if (price === undefined){
  alert('Érvénytelen tipus');
}else{

var discount = quantity > 10 ? 0.9 : 1;
var total = quantity * price * discount;
alert(total);
}
*/
/*
var beker = prompt('Adj meg egy számot');
var bekerTwo = prompt('Adj meg egy másik számot');
if(isFinite(beker)){
  

    if ((beker % 2 === 0) &&  (bekerTwo % 2 === 0)){
      document.write('az első és második is Páros');
    }else if(beker % 2 !== 0 && bekerTwo % 2 !== 0 ){
      document.write('Egyik sem páros ');
    }else{
      document.write('Az egyik szám páros');
    }
  
}else {
  document.write('nem számot adtál meg');
}

// isFinite számot ad meg csak akkor true leelenőrzi hogy szám-e
//csak integerre müködik
*/

// For Ciklus ------
var a = 1;
for (var i = 0; i < 5; i++){
  // a kettőnek a hatványai 
  a *= 2;
  document.write('Index: ', i ,' Az érték: ' , a ,' <br/>');
}




//https://www.youtube.com/watch?v=FCZhNaTtePc&list=PL6VA7Z5zO0dq-6NWrHzIy7dqLfeZhhhOz&index=12