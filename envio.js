

export function calcularEnvio(cantProd) {
    if (cantProd < 3) {
        return "No se puede comprar menos de 3 productos";
    } else if (cantProd >= 3 && cantProd <= 10) {
        return "El costo de envío es de: 15 dólares";
    } else if (cantProd > 10){
        return "El costo de envío es gratis";
    }
}
