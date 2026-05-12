export function esVip(cantProd, total) {
    if(cantProd > 20 && total > 1000){
       return  `¡Felicidades! Eres un cliente VIP.`;
    }else{
        return false;
    }
}