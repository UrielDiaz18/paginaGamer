export function calcularDescuento(total) {
    if (total < 200){
        let faltante = 200 - total;
        return `te falta ${faltante} usd para la promoción`;
    }else if (total >= 200 && total <= 500){
        let descuento = total * 0.05;
        let nuevoTotal = total - descuento;
        return `Tienes un descuento del 5%, el total con descuento es: ${nuevoTotal} usd`;
    }else if (total > 500){
        let descuento = total * 0.12;
        let nuevoTotal = total - descuento;
        return `Tienes un descuento del 12%, el total con descuento es: ${nuevoTotal} usd`;   
    }    
}