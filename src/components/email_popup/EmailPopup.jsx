import React from 'react';
import { MailchimpMarketing } from '@mailchimp/mailchimp_marketing';

// Set up Mailchimp API configuration
MailchimpMarketing.setConfig({
  apiKey: process.env.REACT_APP_MAILCHIMP_API,
  server: process.env.REACT_APP_MAILCHIMP_SERVER,
});

const EmailPopup = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create an object that contains the new subscriber's data
    const newSubscriber = {
      email_address: email,
      status: 'subscribed',
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

    // Create an object that contains the autoresponder email's data
    const autoresponder = {
      type: 'regular',
      recipients: { list_id: '9b311e41a1' },
      settings: {
        subject_line: 'Sign up to our newsletter for the latest job posting!',
        from_name: 'Your Name',
        reply_to: 'youremail@example.com',
      },
      content: {
        template_id: '10028673',
      },
    };

    // Define a function that creates an autoresponder email using the API
    const createAutoresponder = async () => {
      try {
        const response = await MailchimpMarketing.campaigns.create(autoresponder);
        console.log('Autoresponder email created:', response);
      } catch (error) {
        console.error('Failed to create autoresponder email:', error.message);
        alert('Error creating autoresponder email');
        throw error;
      }
    };

    // Call both functions asynchronously and wait for them to finish
    try {
      await addSubscriber();
      await createAutoresponder();
      alert('Successfully subscribed!');
    } catch (error) {
      alert('Error subscribing');
      console.error(error);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={handleEmailChange} required />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default EmailPopup;
