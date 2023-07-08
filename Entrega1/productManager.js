class ProductManager {
    constructor () {
        this.products = []
    }

    static id = 0;

    //Funcion addProduct que agrega un Id nuevo
    addProduct (title, description, price, thumbnail, code, stock) {
        ProductManager.id++
        this.products.push({title, description, price, thumbnail, code, stock, id:ProductManager.id})
    }

    getProduct(){
        return this.products;
    }

    //Funcion para buscar productos segun su id.
    find (id) {
        return this.products.find((producto) => producto.id === id)
    }

    //Validación if para evaluar si el producto se encuentra segun id.
    getProductById (id){
        if(!this.find(id)){
            console.log ('Not Found')
        }else {
            console.log (this.find(id))
        }
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


// ---Testing ---

//Validación si se pushea al array los productos creados.
console.log (productos.getProduct());

//Validación de si el ID coincide con el del producto.
productos.getProductById (2);