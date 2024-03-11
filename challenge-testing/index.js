
//Creamos la clase CarritoCompra

class CarritoCompra{

    constructor(){
        this.lista = []
    }

    agregarProducto(producto){

        this.lista.push(producto);
        return this.lista;
    }

    calcularTotal(){
        let total = 0;
        this.lista.forEach(producto => {
            total += (producto.price*producto.quantity);
        });
        return total;
    }

    aplicarDescuento(porcentaje) {
        let total = this.calcularTotal()
        let totalDescuento = total*(porcentaje/100);
        return total-totalDescuento;
    } 

};

module.exports = CarritoCompra;