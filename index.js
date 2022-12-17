
/*CORPO DEL SITO*/ 
const body = document.getElementById("body");
const nav = document.getElementById("nav");
const option_input = document.getElementById("option-input");
const article = document.getElementById("article");
const tasti = document.getElementById("tasti");
const tasti_input = document.getElementsByClassName("tasti-input");
const tasti_input_4 = document.getElementsByClassName("tasti-input-4");
const tasti_input_18 = document.querySelector(".tasti-input-18");
const cerchio = document.getElementById("cerchio");

//TASTI PER CAMBIARE COLORE THEME

const buttonTheme = document.getElementById("theme-1");
const buttonTheme_2 = document.getElementById("theme-2");
const buttonTheme_3 = document.getElementById("theme-3");

buttonTheme.addEventListener("click",(e)=>{
    eliminaTheme3();
    eliminaTheme2();

})

buttonTheme_2.addEventListener("click",(e)=>{
    eliminaTheme3();

    body.classList.add("body-theme2")
    nav.classList.add("nav-theme2")
    option_input.classList.add("option-input-theme2");
    article.classList.add("article-theme2");
    tasti.classList.add("tasti-theme2");
    cerchio.classList.add("cerchio-theme2");

    for (let i = 0; i < tasti_input.length; i++) {
        tasti_input[i].classList.add("fila-numeri_input-theme2");
    }

    for (let i = 0; i < tasti_input_4.length; i++) {
        tasti_input_4[i].classList.add("tasti-input-theme2-4");
    }
    tasti_input_18.classList.add("tasti-input-theme2-18");
})

buttonTheme_3.addEventListener("click",(e)=>{
    body.classList.add("body-theme3");
    nav.classList.add("nav-theme3");
    option_input.classList.add("option-input-theme3");
    cerchio.classList.add("cerchio-theme3");
    article.classList.add("article-theme3");
    tasti.classList.add("tasti-theme3");
    cerchio.classList.add("cerchio-theme3");
    for (let i = 0; i < tasti_input.length; i++) {
        tasti_input[i].classList.add("fila-numeri_input-theme3");
    }
    for (let i = 0; i < tasti_input_4.length; i++) {
        tasti_input_4[i].classList.add("tasti-input-theme3-4");
    }
    tasti_input_18.classList.add("tasti-input-theme3-18");
})

//FUNZIONI PER POGLIERE IL VECCHIO COLORI
function eliminaTheme3(){
    body.classList.remove("body-theme3");
    nav.classList.remove("nav-theme3");
    option_input.classList.remove("option-input-theme3");
    cerchio.classList.remove("cerchio-theme3");
    article.classList.remove("article-theme3");
    tasti.classList.remove("tasti-theme3");
    cerchio.classList.remove("cerchio-theme3");
    for (let i = 0; i < tasti_input.length; i++) {
        tasti_input[i].classList.remove("fila-numeri_input-theme3");
    }
    for (let i = 0; i < tasti_input_4.length; i++) {
        tasti_input_4[i].classList.remove("tasti-input-theme3-4");
    }
    tasti_input_18.classList.remove("tasti-input-theme3-18");
}

function eliminaTheme2(){
    body.classList.remove("body-theme2");
    nav.classList.remove("nav-theme2");
    option_input.classList.remove("option-input-theme2");
    article.classList.remove("article-theme2");
    tasti.classList.remove("tasti-theme2");
    cerchio.classList.remove("cerchio-theme2");

    for (let i = 0; i < tasti_input.length; i++) {
        tasti_input[i].classList.remove("fila-numeri_input-theme2");
    }

    for (let i = 0; i < tasti_input_4.length; i++) {
        tasti_input_4[i].classList.remove("tasti-input-theme2-4");
    }
    tasti_input_18.classList.remove("tasti-input-theme2-18");

}


const segni = document.querySelectorAll(".segni");
const Numero = document.querySelectorAll(".numero");
const testoDocumento = document.getElementById("primoNumero");
const risultato = document.querySelector(".uguale");
const reset = document.querySelector(".reset");
const punto = document.querySelector(".punto");
const del = document.querySelector(".del");

