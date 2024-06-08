// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const metronome = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource creditGrants', () => {
  test('create: only required params', async () => {
    const responsePromise = metronome.creditGrants.create({
      customer_id: '9b85c1c1-5238-4f2a-a409-61412905e1e1',
      expires_at: '2022-04-01T00:00:00Z',
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

  test('create: required and optional params', async () => {
    const response = await metronome.creditGrants.create({
      customer_id: '9b85c1c1-5238-4f2a-a409-61412905e1e1',
      expires_at: '2022-04-01T00:00:00Z',
      grant_amount: { amount: 1000, credit_type_id: '5ae401dc-a648-4b49-9ac3-391bb5bc4d7b' },
      name: 'Acme Corp Promotional Credit Grant',
      paid_amount: { amount: 5000, credit_type_id: '2714e483-4ff1-48e4-9e25-ac732e8f24f2' },
      priority: 0.5,
      credit_grant_type: 'trial',
      custom_fields: { foo: 'string' },
      effective_at: '2022-02-01T00:00:00Z',
      invoice_date: '2019-12-27T18:11:19.117Z',
      product_ids: [
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      ],
      reason: 'Incentivize new customer',
      rollover_settings: {
        expires_at: '2019-12-27T18:11:19.117Z',
        priority: 0,
        rollover_amount: { type: 'MAX_PERCENTAGE', value: 0 },
      },
      uniqueness_key: 'x',
    });
  });

  test('list', async () => {
    const responsePromise = metronome.creditGrants.list();
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
    await expect(metronome.creditGrants.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Metronome.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      metronome.creditGrants.list(
        {
          limit: 1,
          next_page: 'string',
          credit_grant_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          credit_type_ids: ['2714e483-4ff1-48e4-9e25-ac732e8f24f2'],
          customer_ids: ['d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc', '0e5b8609-d901-4992-b394-c3c2e3f37b1c'],
          effective_before: '2022-02-01T00:00:00Z',
          not_expiring_before: '2022-02-01T00:00:00Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('edit: only required params', async () => {
    const responsePromise = metronome.creditGrants.edit({ id: '9b85c1c1-5238-4f2a-a409-61412905e1e1' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await metronome.creditGrants.edit({
      id: '9b85c1c1-5238-4f2a-a409-61412905e1e1',
      expires_at: '2022-04-01T00:00:00Z',
      name: 'Acme Corp Promotional Credit Grant',
    });
  });

  test('listCreditTypes', async () => {
    const responsePromise = metronome.creditGrants.listCreditTypes();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listCreditTypes: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      metronome.creditGrants.listCreditTypes({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('listCreditTypes: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      metronome.creditGrants.listCreditTypes(
        { limit: 1, next_page: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('listEntries', async () => {
    const responsePromise = metronome.creditGrants.listEntries();
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
    await expect(metronome.creditGrants.listEntries({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Metronome.NotFoundError,
    );
  });

  test('listEntries: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      metronome.creditGrants.listEntries(
        {
          next_page: 'string',
          credit_type_ids: ['2714e483-4ff1-48e4-9e25-ac732e8f24f2'],
          customer_ids: ['6a37bb88-8538-48c5-b37b-a41c836328bd'],
          ending_before: '2021-02-01T00:00:00Z',
          starting_on: '2021-01-01T00:00:00Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('void: only required params', async () => {
    const responsePromise = metronome.creditGrants.void({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('void: required and optional params', async () => {
    const response = await metronome.creditGrants.void({
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      void_credit_purchase_invoice: true,
    });
  });
});
