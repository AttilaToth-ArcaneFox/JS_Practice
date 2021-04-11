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
/*
function println(x){
    document.write(x,'<br>');
}

*/
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

//2D Arrays 
/*
function sumTwoDArray(twoDArry){
    var summ = 0;
    for (var i = 0; i < twoDArry.length ; i++ ){
        for(var j = 0; j  < twoDArray[i].length; j++ ){
            summ +=twoDArray[i][j];
        }
    }    
    return summ;
}

var twoDArray = new Array(  
                new Array(1,2,3),
                new Array(4,5,6),
                new Array(7,8,9),
                new Array(10,11,12)
);
document.write(sumTwoDArray(twoDArray));

*/
//switch statement
/*
var num = parseInt(prompt('Adj meg egy számot 1 és 3 között')); //átrakja integerré
    //very very very sipmle :D
switch(num){
    case 1: 
        document.write('Ez az az egyest adtad meg');
        break;
    case 2:
        document.write('Ez az a kettest adtad meg');
        break;
    case 3:
        document.write('Ez az a hármast adtad meg');
        break;
    default: 
        document.write('Hát ez nem jött ösze'); 
}
*/
// Some Functions
//Globális Függvények
/*
isFinite(x)  igaz, ha az x szám típus   isFinite("negyven") -> false | isFinite(40) -> true
isNaN(x)  igaz, ha x nem szám típus    isNaN("negyven") -> true | isNan(40) -> false
Number(x)  x változót szám típussá alakítja (ha tudja) document.write(Number("40.5 years")) -> 40.5
parseFloat()  x változót valós számmá alakítja (ha tudja) document.write(parseFloat("40.5 years")) -> 40.5
parseInt()  x változót egész számmá alakítja (ha tudja) document.write(parseInt("40.5 years")) -> 40
String()  x változót stringgé alakítja   string(40) -> "40"

//A Math Objektum Függvényei
acos(x)   ARCCOS x értéke radiánban
asin(x)   ARCSIN x értéke radiánban
atan(x)   ARCTAN x értéke radiánban -PI/2 és PI/2 radián között
atan2(y,x)  visszaadja a hányados cotangensét az argumentumából
ceil(x)   visszaadja x étékét, felfelé kerekítve a legközelebbi egész számhoz
sin(x)   SIN x értéke radiánban
cos(x)   COS x értéke radiánban
tan(x)   TAN x értéke radiánban
exp(x)   visszaadja az Ex értékét
floor(x)  X egész részét adja eredményül
log(x)   az x tizes alapú logaritmusát képzi
max(x,y,z,...,n) A megadott paraméterek közül a legnagyobbat adja eredményül
min(x,y,z,...,n) A megadott paraméterek közül a legkisebbet adja eredményül
pow(x,y)  Eredménye X az Y-adik hatványon
random()  0..1 intervallumban valós véletlenszámot generál
round(x)  lekerekíti x-et a legközelebbi egész számra
sqrt(x)   x négyzetgyökét adja eredményül

//String Objektum Függvényei
length   A string karaktereinek számát adja vissza: s.length -> 9
charAt(i)  A stringben "i"-edik pozicióján lévő karaktert adja vissza. (Nulladik elemmel kezdődik!): s.charAT(2) -> "m"
charCodeAt(i)  Az "i"-edik pozición lévő karakter kódját adja vissza: s.charCodeAt(0) -> 65
contact(s)  S Stringhez fűz stringet: s.contact("kusz") -> "Almáspitekusz"
fromCharCode(i)  ASCII kód karakter értékét (értékeit) adja vissza: String.fromCharCode(72,69,76,76,79) -> "HELLO"
indexOf(s)  A paraméterként megadott karakterlánc első eőfordulása stringben: s.indexOf("pite") -> 5
lastIndexOf(s)  A paraméterként megadott karakterlánc utolsó előfordulása a stringben
substr(i,j)  Karakterlánc kivágása, "i" poziciótól; "j" hosszan: s.substr(5,4) -> pite
toLowerCase()  A stringet kisbetűsre konvertálja
toUpperCase()  A stringet nagybetűsre konvertálja
valueOf()  A string értékét adja vissza (két string összehasonlításánál fontos!)

//Array Objektum Függvényei
length   A tömb elemszámával tér vissza: tomb.length -> 4
concat()  Két, vagy több tömböt egyesít
indexOf()  A paraméterként kapott értéket keresi a tömbben, és indexet ad vissza: tomb.indexOf('Dinnye') -> 1
lastIndexOf()  Ugyan az mint az "indexOf", de az utolsó előfordulását adja vissza
pop()   Eltávolítja a tömb utolsó elemét: tomb.pop() -> 'Uborka','Dinnye','Krumpli'
push()   Új elemet fűz a tömb végére: tomb.push('Sajt')
shift()   Eltávolítja a tömb első elemét: tomb.shift() -> 'Dinnye','Krumpli','Sajt'
unshift()  Új elemet szúr be a tömb első poziciójára. tomb.unshift()
*/

// webpage dinamic 

// objects 

// konstruktor
/*
function ember(name, age){
    this.name = name;
    this.age = age;
  }  
  var jani = new ember("Kis Jani", 17);  
  document.write(jani.age);
  */

  /*
  function ember(name, age){
    this.name = name;
    this.age = age;
    this.money = money;
  }
  function money(){
      var x = 65 - this.age;
      return x;
  }

  var jani = new ember("Kiss Jani",18);
  var psiti = new ember("Erős Pista", 19);

  document.write(jani.money());

  */

  // setInvertl("Bármilyen függvény", milyen időközönként csinálja)
  // setTimeout("Bármilyen füügvény", amikor lejár at idő)
  function kiir(){
      document.write("Alma ");
  }

setTimeout("alert('Hello')",1000);