let primoNumero = "";
let secondoNumero = "";
let risultatoNumero = 0;
let calcoloString = "";
let secondoCalcoloString = "";

let punto_primoNumero = false;
let punto_secondoNumero = false;

//PER CANCELLARE I NUMERI
let delete_primoNumero = false;
let delete_secondoNumero = false;

let scriviPrimoNumero = false;
let scriviSecondoNumero = false;

//PER CAMBIARE OPERAZIONE MENTRE SIAMO GIA IN UNA
let ugualeSchiacciato = false;

//PER CONTIANUARE A FARE UN CALCOLO
let contatoreSegniPerContinaure = 0;

//SE TROVO UN 10 ALLORA LO RENDO INTERO PERCHE SENNO SOMMERA LE
//STRINGHE
let trovatoPrimoDecimale;
let trovatoSecondoDecimale;

for (let i = 0; i < Numero.length; i++) {
    Numero[i].addEventListener("click",(e)=>{
        var valore = e.target.getAttribute('value');
        if (scriviPrimoNumero === false) {
            scrivendoNumero(valore);
        }

        if (scriviSecondoNumero == false) {
            scrivendoSecondoNumero(valore);
        }

    })   
}

function scrivendoNumero(atributo){
    testoDocumento.innerHTML = "";
    primoNumero += atributo;
    testoDocumento.innerHTML = primoNumero;
    
    
    if (atributo == 0) {
        primoNumero += "";
    } else {
        primoNumero = +primoNumero;
    }
    
    //primoNumero = +primoNumero;
}

function scrivendoSecondoNumero(atributo){
    if (primoNumero != "" && calcoloString != "") {
        secondoNumero += atributo;
        testoDocumento.innerHTML = secondoNumero;
        
        if (atributo == 0) {
            secondoNumero += "";
        } else {
            secondoNumero = +secondoNumero;
        }

        secondoNumero = +secondoNumero;

        
        if (ugualeSchiacciato == true) {
            ugualeSchiacciato = false;
            reseteaUgualAll();
        }
    }
}


