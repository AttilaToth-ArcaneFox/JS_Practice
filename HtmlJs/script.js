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
/*
var a = 1;
var b = 0;
for (var i = 0; i < 5; i++){
  // a kettőnek a hatványai 
  a *= 2;
  document.write('Index: ', i ,' Az érték: ' , a ,' <br/>');
}
document.write('<br>');

document.write('1 től 100 ig az összes páros és 3 al oszzthatő szám', '<br>' ,'<hr>');
for (var i = 1; i <= 100; i++ ){  
  if(i % 2 === 0){
    document.write(i ,' Páros ' ,' <br> ','<hr>');
  }else if (i % 3 === 0){
    document.write (i, ' Osztható 3-al ', ' <br>','<hr>');
  }
}*/
// while and do while loops
/*var n = prompt('Kerem a számot');
while (!isFinite(n)){
  n = prompt('Kerem adj számot');
}
*/
/*
var n;
do {
n = prompt('Adj meg egy számot')

}while(!isFinite(n));
document.write('Végre számot irtál! igen:', n , ' egy szám ');
*/
// Random szám generállása
//Math.random 0.xxxxxx számot ad 
//Math.random * 100 + 1 -> igy lesz 1 től 100 ig valós

/* Simple guess the number game in JS!
alert ('1: easy mode!  2: normal mode! 3: hard mode');
var chose = prompt('Chose one');
var count = 1;
switch(chose){
  case '1': 
  alert('I thought of a number: between 1 and 10');  
  var x = Math.floor(Math.random() * 10) + 1; 
  alert('You have 5 guess!!! ');
  do{  
    var tipp = prompt('Guess');    
    if (count === 5 ){
      alert('You Lost');
    }else if (tipp < x && count !== 5){
      alert(' The Thought Number is bigger!');
    }else if(tipp > x && count !== 5){
      alert(' The Thought Number is smaller!');
    }else {
      alert('You Win!');
    } 
    document.write('Number of Guesses: ', count); 
    count++;
  }while(tipp != x && count <= 5);
  break;

  case '2': 
  alert('I thought of a number: between 1 and 50');  
  var x = Math.floor(Math.random() * 50) + 1; 
  alert('You have 10 guess!!! ');
  do{  
    var tipp = prompt('Guess');    
    if (count === 10 ){
      alert('End of the game');
    }else if (tipp < x && count !== 10){
      alert(' The Thought Number is bigger!');
    }else if(tipp > x && count !== 10){
      alert(' The Thought Number is smaller!');
    }else {
      alert('You Win!');
    } 
    document.write(count,'. tipp' ,'<br>'); 
    count++;
  }while(tipp != x && count <= 10);
  break;

  case '3': 
  alert('I thought of a number: between 1 and 100');  
  var x = Math.floor(Math.random() * 100) + 1; 
  alert('You have 10 guess!!! ');
  do{  
    var tipp = prompt('Guess');    
    if (count === 10 ){
      alert('End of the game');
    }else if (tipp < x && count !== 10){
      alert(' The Thought Number is bigger');
    }else if(tipp > x && count !== 10){
      alert(' The Thought Number is smaller! ');
    }else {
      alert('You Win!');
    } 
    document.write(count,'. tipp' ,'<br>'); 
    count++;
  }while(tipp != x && count <= 10);
  break;

default : 
document.write('Worong number!!!');
}
*/









//https://www.youtube.com/watch?v=FCZhNaTtePc&list=PL6VA7Z5zO0dq-6NWrHzIy7dqLfeZhhhOz&index=12