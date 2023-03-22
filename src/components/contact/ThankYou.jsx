import React from 'react';
import { CardMedia } from '@mui/material';
import Card from "@mui/material/Card";
import { Box } from "@mui/material";


export default function ThankYou(){
    return (
    <div className="contact-container">
      <Card>
        <CardMedia
            component="img"
            height="600"
            image={require("./blueMountain.jpg")}
          />
          <Box sx={{
            position: "absolute",
            top: 200,
            height: "400",
            left: 100,
            right: 100,
            width: "80%",
            bgcolor: "rgba(0, 0, 0, 0.54)",
            color: "white",
            padding: "10px",
            margin: "20px",
            textAlign: "center",
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
              <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>Thank You</h1>
              <div style={{ width: '600px' }}>
                <p style={{ fontSize: '16px', lineHeight: '26px', marginBottom: '20px', textAlign: 'center' }}>
                  We will endeavour to reply to your query as soon as possible.
                </p>
              </div>
            </div>
          </Box>
      </Card>
    </div>
    )
}