
class ProductManager {
    constructor () {
        this.products = []
    }


    static id = 0;



// ---Métood addProduct 
    addProduct (title, description, price, thumbnail, code, stock) {


//--- Metodo para evaluar si el codigo se repite.
    const codeProduct = this.products.find((product) => product.code === code);
        if (!codeProduct) {
// --- Si el código no está repetido, creamos un newProduct.
        const newProduct = {
            title, 
            description, 
            price, 
            thumbnail, 
            code, 
            stock,
        }

// --- Validación que si faltan o no los values del producto. Si no faltan, que agregue un ID al producto usando if y spread operator.
       if (!Object.values (newProduct).includes(undefined)){
        ProductManager.id++
        this.products.push({...newProduct, id:ProductManager.id});
    }else {
        console.log ('todos los campos son requeridos.')
    }

// --- si el Código está repetido, mandamos el siguiente mensaje:
} else {
    return console.log (`El codigo ${code} está repetido.`)
 }
} 
    

    

// --- Función getProducts
    getProduct(){
        return this.products;
    }

//---Funcion para buscar productos segun su id.
    find (id) {
        return this.products.find((producto) => producto.id === id)
    }

 //---Validación if para evaluar si el producto se encuentra segun id.
    getProductById (id){
        if(!this.find(id)){
            console.log ('Not Found')
        }else {
            console.log (this.find(id))
        }
    }
}



// ---Testing ---

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



// ---Validación si se pushea al array los productos creados.

console.log (productos.getProduct());        //Array con producto 1 y 3. el 2 no sale porque tiene codigo repetido. (Console.log de codigo repetido.)



// ---Validación de si el ID coincide con el del producto.

productos.getProductById (2);       //objeto con id 2.


productos.getProductById (4);       //not found.