//EVENTO PER I TASTI DEI CALCOLI
for (let i = 0; i < segni.length; i++) {
    segni[i].addEventListener("click",(e)=>{
        calcoloString = e.target.getAttribute('value');

        console.log("omak: " + contatoreSegniPerContinaure);
        console.log("calcoloString: " + calcoloString);
        console.log("secondoCalcoloString: " + secondoCalcoloString);

        scriviPrimoNumero = true;
        delete_primoNumero = true;

        punto_secondoNumero = true;
        punto_primoNumero = true;

        //FACCIO DIVENTARE FALSO COSI NON VIENE UTILIZZATO NEL NUMERO
        if (ugualeSchiacciato == true) {
            ugualeSchiacciato = false;

        } else if (ugualeSchiacciato == false) {
            contatoreSegniPerContinaure++;
            if (contatoreSegniPerContinaure >= 2) {
                testoDocumento.innerHTML = "";
                /*CALCOLI ************************/
                if (calcoloString == "+") {
        
                    /*SE CE 10 ALLORA*/ 
                    trovatoPrimoDecimale = primoNumero % 10;
                    trovatoSecondoDecimale = secondoNumero % 10;
            
                    if (trovatoPrimoDecimale == 0 || trovatoSecondoDecimale == 0) {
                        primoNumero = +primoNumero;
                        secondoNumero = +secondoNumero;  
                    }
            
                    risultatoNumero = primoNumero + secondoNumero;
            
                    risultatoNumero = risultatoNumero + "";
                    let trovato_somma = risultatoNumero.includes(".");
                    if (trovato_somma == true) {
                        risultatoNumero = +risultatoNumero;
                        risultatoNumero = risultatoNumero.toFixed(4);
                        risultatoNumero = +risultatoNumero;
                        trovato_somma = false;
                    } 
            
            
                } else if(calcoloString == "-"){
            
                    risultatoNumero = primoNumero - secondoNumero;
            
                    risultatoNumero = risultatoNumero + "";
                    let trovato_sottrazione = risultatoNumero.includes(".");
                    if (trovato_sottrazione == true) {
                        risultatoNumero = +risultatoNumero;
                        risultatoNumero = risultatoNumero.toFixed(4);
                        risultatoNumero = +risultatoNumero;
                        trovato_sottrazione = false;
                    } 
            
                } else if(calcoloString == "x"){
                    risultatoNumero = primoNumero * secondoNumero;
            
                    risultatoNumero = risultatoNumero + "";
                    let trovato_moltiplicazione = risultatoNumero.includes(".");
                    if (trovato_moltiplicazione == true) {
                        risultatoNumero = +risultatoNumero;
                        risultatoNumero = risultatoNumero.toFixed(3);
                        risultatoNumero = +risultatoNumero;
                        trovato_moltiplicazione = false;
                    } 

            
                } else if(calcoloString == "/"){
            
                    risultatoNumero = primoNumero / secondoNumero;
                    var risultatoUgualeZero = false;
            
                    if (secondoNumero == 0) {
                        risultatoNumero = 1;
                        risultatoUgualeZero =  true;
                    }
            
                    risultatoNumero = risultatoNumero + "";
                    let trovato_divisione = risultatoNumero.includes(".");
                    if (trovato_divisione == true) {
                        risultatoNumero = +risultatoNumero;
                        risultatoNumero = risultatoNumero.toFixed(3);
                        risultatoNumero = +risultatoNumero;
                        trovato_dsivisione = false;
                    }
                }
                
                if (risultatoUgualeZero == true) {
                    testoDocumento.innerHTML = "impossibile";
                } else {
                    testoDocumento.innerHTML = risultatoNumero;
                }

                primoNumero = risultatoNumero;
                secondoNumero = "";
                primoNumero = +primoNumero;
                ugualeSchiacciato = true;
                /*************************/
            }
        }

        if (contatoreSegniPerContinaure >= 2) {
            contatoreSegniPerContinaure = 1;
        }
    })
    
}


del.addEventListener('click',()=>{

    if (delete_primoNumero == false) {
        if (ugualeSchiacciato != true) {
            testoDocumento.innerHTML = "";
            primoNumero += "";
            let array = primoNumero.split("");
            array.pop();
            primoNumero = array.join("");

            if (primoNumero.length == 0) {
                primoNumero = 0;
            }
            testoDocumento.innerHTML = primoNumero;
            primoNumero = +primoNumero;

            ugualeSchiacciato = false;
        }
    }

    if (primoNumero != "" && calcoloString != "") {
        if (ugualeSchiacciato != true) {
            testoDocumento.innerHTML = "";
            secondoNumero += "";
            let array = secondoNumero.split("");
            array.pop();
            secondoNumero = array.join("");
            
            if (secondoNumero.length == 0) {
                secondoNumero = 0;
            }
            testoDocumento.innerHTML = secondoNumero;
            secondoNumero = +secondoNumero;


            ugualeSchiacciato = false;
        }
    }
})

//SE SCHIACCIO PUNTO LO AGGIUNGO
punto.addEventListener("click",()=>{
    
    //PUNTO PER IL SECONDO NUMERO
    if (punto_secondoNumero == true) {
        testoDocumento.innerHTML = "";
        secondoNumero += ".";
        testoDocumento.innerHTML = secondoNumero;
        punto_secondoNumero = false;   
    }

    //PUNTO PER IL PRIMO NUMERO
        if (punto_primoNumero == false) {
            testoDocumento.innerHTML = "";
            primoNumero += ".";
            testoDocumento.innerHTML = primoNumero;

            //SE IL PRIMO PUNTO DIVENTA TRUE QUESTO IF NON FUNZIONARE MAI PIU
            punto_primoNumero = true;

        }

})

