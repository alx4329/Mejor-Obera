const Category = require('../../schemas/Category')
const categories_data = require('../data/categories')

const categoriesLoader = async() =>{
    const initialCategories = await Category.find({})
    let created = categories_data.map((data)=>{
        return new Promise(async(resolve,reject)=>{
            try{
                if(initialCategories.find(item=>item.nombre===data.nombre)==undefined){
                    const newCategory = new Category(data)
                    newCategory.save(function(err,obj){
                        if(err) {
                            console.log(err)
                            reject(err)
                        } else{
                            resolve("Categoria agregado"+obj.nombre)
                        }
                    })
                }
            }catch(e){
                reject(e.message||e)
            }
        })
    })
    Promise.all(created).then(()=>console.log("Categories created"))
    .catch(err=> console.log(err))
}

module.exports = categoriesLoader