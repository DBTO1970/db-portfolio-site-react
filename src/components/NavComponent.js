import React from "react";
import { Outlet, Link } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import MiscellaneousServicesRoundedIcon from '@mui/icons-material/MiscellaneousServicesRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';

import Typography from '@mui/material/Typography';
function Nav() {

    return (
        <div>
            <h1>Nav</h1>
            {/* <nav 
          style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
          }}>
          <Grid container>
            
              <Link to="/about" style={{textDecoration: "none"}}><Button xs={12} md={3} startIcon={<InfoRoundedIcon />} variant="contained" sx={{color: "gray", backgroundColor: "lightgreen"}}>About</Button></Link>
              <Link to="/services" style={{textDecoration: "none"}}>
                <Button md={3}
                startIcon={<MiscellaneousServicesRoundedIcon />}
                variant="contained" sx={{color: "gray", backgroundColor: "lightgreen", margin: "0 5px 0 5px"}}>Portfolio</Button></Link>
              <Link to="/contact" style={{textDecoration: "none"}}>
                <Button xs={12} md={3} 
                  startIcon={<ConnectWithoutContactRoundedIcon />}
                  variant="contained" sx={{color: "gray", backgroundColor: "lightgreen"}}>Contact</Button></Link>
            
            </Grid>
          
            <Typography>Main Page</Typography>
          </nav> */}

        </div>
    )
}

export default Nav;