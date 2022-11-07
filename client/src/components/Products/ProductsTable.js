import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { cleanSuccessDeleted, deleteProduct, getProducts } from '../../redux/reducer/commerceReducer';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import './ProductsTable.css'
function createData(
    nombre,
    descripcion,
    categoria
) {
  return {
    nombre,
    categoria,
    descripcion
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const dispatch= useDispatch()
    const handleDelete=(id)=>{
        Swal.fire({
            title: '¿Está seguro de eliminar oferta?',
            text: 'Esta acción no se puede revertir.',
            showCancelButton: true,
            icon: 'warning',
            confirmButtonText: 'Eliminar',
            cancelButtonText:'Cancelar'
          }).then((value)=>{
            value.isConfirmed && (dispatch(deleteProduct({id}))&&dispatch(getProducts({id:row.idComercio})))
          })
        
    }
    const successDeleted = useSelector(state=>state.userCommerce.successDeleted)
    React.useEffect(()=>{
      console.log(successDeleted)
        if(successDeleted){
            console.log("adentro")
            Swal.fire({
                title: 'Oferta Eliminada',
                icon: 'success',
                confirmButtonText: 'Ok'
                }).then((value)=>{                
                value && dispatch(cleanSuccessDeleted());
                })
        }
    },[successDeleted])
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.nombre}
        </TableCell>
        <TableCell align="right">{row.categoria}</TableCell>
        <TableCell align="right">
            <Button variant="outlined" href={row.image} target='_blank' rel="noreferrer nofollow" >Ver Imagen</Button>
        </TableCell>
        <TableCell align="right">
        <Button onClick={()=>handleDelete(row._id)} variant="outlined" startIcon={<DeleteIcon />}>
                    Eliminar
                </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                {row.descripcion}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('20% OFF', "20% de descuento en efectivo. Más 10% en tu proxima compra de noviembre.", "Indumentaria y Calzado, Lencería y Boutique"),
  createData('3x2', "3 x 2 en fundas. Delivery gratis dentro de Obera superando la compra de $2000.", "Electro y Tecno", 37, 4.3, 4.99)
];

export default function ProductsTable({productList,nombreComercio}) {
    console.log("PRODUCTLIST",productList)
  return (
    <>
    <div className='table-container' >

    <Typography component="h4" variant="h4" fullWidth>
                    Ofertas {nombreComercio} 
                    </Typography>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
                <Typography variant="h6">Oferta </Typography>
            </TableCell>
            <TableCell align="right"><Typography variant="h6">Categoria </Typography></TableCell>
            <TableCell align='right'><Typography variant="h6">Imagen </Typography></TableCell>
            <TableCell align='right'>
                <Typography variant="h6">Eliminar </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productList?.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  );
}
