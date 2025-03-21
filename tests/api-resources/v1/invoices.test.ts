// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invoices', () => {
  test('regenerate: only required params', async () => {
    const responsePromise = client.v1.invoices.regenerate({ id: '6a37bb88-8538-48c5-b37b-a41c836328bd' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('regenerate: required and optional params', async () => {
    const response = await client.v1.invoices.regenerate({ id: '6a37bb88-8538-48c5-b37b-a41c836328bd' });
  });

  test('void: only required params', async () => {
    const responsePromise = client.v1.invoices.void({ id: '6a37bb88-8538-48c5-b37b-a41c836328bd' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('void: required and optional params', async () => {
    const response = await client.v1.invoices.void({ id: '6a37bb88-8538-48c5-b37b-a41c836328bd' });
  });
});
