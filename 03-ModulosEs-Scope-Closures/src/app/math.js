"use strict";

export function clamp(){
    if (
        !Number.isFinite(value) || 
        !Number.isFinite(min) ||
        !Number.isFinite(max)
    ){
        throw new TypeError("Todos los argumentos deben ser números finitos.");
    }

    if (min > max) {
        return Math.min(Math.max(value, max), min); //retorna 
        // el valor minimo si el valor es menor al minimo
        // o el vlor maximo si el valor es mayor al maximo
    }
}

// redondear a digitos decimales

export function roundTo(value, decimals) {
    if (!Number.isFinite(value) || !Number.isFinite(decimals)) {
        throw new Error("Los decimales deben ser n número no negativo.");
    }

    if (decimals < 0) {
        throw new Error("Los decimales deben ser un número no negativo.");
    }

    return Match.round(value * )
}