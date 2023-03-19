
import { useState } from 'react';
import { MailchimpMarketing } from '@mailchimp/mailchimp_marketing';
import './Subscribe.css';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');

  // Set up Mailchimp API configuration
  MailchimpMarketing.setConfig({
    apiKey: process.env.REACT_APP_MAILCHIMP_API,
    server: process.env.REACT_APP_MAILCHIMP_SERVER,
  });

  // Handle form submission on submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Create an object that contains the new subscriber's data
    const newSubscriber = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
      },
    };

    // Define a function that adds the new subscriber to a Mailchimp list using the API
    const addSubscriber = async () => {
      try {
        const response = await MailchimpMarketing.lists.addListMember(
          '9b311e41a1',
          newSubscriber
        );
        console.log('New subscriber added:', response);
      } catch (error) {
        console.error('Failed to add new subscriber:', error.message);
        alert('Error adding subscriber');
        throw error;
      }
    };
    // Call the function that adds the new subscriber and asynchronously wait for it to finish
    try {
      await addSubscriber();
      alert('Successfully subscribed!');
    } catch (error) {
      alert('Error subscribing');
      console.error(error);
    }
  };
  
  return (
    <div className="subscribe-container">
      <form onSubmit={handleFormSubmit} className="subscribe-form">
        <h3>Stay Informed</h3>
        <p>Sign up for our newsletter to get news and updates about job openings</p>
        <div className="input-wrapper">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <button type="submit" className="subscribe-button">Subscribe</button>
      </form>
    </div>
  );
};

export default Subscribe;

