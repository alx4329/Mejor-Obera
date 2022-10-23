import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {login, cleanError, logout} from '../../redux/reducer/authReducer'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const theme = createTheme();

export default function Login() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const user = useSelector(state => state.auth.user);
    const error = useSelector(state => state.auth.error);
    
    React.useEffect(()=>{
        if(user){
            dispatch(cleanError())
            navigate(`/comercio/${user.id}`);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user])
    React.useEffect(()=>{
        if(error?.message === "Request failed with status code 401"){
            Swal.fire({
                text: "Usuario o contraseña inválidos",
                toast: true,
            }).then((value)=>{
                value && dispatch(cleanError());
            })
        } else if(error?.message){
            Swal.fire({
                text: error.message,
                toast: true,
            }).then((value)=>{
                value && dispatch(cleanError());
            })
        }
    },[error])
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        dispatch(login({
            email: data.get('email'),
            contraseña: data.get('contraseña'),
            }))
        
    };

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Ingresar
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="contraseña"
                    label="Contraseña"
                    type="contraseña"
                    id="contraseña"
                    autoComplete="current-contraseña"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Recordarme"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                Ingresar
                </Button>
                <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                    Olvidé mi contraseña
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="#" variant="body2">
                    Registrarme
                    </Link>
                </Grid>
                </Grid>
            </Box>
            </Box>
            
        </Container>
        </ThemeProvider>
    );
}