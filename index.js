let usuario = "Uriel";
let cantProd = 23;
let total = 1479;

import { calcularEnvio } from "./envio.js";
import { calcularDescuento } from "./descuentos.js";
import { esVip } from "./Vip.js";

console.log("¡Hola " + usuario + "! Bienvenido a nuestra tienda gamer.");
console.log(calcularEnvio(cantProd));
console.log(calcularDescuento(total));
console.log(esVip(cantProd, total));
