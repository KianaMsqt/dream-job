import React from 'react';
import { CardMedia } from '@mui/material';

export default function ThankYou(){
    return (
    <div className="contact-container">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>Thank You</h1>
        <div style={{ width: '600px' }}>
          <p style={{ fontSize: '16px', lineHeight: '26px', marginBottom: '20px', textAlign: 'center' }}>
            We will endeavour to reply to your query as soon as possible.
          </p>
          
        </div>
      </div>
      <CardMedia
          component="img"
          height="600"
          image={require("./blueMountain.jpg")}
        />
    </div>
    )
}