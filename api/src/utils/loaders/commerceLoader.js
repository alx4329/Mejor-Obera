const User = require('../../schemas/User')
const Commerce = require('../../schemas/User')
const formData = require('../data/formData')
const userService = require('../../services/userService')
const commerceService = require('../../services/commerceService')

const commerceLoader = async () => {
    const initialcommerce = await Commerce.find({})
    let created = formData.map((data)=>{
        return new Promise(async(resolve,reject)=>{
            try{
                if(initialUsers.find(item=>item.cuitComercio==data.CUIT)==undefined){
                    const newUser = await userService.createUser(data.email,data.CUIT.toString(),data.telefono,data.CUIT)
                    console.log(newUser)
                    const newCommerce = await commerceService.createCommerce({
                        nombre:data.nombreComercio,
                        razonSocial:data.razonSocial,
                        CUIT:data.CUIT,
                        categorias:data.categorias,
                        direccion:data.direccionComercio,
                        descripcion:data.descripcion,
                        telefono:data.telefonoComercio,
                        whatsapp:data.whatsappComercio,
                        email:data.emailComercio,
                        web_url:data.web_url,
                        fb_url:data.fb_url,
                        ig_url:data.ig_url,
                        otro_url:data.otro_url,
                        userId:newUser.userId
                    })
                    resolve({user:newUser,commerce:newCommerce})
                }
            }catch(e){
                console.log(e)
                reject(e.message||e)
            }
        })
    })
    Promise.all(created).then(()=>console.log("Categories created"))
    .catch(err=> console.log(err))
}

module.exports = commerceLoader