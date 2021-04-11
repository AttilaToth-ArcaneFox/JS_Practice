// Függvények 

  // function <- ez a kulcsszó ezután jön a függvény neve:
  /* function nev(paramértek vagy semmi){
            ide jön hogy mit csináljon
            ezeket majd meg kell hivni
  }
  */ 
  /*
  function kiir(){
        document.write('Szeretem a tejet');
  }
  //függvény meghívás
  kiir();
*/

/*
function areaOfARectangle(side1, side1){
    return side1 * side2;
}

function ThePerimeterOfTheRectangle(side1,side2){
    return 2  * (side1 + side2);
}


var side1 = prompt('Add meg a téglalap egyik oldalát');
var side2 = prompt('Add meg a téglalap masik oldalát');

document.write('A téglalap területe: ',areaOfARectangle(side1,side2), ' A Kerülete pedig: ',ThePerimeterOfTheRectangle(side1,side2));
*/

/*
function areaOfARectangleExtended(a,b){
    var a = prompt('First side');
    var b = prompt('Second side');
    var k = a * b;
    alert ('area Of A Rectangle: ' + k);
}
*/

// little bit more function
/*
prime function
function prime(){
    var prim = prompt('Adj meg egy számot');
    if (isFinite(prim) && Math.floor(prim) == prim){
        if(eldont(prim)){
            alert('A szam prim!');
        }else{
            alert(' A szam nem prim!');
        }
    }else{
        alert('Csak egész számot adhatsz meg!');
    }
 }   

function eldont(prim){
    var i = 2;
    while(i<= Math.floor(Math.sqrt(prim)) && prim % i != 0){
        ++i;       
    }
    return i > Math.floor(Math.sqrt(prim));
}
*/

// ----- Arrays -----
/*
var arr = new Array();
for (var i = 0; i < 3 ; i++){
    arr[i] = prompt('Add meg az elemeket');    
}
// arr.push('valami') hozzáadja a tömb végéhez az elemet
// arr.pop () kitörli a tömb utolsó elemét
// arr.unshift('valami') a tömb elejéhez adja hozzá a megadott értéket
// arr.shift() törli a tömb 0. elemét
// arr.indexOf('mit') megkeresi az első előforulást a tömben és visszadja az indexet
// arr.lastIndexOf('mit')  az utolsó előfordulás indexét adja vissza

arr.shift();
arr.unshift(2);
arr.push(1);
arr.pop();
arr.indexOf(2);
arr.lastIndexOf(3);

for (var i = 0; i < arr.length; i++){
    document.write(arr[i], ' ');
}
*/

/*
function randomArrayNumbers(arr){
    for (var i = 0; i < 100; i++){
        arr.push(Math.floor(Math.random()* 100 ) +1 );
    }
}

function countTheGivenNumberAndGiveTheIndex(arr, numb){
    var count = new Number;
    count = 0;    
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == numb){ 
            document.write('Az: ',numb,' szám a ', i ,' indexne található meg', '<br>');          
            count++;            
        }
    }   

     document.write('A ', numb,' összesen ', count, '(szor/-szer) szerepel a tömben');
}

function arrayPrineter (arr){
    for (var i = 0; i < arr.length; i++){
        document.write('A tömb: ', i , '. eleme: ' , arr[i], '<br>');
    }
}

var arr = new Array();
randomArrayNumbers(arr);
arrayPrineter(arr);
countTheGivenNumberAndGiveTheIndex(arr,5);

*/

// Hexa converter

// parseInt(szám) integert csinál a valős számból

function println(x){
    document.write(x,'<br>');
}
// A hexa/bin converter function a given nubmer in decimals convereted into hexa/bin
/*
function hexaBinConverter (numb, switcher){    
    var hexArray = new Array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F');
    var binArray = new Array('0','1');
    var result = new String();    
    if (switcher == 0){    
    while (numb != 0){
        result = binArray[numb % 2] + result;
        numb = parseInt(numb / 2);
    }
    return result;
    
    }else if(switcher == 1){
        while (numb != 0){
            result = hexArray[numb % 16] + result;
            numb = parseInt(numb / 16);
        }
        return result;
    }
}
var chooser = prompt('Pls choose: 0 for binary converter or 1 for hexa converter');


if((chooser == 1 || chooser == 0)){
    var num = prompt('Give me the number');  
    if(isFinite(num) && Math.floor(num) == num){
        println(hexaBinConverter(num,chooser));
    }else{
        alert('Something wrong');
    }
}else{
    alert('Something wrong');

}
*/







