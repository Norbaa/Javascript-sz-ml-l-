/*
let szam = 0;
const minus = document.getElementById("minus");
const nul = document.getElementById("null");
const plus = document.getElementById("plus");
const value = document.getElementById("value");


minus.addEventListener("click", ()=>{
    
    value.innerHTML = (szam--)-1;
    if(szam < 0){value.style.color = "red"}
    else if(szam > 0){value.style.color = "green"}
    else{value.style.color = "black"}
})
nul.addEventListener("click", ()=>{
   
    value.innerHTML = szam = 0;
    if(szam = 0){value.style.color = "black"}
    else{value.style.color = "black"}
})
plus.addEventListener("click", ()=>{
    
    value.innerHTML = (szam++)+1;
    if(szam > 0){value.style.color = "green"}
    else if(szam < 0){value.style.color = "red"}
    else{value.style.color = "black"}

})
*/

let szam = 0;
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    
    btn.addEventListener("click", (e) => {

        const style = e.currentTarget.classList;

        if(style.contains("minus")){
            szam--;
            if(szam < 0){
                value.style.color = "red";
            }else if(szam > 0){
                value.style.color = "green"
            }else{
                value.style.color = "black"
            }
    
        }else if(style.contains("plus")){
            szam++;
            if(szam > 0){value.style.color = "green"
            }else if(szam < 0){
                value.style.color = "red"
            }else{
                value.style.color = "black"
            }
            
        }else{
            szam = 0;
            if(szam = 0){value.style.color = "black"
            }else{
                value.style.color = "black"
            }
        }
        value.textContent = szam;
    })
    
})
/*
//Alapérték felvétele
let szam = 0;

//Gombok és egyéb elemek eltárolása változóba
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
//const decrease = document.getelementByI("decrease");
//const increase = document.getelementByI("increase");
//const reset = document.getelementByI("reset");

//Ciklusal végiglépkedek az eltárolt .btn classú gombokon
btns.forEach((btn) => {

    
    //Az összes gomb közül arra kattintok rá, amelyik a ciklusfutáskor következik
    btn.addEventListener("click", (e) => {

        //Megnézzük, hogy az aktuálisan megkattintott gombon milyen class/classok vannak
        const style = e.currentTarget.classList;

        //Megnézzük, hogy a megkattintott gomb tartalmazza-e a "decrease" classt
        if(style.contains("decrease")){

            //Ha igen, akkor az alapértékünket csökkentjük
            szam--;
        }
         //Megnézzük, hogy a megkattintott gomb tartalmazza-e a "increase" classt
        else if(style.contains("increase")){
            
            //Ha igen, akkor az alapértékünket növeljük
            szam++;
        }
        //Ha ezek közül egyik sem, tehát kizárásos alapon maradt a "reset"
        else{

            //Akkor az alapértéket visszaállítjük 0-ra
            szam = 0;
        }


        //Adjuk hozzá a színeket, annak függvényében, hogy a szám pozotív vagy negatív értékű

        if(szam > 0){

            value.style.color = "green";
        }
        else if(szam < 0){

            value.style.color = "red";
        }
        else{

            value.style.color = "black";
        }

        //Beletöltjük a spanbe az alapértkünk aktális értékét
        value.textContent = szam;
    })

    
})
*/