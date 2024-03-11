const CarritoCompra = require("../index");

let carrito;
let producto1; let producto2; let producto3;

//Debemos probar que: 

// 1. Cuando se ejecute el metodo agregarProducto retorne la lista con todos los prodcutos
// 2. Cuando se ejecute el método calcularTotal retone el total de todos los productos 
// 3. Cuando se ejecute el método aplicarDescuento regrese el total aplicado el descuento



beforeEach(() => {
    carrito = new CarritoCompra();
    producto1 = {nombre: "cafe con leche", price: 10};
    producto2 = {nombre: "Torta", price: 40};
    producto3 = {nombre: "Florero", price: 50}

});



describe("En el método Carrito de compra", ()=>{

    it("Cuando se ejecute el metodo agregarProducto  retorne la lista con todos los prodcutos (un producto)", ()=>{
        carrito.agregarProducto(producto1);

        expect(carrito.lista).toEqual([{nombre: "cafe con leche", price: 10}]);
       
    });

    it("Cuando se ejecute el metodo agregarProducto  retorne la lista con todos los prodcutos (un producto)", ()=>{

        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);

        expect(carrito.lista).toEqual([producto1, producto2]);
    })

    it("Probar calcularTotal retone el total de todos los productos (Dos productos)",()=>{
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);

        expect(carrito.calcularTotal()).toBe(50)
    })

    it("Probar calcularTotal retone el total de todos los productos (3 productos)",()=>{
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        carrito.agregarProducto(producto3);

        expect(carrito.calcularTotal()).toBe(100)
    })

    it("Probar aplicarDescuento retone el total de todos los productos con descuento (2 productos)",()=>{
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);

        expect(carrito.aplicarDescuento(10)).toBe(45)
        expect(carrito.aplicarDescuento(50)).toBe(25)
        expect(carrito.aplicarDescuento(100)).toBe(0)
    })

    it("Probar aplicarDescuento retone el total de todos los productos con descuento (3 productos)",()=>{
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        carrito.agregarProducto(producto3);

        expect(carrito.aplicarDescuento(10)).toBe(90)
        expect(carrito.aplicarDescuento(50)).toBe(50)
    })
    
    
    
})

