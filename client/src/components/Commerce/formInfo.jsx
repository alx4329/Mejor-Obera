import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cleanError, cleanSuccess, editCommerce } from '../../redux/reducer/commerceReducer';
import Swal from 'sweetalert2';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { getCategories } from '../../redux/reducer/categoriesReducer';
import { Avatar } from '@mui/material';
import './commerce.css'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { Input } from '@mui/material';
import ProfileImage from './ProfileImage';
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

const FormInfo =({info})=>{
    const dispatch = useDispatch()
    const categories = useSelector(state=>state.categories.categories)
    React.useEffect(()=>{
        dispatch(getCategories())
    },[])

    const [state,setState] = useState({
        id:"",
        nombre:"",
        categorias: [],
        direccion: "",
        descripcion: "",
        telefono: "",
        email: "",
        whatsapp: "",
        web_url: '',
        fb_url: "",
        ig_url: "",
        otro_url: "",
        imageUrl:""
    })
    
    
    React.useEffect(()=>{
        if(info&&Object.keys(info).length>0){
            setState({
                id:info._id,
                nombre:info.nombre,
                categorias:info.categorias ,
                direccion:info.direccion ,
                descripcion:info.descripcion ,
                telefono:info.telefono ,
                email:info.email ,
                whatsapp:info.whatsapp ,
                web_url:info.web_url ,
                fb_url:info.fb_url ,
                ig_url:info.ig_url ,
                otro_url:info.otro_url,
                imageUrl:info.imageUrl
            })
        
        }
    },[info])
    const error = useSelector(state => state.userCommerce.error);
    React.useEffect(()=>{
        if(error){
            Swal.fire({
                title: 'Error!',
                text: error,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    },[error])
    const success = useSelector(state => state.userCommerce.successAction)
    React.useEffect(()=>{
        if(success) Swal.fire({
            title: 'Informacion editada',
            icon: 'success',
            confirmButtonText: 'Ok'
          }).then((value)=>{
            value && dispatch(cleanSuccess())
          })
    
    },[success])
    const handleSubmit = (e)=>{
        e.preventDefault()
        Swal.fire({
            title: '¿Editar Informacion del comercio?',
            text: 'Esta acción no se puede revertir.',
            showCancelButton: true,
            icon: 'warning',
            confirmButtonText: 'Editar',
            cancelButtonText:'Cancelar'
          }).then((value)=>{
            value.isConfirmed && dispatch(editCommerce({commerceId:info._id,update:state}))
          })
    }
    const handleRelatives = (event) => {
        setState({
            ...state,
            [event.target.name]: typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value,
        })
        console.log(state)
    };
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        console.log(state)
    }
    function stringToColor(string) {
        let hash = 0;
        let i;
    
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
    
        let color = '#';
    
        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
                width: 150, height: 150 ,fontSize:80
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }
    
    return(
        
        
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                    <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h3" variant="h3" fullWidth>
                        {state.nombre} 
                    </Typography>

                        <ProfileImage nombre={state.nombre} image={state.imageUrl} commerceId={state.id}/>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>                            
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="nombre"
                                        required
                                        fullWidth
                                        id="nombre"
                                        label="Nombre"
                                        autoFocus
                                        onChange={handleChange}
                                        value={state.nombre}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="direccion"
                                        label="Direccion"
                                        name="direccion"
                                        onChange={handleChange}
                                        value={state.direccion}
                                    />
                                </Grid>
                                <Grid item xs={24} sm={12}>
                                    <InputLabel id="demo-multiple-name-label">Categorias</InputLabel>
                                        <Select
                                            labelId="demo-multiple-name-label"
                                            id="demo-multiple-name"
                                            multiple
                                            value={state.categorias}
                                            name="categorias"
                                            onChange={handleRelatives}
                                            input={<OutlinedInput label="Correlativas" fullWidth />}
                                            MenuProps={MenuProps}
                                    >
                                    { categories && categories.map((subject) => (
                                        <MenuItem
                                            key={subject.nombre}
                                            value={subject.nombre}
                                            style={getStyles(subject.nombre, state.categorias, theme)}
                                            >
                                            {subject.nombre}
                                        </MenuItem>
                                    ))}
                                    </Select>

                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="descripcion"
                                        label="Descripcion"
                                        name="descripcion"
                                        onChange={handleChange}
                                        value={state.descripcion}
                                        multiline={true}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="telefono"
                                        label="Telefono"
                                        name="telefono"
                                        onChange={handleChange}
                                        value={state.telefono}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="whatsapp"
                                        label="Whatsapp"
                                        name="whatsapp"
                                        onChange={handleChange}
                                        value={state.whatsapp}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email del Comercio"
                                        name="email"
                                        onChange={handleChange}
                                        value={state.email}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="web_url"
                                        label="Web Url"
                                        name="web_url"
                                        onChange={handleChange}
                                        value={state.web_url}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="fb_url"
                                        label="Facebook Url"
                                        name="fb_url"
                                        onChange={handleChange}
                                        value={state.fb_url}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="ig_url"
                                        label="Instagram Url"
                                        name="ig_url"
                                        onChange={handleChange}
                                        value={state.ig_url}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="otro_url"
                                        label="Otro Url"
                                        name="otro_url"
                                        onChange={handleChange}
                                        value={state.otro_url}
                                    />
                                </Grid>
                                
                            </Grid> 
                            
                            <Button
                                type="submit"
                                
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                >
                                Editar
                            </Button>                                
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
                
                
    )
}

export default FormInfo