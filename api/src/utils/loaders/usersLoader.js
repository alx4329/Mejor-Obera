const User = require('../../schemas/User')
const Commerce = require('../../schemas/User')
const formData = require('../data/newData')
const userService = require('../../services/userService')
const commerceService = require('../../services/commerceService')

const usersLoader = async () => {
            try{
                for(const data of formData){
                    const alreadyExists = await User.find({email:data.email})
                    console.log(alreadyExists)
                    if(alreadyExists.length>0){
                        console.log("alreadyExists",alreadyExists)
                        const newCommerce = await commerceService.createCommerce({
                            nombre:data.nombreComercio,
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
                            userId:alreadyExists[0]._id,
                            auspicia:data.auspicia
                        })
                        const imagePath = `C:\\Users\\Alx\\Documents\\GitHub\\Mejor-Obera\\api\\src\\utils\\logos_comercios\\mejorobera_${data.nombreComercio}.jpg`
                        const uploaded = await commerceService.uploadFromLocal(newCommerce.id,imagePath)
                        console.log(uploaded)
                    }else{
                        const userEmail = (data.email || data.emailComercio)
                        const newUser = await userService.createUser(data.email||data.emailComercio,data.CUIT.toString(),data.CUIT)
                        console.log("newUser",newUser)
                        const newCommerce = await commerceService.createCommerce({
                            nombre:data.nombreComercio,
                            CUIT:data.CUIT,
                            categorias:data.categorias,
                            direccion:data.direccionComercio,
                            descripcion:data.descripcion,
                            telefono:data.telefonoComercio,
                            whatsapp:data.whatsappCommercio,
                            email:data.emailComercio,
                            web_url:data.web_url,
                            fb_url:data.fb_url,
                            ig_url:data.ig_url,
                            otro_url:data.otro_url,
                            userId:newUser.userId,
                            auspicia:data.auspicia
                        })
                        const imagePath = `C:\\Users\\Alx\\Documents\\GitHub\\Mejor-Obera\\api\\src\\utils\\logos_comercios\\mejorobera_${data.nombreComercio}.jpg`
                        const uploaded = await commerceService.uploadFromLocal(newCommerce.id,imagePath)
                        console.log(uploaded)
                    }
                }
                console.log("Users and commerces created")
            }catch(e){
                console.log(e)
            }
        }
        
        module.exports = usersLoader