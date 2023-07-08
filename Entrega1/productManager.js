class ProductManager {
    constructor () {
        this.products = []
    }

    addProduct (title, description, price, thumbnail, code, stock) {
        this.products.push({title, description, price, thumbnail, code, stock})
    }

    getProduct(){
        return this.products;
    }
}

const productos = new ProductManager

productos.addProduct (  
"Producto prueba1",
"Este producto es una prueba",
200,
"Sin imagen",
"abc123",
25
);
productos.addProduct(
"Producto prueba2",
"Este producto es una prueba",
200,
"Sin imagen",
"abc123",
25
);
productos.addProduct(
"Producto prueba3",
"Este producto es una prueba",
200,
"Sin imagen",
"abc124",
25)

console.log (productos.getProduct());