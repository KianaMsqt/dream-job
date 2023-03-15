import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import EmailPopup from './EmailPopup';

describe('EmailPopup', () => {
  test('submits email and renders success message', async () => {
    const addListMemberMock = jest.fn(() => Promise.resolve({ id: '12345' }));
    const createCampaignMock = jest.fn(() => Promise.resolve({ id: '67890' }));
    jest.mock('@mailchimp/mailchimp_marketing', () => ({
      ...jest.requireActual('@mailchimp/mailchimp_marketing'),
      lists: {
        addListMember: addListMemberMock,
      },
      campaigns: {
        create: createCampaignMock,
      },
    }));

    const { getByLabelText, getByText } = render(<EmailPopup />);
    const emailInput = getByLabelText('Email:');
    const submitButton = getByText('Subscribe');

    // Fill in form and submit
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    // Wait for the async functions to resolve
    await waitFor(() => expect(addListMemberMock).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(createCampaignMock).toHaveBeenCalledTimes(1));

    // Check that success message is rendered
    const successMessage = getByText('Thanks for subscribing!');
    expect(successMessage).toBeInTheDocument();
  });
});
