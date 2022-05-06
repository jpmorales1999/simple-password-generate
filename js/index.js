'use strict'

const minisculas = 'abcdefghijklmnñopqrstuvwxyz';
const mayusculas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const numeros = '0123456789';
const simbolos = '!"#$%&/()=<>-:;[*_^`+?¡¿.]{}';
let caracteres = minisculas;

document.getElementById('button').addEventListener('click', (e) => {
    e.preventDefault()

    const select = document.getElementById('select').value;
    const checkSimbolos = document.getElementById('simbolos').checked;
    const checkNumeros = document.getElementById('numeros').checked;
    const checkMayusculas = document.getElementById('mayusculas').checked;

    if (checkSimbolos || checkNumeros || checkMayusculas) {
        if (checkSimbolos) {
            caracteres += simbolos 
        } 

        if (checkNumeros) {
            caracteres += numeros
        }

        if (checkMayusculas) {
            caracteres += mayusculas
        }
    } 

    let passwordGenerate = generarClave(select);

    document.getElementById('password').value = passwordGenerate;
})

const generarClave = (long) => {
    let clave = '';
    let numero;

    for (let i = 0; i < long; i++) 
    {
        numero = obtenerNumero(0, caracteres.length);
        clave += caracteres.substring(numero, numero + 1);
    }

    return clave;
}

const obtenerNumero = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}