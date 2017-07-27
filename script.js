// Input field variables
var input_client = document.getElementById('info_client');
var input_bucati = document.getElementById('info_bucati');
var input_alte = document.getElementById('info_alte');
var input_lungime = document.getElementById('info_lungime');
var input_latime = document.getElementById('info_latime');
var input_inaltime = document.getElementById('info_inaltime');
var input_bic = document.getElementById('info_bic');

// Control buttons variables
var button_reset = document.getElementById('reset_button');
var button_calculate = document.getElementById('calculate_button');
var button_print = document.getElementById('print_button');

// Variables for the labels around the image
var label_lungime_bic = document.getElementById('label_lungime_bic');
var label_baza_bic = document.getElementById('label_baza_bic');
var label_lungime_bic2 = document.getElementById('label_lungime_bic2');
var label_baza = document.getElementById('label_baza');

var label_right1 = document.getElementById('label_right1');
var label_right2 = document.getElementById('label_right2');
var label_right3 = document.getElementById('label_right3');

var label_left1 = document.getElementById('label_left1');
var label_left2 = document.getElementById('label_left2');
var label_left3 = document.getElementById('label_left3');

var image_td_value = document.getElementById('image_td_value');
var label_bottom2 = document.getElementById('label_bottom2');

// Variables for the bottom stuff bellow the image
var label_suprafata = document.getElementById('label_suprafata');
var label_achizitie = document.getElementById('label_achizitie');
var label_pret = document.getElementById('label_pret');

var input_tarif = document.getElementById('input_tarif');
var input_adaos = document.getElementById('input_adaos');

// Control events listener
button_reset.addEventListener('click', reset_instance, false);
button_calculate.addEventListener('click', calculate, false);
button_print.addEventListener('click', print, false);


// functions

function calculate() {
    // alert('it works');

    label_lungime_bic.innerText = parseInt(input_lungime.value) + parseInt(input_bic.value);
    label_baza.innerText = parseInt(input_latime.value) + parseInt(input_bic.value);
    label_baza_bic.innerText =  parseInt(input_latime.value) + parseInt(input_bic.value);
    label_lungime_bic2.innerText = label_lungime_bic.innerText;

    label_left1.innerText = parseInt(input_latime.value) / 2 + parseInt(input_bic.value);
    label_left2.innerText = parseInt(input_inaltime.value) + parseInt(input_bic.value);
    label_left3.innerText = parseInt(input_latime.value) / 2 + parseInt(input_bic.value);


    image_td_value.innerText = parseInt(label_left1.innerText) + parseInt(label_left2.innerText) +
        parseInt(label_left3.innerText);
    label_bottom2.innerText = parseInt(label_lungime_bic.innerText) + parseInt(label_baza.innerText) + 
        parseInt(label_baza_bic.innerText) +  parseInt(label_lungime_bic2.innerText) + 50 + parseInt(input_bic.value);

    label_right1.innerText = parseInt(input_latime.value) / 2;
    label_right2.innerText = parseInt(input_inaltime.value);
    label_right3.innerText = parseInt(input_latime.value) / 2;


    label_suprafata.innerText = parseInt(image_td_value.innerText) * parseInt(label_bottom2.innerText) / 1000000;
    label_achizitie.innerText = parseFloat(label_suprafata.innerText) * parseFloat(input_tarif.value);
    label_pret.innerText = (parseFloat(label_achizitie.innerText) * (parseFloat(input_adaos.value))/100) + parseFloat(label_achizitie.innerText);

    // input_tarif.value = "0";
    // input_adaos.value = "0";


}

function print() {
    alert('it works')
}


function reset_instance() {
    label_lungime_bic.innerText = "0";
    label_lungime_bic2.innerText = "0";
    label_baza.innerText = "0";
    label_baza_bic.innerText = "0";

    input_lungime.value = "0";
    input_latime.value = "0";
    input_inaltime.value = "0";

    input_bic.value = "1";

    input_client.value = "";
    input_bucati.value = "0";
    input_alte.value = "";

    label_right1.innerText = "0";
    label_right2.innerText = "0";
    label_right3.innerText = "0";

    label_left1.innerText = "0";
    label_left2.innerText = "0";
    label_left3.innerText = "0";

    image_td_value.innerText ="0";
    label_bottom2.innerText ="0";

    label_suprafata.innerText ="0";
    label_achizitie.innerText ="0";
    label_pret.innerText ="0";

    input_tarif.value = "0";
    input_adaos.value = "0";
   
    // // console.log('Clear board')
}