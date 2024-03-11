const CarritoCompra = require("../index");

let carrito;
let producto1; let producto2; let producto3;

//Debemos probar que: 

// 1. Cuando se ejecute el metodo agregarProducto retorne la lista con todos los prodcutos
// 2. Cuando se ejecute el método calcularTotal retone el total de todos los productos 
// 3. Cuando se ejecute el método aplicarDescuento regrese el total aplicado el descuento
// 4. CarritoCompra compra deberia ser una clase
// 5. Carrito deberia ser una instancia de la clase CarritoCompra


beforeEach(() => {
    carrito = new CarritoCompra();
    producto1 = {nombre: "cafe con leche", price: 10, quantity: 2};
    producto2 = {nombre: "Torta", price: 40, quantity: 1};
    producto3 = {nombre: "Florero", price: 50, quantity: 3}

});



describe("En el método Carrito de compra", ()=>{

    it("CarritoCompra compra deberia ser una clase", ()=>{
        expect( typeof CarritoCompra.prototype.constructor).toBe('function')
    })

    it("carrito deberia ser una instancia de la clase CarritoCompra", ()=>{
        expect(carrito instanceof CarritoCompra).toBe(true)
    })

    it("carrito se inicie con una lista vacia", ()=>{
        expect(carrito.lista).toEqual([])
    })


    it("Cuando se ejecute el metodo agregarProducto  retorne la lista con todos los prodcutos (un producto)", ()=>{
        carrito.agregarProducto(producto1);

        expect(carrito.lista).toContain(producto1);
       
    });

    it("Cuando se ejecute el metodo agregarProducto  retorne la lista con todos los prodcutos (un producto)", ()=>{

        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);

        expect(carrito.lista).toEqual([producto1, producto2]);
    })

    it("Probar calcularTotal retone el total de todos los productos (Dos productos)",()=>{
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);

        expect(carrito.calcularTotal()).toBe(60)
    })

    it("Probar calcularTotal retone el total de todos los productos (3 productos)",()=>{
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        carrito.agregarProducto(producto3);

        expect(carrito.calcularTotal()).toBe(210)
    })

    it("Probar aplicarDescuento retone el total de todos los productos con descuento (2 productos)",()=>{
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);

        expect(carrito.aplicarDescuento(10)).toBe(54)
        expect(carrito.aplicarDescuento(50)).toBe(30)
        expect(carrito.aplicarDescuento(100)).toBe(0)
    })

    it("Probar aplicarDescuento retone el total de todos los productos con descuento (3 productos)",()=>{
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        carrito.agregarProducto(producto3);

        expect(carrito.aplicarDescuento(10)).toBe(189)
        expect(carrito.aplicarDescuento(50)).toBe(105)
    })
    
    
    
})