//SE SCHIACCIO IL TASTO UGUALE SUCCEDE QUESTO
risultato.addEventListener('click', () =>{
    testoDocumento.innerHTML = "";
    if (calcoloString == "+") {
        
        /*SE CE 10 ALLORA*/ 
        trovatoPrimoDecimale = primoNumero % 10;
        trovatoSecondoDecimale = secondoNumero % 10;

        if (trovatoPrimoDecimale == 0 || trovatoSecondoDecimale == 0) {
            primoNumero = +primoNumero;
            secondoNumero = +secondoNumero;  
        }

        risultatoNumero = primoNumero + secondoNumero;

        risultatoNumero = risultatoNumero + "";
        let trovato_somma = risultatoNumero.includes(".");
        if (trovato_somma == true) {
            risultatoNumero = +risultatoNumero;
            risultatoNumero = risultatoNumero.toFixed(4);
            risultatoNumero = +risultatoNumero;
            trovato_somma = false;
        } 


    } else if(calcoloString == "-"){

        risultatoNumero = primoNumero - secondoNumero;

        risultatoNumero = risultatoNumero + "";
        let trovato_sottrazione = risultatoNumero.includes(".");
        if (trovato_sottrazione == true) {
            risultatoNumero = +risultatoNumero;
            risultatoNumero = risultatoNumero.toFixed(4);
            risultatoNumero = +risultatoNumero;
            trovato_sottrazione = false;
        } 

    } else if(calcoloString == "x"){
        risultatoNumero = primoNumero * secondoNumero;
        
        risultatoNumero = risultatoNumero + "";
        let trovato_moltiplicazione = risultatoNumero.includes(".");
        if (trovato_moltiplicazione == true) {
            risultatoNumero = +risultatoNumero;
            risultatoNumero = risultatoNumero.toFixed(3);
            risultatoNumero = +risultatoNumero;
            trovato_moltiplicazione = false;
        } 

    } else if(calcoloString == "/"){

        risultatoNumero = primoNumero / secondoNumero;
        var risultatoUgualeZero = false;

        if (secondoNumero == 0) {
            risultatoNumero = 1;
            risultatoUgualeZero =  true;
        }

        risultatoNumero = risultatoNumero + "";
        let trovato_divisione = risultatoNumero.includes(".");
        if (trovato_divisione == true) {
            risultatoNumero = +risultatoNumero;
            risultatoNumero = risultatoNumero.toFixed(3);
            risultatoNumero = +risultatoNumero;
            trovato_dsivisione = false;
        }
    }

    if (risultatoUgualeZero == true) {
        testoDocumento.innerHTML = "impossibile";
    } else {
        testoDocumento.innerHTML = risultatoNumero;
    }
    primoNumero = risultatoNumero;
    secondoNumero = "";

    delete_primoNumero = false;
    primoNumero = +primoNumero;

    ugualeSchiacciato = true;
    ugualePrimaSegno = false;
    contatoreSegniPerContinaure = 1;
})


//EVENTO PER TASTO RESETTARE TUTTO
reset.addEventListener('click', ()=>{
    reseteaUgual();
    
})

function reseteaUgual(){
    testoDocumento.innerHTML = "0";
    primoNumero = "";
    scriviSecondoNumero = false;
    secondoNumero = "";
    scriviPrimoNumero = false;
    calcoloString = "";
    risultatoNumero = 0;

    punto_primoNumero = false;
    punto_secondoNumero = false;

    delete_primoNumero = false;
    delete_secondoNumero = false;

    ugualeSchiacciato = false;
    contatoreSegniPerContinaure = 0;
}

function reseteaUgualAll(){
    testoDocumento.innerHTML = "0";
    scriviSecondoNumero = false;
    secondoNumero = "";
    scriviPrimoNumero = false;
    primoNumero = "";
    calcoloString = "";
    risultatoNumero = 0;

    punto_primoNumero = false;
    punto_secondoNumero = false;

    delete_primoNumero = false;
    delete_secondoNumero = false;

    ugualeSchiacciato = false;
    contatoreSegniPerContinaure = 0;
}

