import { Typography } from "@mui/material";
import React from "react";

function Footer() {

    return (
        <div style={{width: '100vw', backgroundColor: 'rgba(108,147,159,1)'}}>
                <Typography>Social</Typography>
                {/* <a class="btn btn-social-icon btn-github mx-2" href="https://github.com/DBTO1970" target="_blank"><i class="fa fa-github"></i></a>
                <a class="btn btn-social-icon btn-linkedin mx-2" href="https://www.linkedin.com/in/don-barto-jr-085ab31/" target="_blank"><i class="fa fa-linkedin"></i></a>
                <a class="btn btn-social-icon btn-twitter mx-2" href="https://twitter.com/DonBartoJr1" target="_blank"><i class="fa fa-twitter"></i></a> */}
            
            <Typography>&copy;2021 DonBarto.com</Typography>
        </div>
    )
}

export default Footer;