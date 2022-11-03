import React from 'react'
import { Avatar, Box, Button, Input, Typography } from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { cleanSuccess, getCommerce, uploadProfileImage } from '../../redux/reducer/commerceReducer';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const ProfileImage = ({nombre,image,commerceId}) => {

    const success = useSelector(state=> state.userCommerce.successAction)
    const dispatch = useDispatch()
    const [addImage,setAddImage]=React.useState(false)
    const [imageToShow, setImageToShow] = React.useState(image)


    function uploadImage(){

    }
    function handleChange(e){
        console.log(e.target.files[0])
        let formdata = new FormData();      
        formdata.append("image", e.target.files[0]);
        formdata.append("commerceId",commerceId)
        dispatch(uploadProfileImage({formdata}))
    }
    React.useEffect(()=>{
        if(success) {
            dispatch(getCommerce({commerceId}))
            Swal.fire({
                title: 'Imagen Agregada',
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then((value)=>{
                value && dispatch(cleanSuccess())
            })
        }
        setAddImage(false)
    },[success])
    React.useEffect(()=>{
        if(image) setImageToShow(image)
    },[image])
    return(

        <>
        <Avatar alt="Logo del Comercio" src={imageToShow}  sx={{
                width: 150, height: 150 ,fontSize:40
            }}>
                ...
            </Avatar>
        
        {
            !addImage ? (
                <Button variant="outlined" onClick={()=>{setAddImage(true)}} >
                    Editar logo del comercio 
                </Button>
            ): (
                <Box
                    sx={{
                        display:"flex",
                        alignItems:"center"
                    }}
                    >
                        <Input
                            className=".app_uploadInput"
                            type="file"
                            onChange={handleChange}
                            
                            >
                        </Input>
                        <Button
                                variant="text"
                                component="label"
                                onClick={uploadImage}
                            >
                            <AddCircleOutlineRoundedIcon/>
                        </Button>
                            
                </Box>
            )
        }
        </>
    )
}
export default ProfileImage