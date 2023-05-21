import React from 'react';
import { LinkedIn } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Twitter } from '@material-ui/icons';
import { Email } from '@material-ui/icons';
import "../components/styles/Footer.css";


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
            <LinkedIn />
            <GitHub />
            <InstagramIcon />
            <Twitter />
            <Email />
        </div>
        <p> &copy; 2023 Owned by Macha Nikhitha </p>
    </div>
  )
}

export default Footer