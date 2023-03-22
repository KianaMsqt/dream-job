import React from 'react';
import { Button, Box, FormControlLabel, Checkbox } from '@mui/material';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>Contact Us</h1>
        <div style={{ width: '600px' }}>
          <p style={{ fontSize: '16px', lineHeight: '26px', marginBottom: '20px' }}>
            If you have any questions, concerns or comments, please feel free to contact us using the form below. We will be happy to hear from you.
          </p>
          <form>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '10px', fontSize: '16px' }}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              style={{ width: '100%', padding: '10px', fontSize: '16px', marginBottom: '20px' }}
            />

            <label htmlFor="email" style={{ display: 'block', marginBottom: '10px', fontSize: '16px' }}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              style={{ width: '100%', padding: '10px', fontSize: '16px', marginBottom: '20px' }}
            />

            <label htmlFor="message" style={{ display: 'block', marginBottom: '10px', fontSize: '16px' }}>
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              style={{ width: '100%', padding: '10px', fontSize: '16px', marginBottom: '20px', height: '150px' }}
            ></textarea>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
            >
              Submit
            </Button>
            <Box mt={1}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Sign up for our newsletter"
                sx={{ ml: 0, flexGrow: 1 }}
              />
            </Box>
          </form>
        </div>
      </div>
     
    </div>
  );
}

export default Contact;