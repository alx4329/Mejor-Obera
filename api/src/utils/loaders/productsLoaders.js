const Commerce = require('../../schemas/Commerce')
const formData = require('../data/productsData')
const commerceService=require('../../services/commerceService')
const productService=require('../../services/productService')
const Products = require('../../schemas/Products')

const productsLoader = async () =>{
    try{
        for(const data of formData){
            const commerce = await commerceService.findCommerceByName(data.nombreComercio)
            console.log(commerce)
            const imagePath = `C:\\Users\\Alx\\Documents\\GitHub\\Mejor-Obera\\api\\src\\utils\\product_images\\${data.imagen}`
            const newProduct = await productService.createCategoriesProduct(
                data.titulo,
                data.descripcion,
                commerce[0]._id,
                commerce[0].categorias,
                imagePath,
                data.link
            )
            console.log("product created")
        }
    }catch(e){

    }
}

module.exports = productsLoader
