let busqueda = prompt("Ingrese el producto que desea buscar en el inventario:");
let productos = ["mouse", "teclado", "monitor", "audifonos"];

function mostrarInventario(productos){
    for(let i = 0; i < productos.length; i++){
        console.log(productos[i]);
    }
}
console.log("Inventario actual:");
mostrarInventario(productos);

function agregarProducto(producto){
    productos.push(producto);
    console.log("Producto agregado: " + producto);
} 
agregarProducto("control");
console.log("Inventario actualizado:");
mostrarInventario(productos);


function eliminarProducto(producto){
    productos.pop(producto);
    console.log("Producto eliminado: " + producto);
}
eliminarProducto("control");
console.log("Inventario actualizado:");
mostrarInventario(productos);

function remplazarProducto(indice, nuevoProducto){
    productos[indice] = nuevoProducto;
    console.log("El producto remplazado fue audifonos por: " + nuevoProducto);
}
remplazarProducto(3, "HDMI");
console.log("Inventario actualizado:");
mostrarInventario(productos);

function buscarProducto(producto){
    const indice = productos.indexOf(producto);
    if(indice !== -1){
        console.log("Producto encontrado: " + producto + " en el indice: " + indice);
    } else {
        console.log("Producto no encontrado: " + producto);
    }
}
buscarProducto("monitor");
buscarProducto("webcam");
mostrarInventario(productos);   

function ordenarinventario(productos){
    productos.sort();
    console.log("Inventario ordenado: " + productos);
}
ordenarinventario(productos);

function cantidadProductos(productos){
    console.log("Cantidad de productos en el inventario: " + productos.length + " productos");
}
cantidadProductos(productos);