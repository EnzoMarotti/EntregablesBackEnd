import  {promises as fs} from 'fs'

class ProductManager {
    constructor () {
        this.path = "./productos.json"
        this.products = [];
    }

// ---Métood addProduct 
addProduct = async (title, description, price, thumbnail, code, stock) => {
        

    const newProduct = {
        title, 
        description, 
        price, 
        thumbnail, 
        code, 
        stock,
        }

        const codeProduct = this.products.find((newProduct) => newProduct.code === code);
        if (!codeProduct) {
            if (this.products.length === 0) {
              newProduct.id = 1;
            } else {    
                newProduct.id = this.products [this.products.length - 1].id + 1;
            }
        this.products.push (newProduct);
        await fs.writeFile( this.path, JSON.stringify(this.products), "utf-8");
    }else {
        return console.log  ("el codigo no puede repetirse.")
    };}


    getProducts = async ()  => {
        try{
            const allProducts = await fs.readFile(this.path, "utf-8");
            let parsedProducts = JSON.parse(allProducts);
            return parsedProducts;
        } catch (err) {
            console.log (err);
        }
    }

    getProductsById = async (productId) => {
        try {
            let allProducts = await this.getProducts();
            const idProduct = allProducts.find((product) => product.id === productId);
            if (idProduct) {
            console.log(idProduct);
            return idProduct;
        }
        }catch {
            console.log ("No existe el producto con ese ID")
        }   
    }

    

    deleteProduct = async (id) => {
        try {
            let products = await fs.readFile(this.path, "utf8");
            let allProducts = JSON.parse(products);
            let deletedProduct = allProducts.filter((product) => product.id !== parseInt(id));
            if(deletedProduct){
                await fs.writeFile(this.path, JSON.stringify(deletedProduct), "utf8");
                console.log("Producto eliminado");
                console.log(deletedProduct);
            }
        } catch {
            console.log ("error")
        }
    }

    updateProduct = async ({ id, ...producto}) => {
        try {
            let allProducts = await this.getProducts();
            const updatedProductIndex = allProducts.findIndex((product) => product.id === id)
            if (updatedProductIndex !== -1){
                allProducts[updatedProductIndex] = {...producto, id};
                await fs.writeFile(this.path, JSON.stringify(allProducts), "utf-8");
                console.log("Producto actualizado");
                console.log(allProducts[updatedProductIndex]);
            } else {
                console.log ("no existe el producto con  ese ID")
            }
        } catch {
            console.log ("error");
        }

    }
}



const productos = new ProductManager ();

productos.addProduct(
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
    "abc124",
    25
  );
  productos.addProduct(
    "Producto prueba3",
    "Este producto es una prueba",
    200,
    "Sin imagen",
    "abc125",
    25
  );
  productos.addProduct(
    "Producto prueba3",
    "Este producto es una prueba",
    200,
    "Sin imagen",
    "abc125",
    25
  );
  productos.addProduct(
    "Producto prueba4",
    "Este producto es una prueba",
    200,
    "Sin imagen",
    "abc126",
    25
  );



//productos.getProducts ()

// productos.getProductsById (1)

//productos.deleteProduct (3)

productos.updateProduct({
    title: "Producto prueba2",
    description: "Este producto es una prueba",
    price: 5000,
    thumbnail: "Sin imagen",
    code: "abc129",
    stock: 25,
    id: 2,
  });