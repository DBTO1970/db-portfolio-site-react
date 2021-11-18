import React from "react";
import { Typography, Card, Grid } from "@mui/material";



function About() {

    return (
        <Grid 
            container           
            style={{ minHeight: '100vh' }}
            display= 'flex'
            justifyContent= 'left'
            className="section" 
            backgroundColor= 'rgba( 85, 60,  0,1)'
            >
        <Grid item>
            <div style={{width: '80vw', justifyContent: 'center'}}>
            <Typography>About Me</Typography>
            <Card>
                
                <Typography>Thank you for visiting my portfolio site.  In addition to the projects featured in the 'Portfolio' section, this site was created using HTML, CSS, Javascript, and Bootstrap 4 framework.</Typography>

                <Typography>I am using a php script to handle the contact form submission, and javascript to redirect to the Thank You page.  Additionally, I am hosting this site in a shared hosting environment, and personally administering all data management.  Of note on the site, javascript is being used to display the Date and Time (continually updating) in the top nav portion of this page.  Also, the 'Radio' menu item opens a custom internet radio player.  
                This is still a work in progress, with additional features to include: Live display of artist/song info and the ability to directly enter a station url.</Typography>
                
                
                    <Typography>
                        Professionally, I have worked in the digital a/v industry since 1998, with near-constant interaction with and development of web-based projects such as live stream events and digital film delivery.  When the global COVID-19 pandemic forced shutdowns and furloughs, I decided to use the time to enhance my skill set.  This included taking a Web Development certificate program at Howard Community College in Maryland, as well as completion of a 6-month Full Stack Web Development Bootcamp through Nucamp.
                    </Typography>

                    <Typography>
                        These programs provided the right impetus to continue learning and growing my web and software development skills.  I am currently seeking an junior or entry-level position with web applications development, so that I may grow and learn further as a software developer.
                    </Typography>
                </Card>
            </div>
            </Grid>
        </Grid>
    )
}

export default About;