import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCommerces, setCommerceDetail } from '../../redux/reducer/noAuth';
import { Avatar, CardHeader, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import useWindowSize from '../../hooks/useWindowSize';

export default function OfferCard({offer,detailCommerce}) {
    const windowSize = useWindowSize()
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const commerces = useSelector(state=>state.noAuth.commerces)

    const detail = commerces.find(item => item._id==offer.idComercio)
    
    const goToDetail=(id)=>{
        dispatch(setCommerceDetail(detail))
        navigate(`/comercio/${id}`)
    }
    const goToCommerce = (id) =>{
      navigate(`/comercio/${id}`)
    }
    const regex = /[abcdefghijklmnñopqrstuvwyz-]/ig
    const message = `Hola! vi tu comercio en *mejorobera.com.ar* y quisiera consultarte por...`
  return (
    <Card  sx={{ mb:'1rem',mr:'1rem',ml:'1rem' , maxWidth: (windowSize.innerWidth>720?200:150) }}>
      <CardHeader
        
        avatar={
          windowSize.innerWidth>720 ? <Avatar src={detail?.imageUrl} sx={{ width: 30, height: 30 }} aria-label="recipe"/> : null
          
        }
        titleTypographyProps={windowSize.innerWidth>720?{variant:'title' }:{variant:'h6' }}
        title={offer.nombre}
        subheader={detail?.nombre}
      />
      
      <div className={windowSize.innerWidth>720?'offer-image-container':'res-offer-image-container'} >
        <img
          className={windowSize.innerWidth>720?'offer-image':'res-offer-image'}
          src={offer.image}
          srcSet={offer.image}
          alt={offer.nombre}
        />
      </div>
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {offer.descripcion}
        </Typography>
      </CardContent>
      <CardActions className='offer-actions-container' >
      {offer.redirectsTo && 
                <div><a href={`https://wa.me/+54${((offer.redirectsTo).replace(/\s/g,'').replace(regex,""))}/?text=${message}`} target='_blank' rel="noreferrer nofollow" >
                    <Button size="small">Consultar</Button>
                </a></div>
            }
        {!detailCommerce && <Button onClick={()=>goToDetail(offer.idComercio)} size="small">Comercio</Button>}
      </CardActions>
    </Card>
  );
}