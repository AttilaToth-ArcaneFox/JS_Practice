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


//https://www.youtube.com/watch?v=-eaB3rRNlLc&list=PLuYHIg_0xQJsiwA4jrXTWaIdqMGJQ4sAU&index=16
