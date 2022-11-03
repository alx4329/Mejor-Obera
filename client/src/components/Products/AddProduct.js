import React from 'react'
import TextField from '@mui/material/TextField';
import { Input } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import './AddProduct.css'
import { addProduct, cleanError, cleanSuccess, getProducts } from '../../redux/reducer/commerceReducer';
import { getCategories } from '../../redux/reducer/categoriesReducer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }


const AddProduct = ({id})=>{
    console.log("id",id)
    const dispatch = useDispatch()
    const categories = useSelector(state=>state.categories.categories)
    React.useEffect(()=>{
        dispatch(getCategories())
    },[])
    const [open, setOpen] = React.useState(false)
    const [loadedImage, setLoadedImage] = React.useState(false)
    
    const [state, setState] = React.useState({
        nombre: "",
        descripcion:"",
        categoria:"",
        image:{}
    })
    
    const error = useSelector (state=>state.userCommerce.error)
    
    React.useEffect(()=>{
        if(error){
            Swal.fire({
                title: 'Error!',
                text: error,
                icon: 'error',
                confirmButtonText: 'Ok'
                }).then((value)=>{                
                value && cleanError();
                })
        }
    },[error])
    const success = useSelector(state => state.userCommerce.successAction)
    React.useEffect(()=>{
        if(success) Swal.fire({
            title: 'Producto Agregado',
            icon: 'success',
            confirmButtonText: 'Ok'
          }).then((value)=>{
            value && (dispatch(cleanSuccess()) && dispatch(getProducts({id})))
          })
          
    },[success])
    

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        
    }
    let formdata = new FormData();      
    function handleImage(e){
        console.log(e.target.files[0])
        setLoadedImage(true)
        setState({
            ...state,
            image:e.target.files[0]
        })
        formdata.append("image", e.target.files[0]);
        
        // dispatch(uploadProfileImage({formdata}))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(state)
        console.log(loadedImage)
        if(!state.nombre || !state.descripcion || !loadedImage) {
            Swal.fire({
                text: "Completar todos los campos",
                toast: true,
                customClass: {
                    container: 'my-swal'
                  }
            })
        } else {
            formdata.append("nombre",state.nombre)
            formdata.append("descripcion",state.descripcion)
            formdata.append("categoria",state.categoria)
            formdata.append("commerceId",id)   
            formdata.append("image",state.image)         
            dispatch(addProduct({formdata}))
            setLoadedImage(false)
            handleOpen()
        }        
    }
    
    return(
        <>
            <div className="add-Product-container">
                <Button variant="contained" onClick={handleOpen} >
                    Agregar Oferta
                    </Button>
            </div>
            {                
                <Dialog open={open} onClose={handleOpen}>
                    <DialogTitle>Agregar Oferta</DialogTitle>
                    <DialogContent>
                        
                        <TextField
                            autoFocus
                            name="nombre"
                            value={state.nombre}
                            required
                            fullWidth
                            margin="dense"
                            id="nombre"
                            label="Nombre o titulo del producto u oferta"
                            type="text"
                            variant="standard"
                            onChange={(e) =>{handleChange(e)}}
                        />

                        <TextField
                            autoFocus
                            name="descripcion"
                            value={state.descripcion}
                            margin="dense"
                            id="descripcion"
                            label="Descripcion"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e) =>{handleChange(e)}}
                            
                        />
                        <InputLabel id="demo-name-label">Categorias</InputLabel>
                                        <Select
                                            labelId="demo-name-label"
                                            id="demo-multiple-name"
                                            value={state.categoria}
                                            name="categoria"
                                            onChange={handleChange}
                                            input={<OutlinedInput label="Categoria" fullWidth />}
                                            MenuProps={MenuProps}
                                    >
                                    { categories && categories.map((subject) => (
                                        <MenuItem
                                            key={subject.nombre}
                                            value={subject.nombre}
                                            style={getStyles(subject.nombre, state.categoria, theme)}
                                            >
                                            {subject.nombre}
                                        </MenuItem>
                                    ))}
                                    </Select>
                        <Input
                            className=".app_uploadInput"
                            type="file"
                            onChange={handleImage}
                            name="image"
                            >
                        </Input>
                         
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleOpen}>Cerrar</Button>
                        <Button onClick={handleSubmit}>Agregar</Button>
                    </DialogActions>
                </Dialog>
            }
        </>  
    )

}


export default AddProduct