// File generated from our OpenAPI spec by Stainless.

import Metronome from '@metronome-industries/metronome';
import { Response } from 'node-fetch';

const metronome = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invoices', () => {
  test('retrieve', async () => {
    const responsePromise = metronome.customers.invoices.retrieve(
      'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      '6a37bb88-8538-48c5-b37b-a41c836328bd',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      metronome.customers.invoices.retrieve(
        'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
        '6a37bb88-8538-48c5-b37b-a41c836328bd',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = metronome.customers.invoices.list('d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      metronome.customers.invoices.list('d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      metronome.customers.invoices.list(
        'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
        {
          credit_type_id: 'string',
          ending_before: '2019-12-27T18:11:19.117Z',
          limit: 1,
          next_page: 'string',
          sort: 'date_asc',
          starting_on: '2019-12-27T18:11:19.117Z',
          status: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });
});
