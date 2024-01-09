// File generated from our OpenAPI spec by Stainless.

import Metronome from 'metronome';
import { Response } from 'node-fetch';

const metronome = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource credits', () => {
  test('createGrant: only required params', async () => {
    const responsePromise = metronome.credits.createGrant({
      customer_id: '9b85c1c1-5238-4f2a-a409-61412905e1e1',
      expires_at: '2022-04-01T00:00:00+00:00',
      grant_amount: { amount: 1000, credit_type_id: '5ae401dc-a648-4b49-9ac3-391bb5bc4d7b' },
      name: 'Acme Corp Promotional Credit Grant',
      paid_amount: { amount: 5000, credit_type_id: '2714e483-4ff1-48e4-9e25-ac732e8f24f2' },
      priority: 0.5,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createGrant: required and optional params', async () => {
    const response = await metronome.credits.createGrant({
      customer_id: '9b85c1c1-5238-4f2a-a409-61412905e1e1',
      expires_at: '2022-04-01T00:00:00+00:00',
      grant_amount: { amount: 1000, credit_type_id: '5ae401dc-a648-4b49-9ac3-391bb5bc4d7b' },
      name: 'Acme Corp Promotional Credit Grant',
      paid_amount: { amount: 5000, credit_type_id: '2714e483-4ff1-48e4-9e25-ac732e8f24f2' },
      priority: 0.5,
      credit_grant_type: 'trial',
      effective_at: '2022-02-01T00:00:00+00:00',
      invoice_date: '2019-12-27T18:11:19.117Z',
      product_ids: [
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      ],
      reason: 'Incentivize new customer',
    });
  });

  test('editGrant: only required params', async () => {
    const responsePromise = metronome.credits.editGrant({ id: '9b85c1c1-5238-4f2a-a409-61412905e1e1' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('editGrant: required and optional params', async () => {
    const response = await metronome.credits.editGrant({
      id: '9b85c1c1-5238-4f2a-a409-61412905e1e1',
      expires_at: '2022-04-01T00:00:00+00:00',
      name: 'Acme Corp Promotional Credit Grant',
    });
  });

  test('listEntries', async () => {
    const responsePromise = metronome.credits.listEntries();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listEntries: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(metronome.credits.listEntries({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Metronome.NotFoundError,
    );
  });

  test('listEntries: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      metronome.credits.listEntries(
        {
          next_page: 'string',
          credit_type_ids: ['2714e483-4ff1-48e4-9e25-ac732e8f24f2'],
          customer_ids: ['6a37bb88-8538-48c5-b37b-a41c836328bd'],
          ending_before: '2021-02-01T00:00:00+00:00',
          starting_on: '2021-01-01T00:00:00+00:00',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('listGrants', async () => {
    const responsePromise = metronome.credits.listGrants();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listGrants: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(metronome.credits.listGrants({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Metronome.NotFoundError,
    );
  });

  test('listGrants: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      metronome.credits.listGrants(
        {
          next_page: 'string',
          credit_grant_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          credit_type_ids: ['2714e483-4ff1-48e4-9e25-ac732e8f24f2'],
          customer_ids: ['d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc', '0e5b8609-d901-4992-b394-c3c2e3f37b1c'],
          effective_before: '2022-02-01T00:00:00+00:00',
          not_expiring_before: '2022-02-01T00:00:00+00:00',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('voidGrant: only required params', async () => {
    const responsePromise = metronome.credits.voidGrant({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('voidGrant: required and optional params', async () => {
    const response = await metronome.credits.voidGrant({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
  });
});
