// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payments', () => {
  test('list: only required params', async () => {
    const responsePromise = client.payments.list({
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      invoice_id: '6162d87b-e5db-4a33-b7f2-76ce6ead4e85',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.payments.list({
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      invoice_id: '6162d87b-e5db-4a33-b7f2-76ce6ead4e85',
      limit: 1,
      next_page: 'next_page',
      statuses: ['pending', 'requires_intervention'],
    });
  });
});
