const Category = require('../schemas/Category')

const getCategories = async()=>{
    return new Promise(async(resolve,reject)=>{
        try {
            const categories = await Category.find({})
            resolve(categories)
        }catch(e){
            reject(e.message||e)
        }
    })
}

module.exports = {getCategories}