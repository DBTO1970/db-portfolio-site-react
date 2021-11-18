import { 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Button, 
    Typography
 } from "@mui/material";
import React from "react";
// import { useParams } from "react-router-dom";

// import portfolioDB from '../data/portfolio';
function Portfolio() {
    // let params = useParams();
    // let data = getData(parseInt(params.Id, 10));

    // const makeCard(data) => {
    //     <Card sx={{ maxWidth: 345 }}>
    //         <CardMedia
    //         component="img"
    //         alt="green iguana"
    //         height="140"
    //         image="/static/images/cards/contemplative-reptile.jpg"
    //     />
    //     <CardContent>
    //         <Typography gutterBottom variant="h5" component="div">
    //         {data.name}
    //         </Typography>
    //         <Typography variant="body2" color="text.secondary">
    //         {data.description}
    //         </Typography>
    //     </CardContent>
    //     <CardActions>
    //         <Button size="small" onClick={window.location.href = `${data.url}`}>visit site</Button>
            
    //     </CardActions>

    //     </Card>
    // }
    return (
        <div className="section" style={{backgroundColor: 'rgba( 85, 13,  0,1)'}}>
            <h1>Portfolio</h1>

        </div>
    )
}

export default Portfolio;