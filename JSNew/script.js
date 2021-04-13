/*
1. doboz:
Kattintásra adjunk hozzá egy "blur" nevű class attribútumot, majd újabb kattintásra vegyük
le róla azt.

    // - element JS reprezentáció : document.getElementById('element-one')
    // - esemény kiválasztása : onclick 
    // - funcionalitás leirása : function () {...}

*/
// 1. doboz

// document.getElementById('element-one') kiválassszuk azt amin dolgozni szeretnénk,
// jelen esetben ez az 1. kocka 
// classList.add('saját class') hozzáadjuk azt amit akarunk csinálni onclick eseményre. 
// jelen esetben a saját class = blur a cssben

//belső állapot: state 

var isBluerd = false;

// történi egy esemény pl gombnyomás elindit egy eseményt 
document.getElementById('element-one').onclick = function(){ 

    // state change történik
    isBluerd = !isBluerd;   

    //renderelés 
    if (isBluerd){

    document.getElementById('element-one').classList.add('blur');

    }else{

        document.getElementById('element-one').classList.remove('blur');
    }
}


/*
2. doboz:
Ha az egérrel fölé megyünk változzon meg a háttérszíne pirosra, ha levesszük róla az egeret
változzon vissza az eredeti színére.
*/
// 2

// state
var isMouseOverTheElement = false;


// action
document.getElementById('element-two').onmouseover = function(){     
    //state change
    isMouseOverTheElement = true;
    renderSecondBox();
                
}

// action 
document.getElementById('element-two').onmouseout = function(){
    //state change
    isMouseOverTheElement = false;
    renderSecondBox();

}
function renderSecondBox(){
    if (isMouseOverTheElement){
                document.getElementById('element-two').style.backgroundColor = 'red';
    }else{
        document.getElementById('element-two').style.backgroundColor = '';
    }
}

//https://www.youtube.com/watch?v=CE7xq9tmC98&list=PL6VA7Z5zO0dq-6NWrHzIy7dqLfeZhhhOz&index=15

/*
3. doboz:
Dupla kattintással sorsoljon egy számot 1 és 20 között és módosítsa a kapott számmal a doboz tartalmát. 
*/


/*
4. doboz:
Kattintásra tűnjön el, majd egy 1 másodperces várakozás után ismét jelenjen meg.
*/

/*
5. doboz:
Kattintásra alakítsa kör alakúra az összes dobozt.
*/


/*
6. doboz:
Form submit eseményre módosítsuk a doboz tartalmát az input mezőbe írt értékkel
*/


/*
7. doboz:
Keypress eseményre írjuk be a dobozba az adott karaktert, amit leütöttek
*/


/*
8. doboz:
Egérmozdítás eseményre írjuk be az egér pozíciójának x és y koordinátáját, 
a következő séma szerint: "X: {x-koordináta}, Y: {y-koordináta}"
*/


/*
9. doboz:
Submit eseményre módosítsuk a doboz tartalmát azzal az értékkel ami úgy áll elő, 
hogy végrehajtjuk a select inputban kiválasztott operációt,
a state-en és number inputba beírt értéken.
Az előállt végeredményt tároljuk el új state-ként!
Pl:
  Number input mezőbe írt érték: 5
  Select inputban kiválasztott érték: "mult"
  Aktuális state: 9
  Operáció: 9 * 5
  
  Dobozba és state-be beírandó érték: 45
*/