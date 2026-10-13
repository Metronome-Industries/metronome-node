// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pricingUnits', () => {
  test('create: only required params', async () => {
    const responsePromise = client.v1.pricingUnits.create({ name: 'AI Credits' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.v1.pricingUnits.create({ name: 'AI Credits' });
  });

  test('list', async () => {
    const responsePromise = client.v1.pricingUnits.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.pricingUnits.list({ limit: 1, next_page: 'next_page' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('archive: only required params', async () => {
    const responsePromise = client.v1.pricingUnits.archive({ id: 'fa2f1b3d-9d52-4951-a099-25991fd394d6' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('archive: required and optional params', async () => {
    const response = await client.v1.pricingUnits.archive({ id: 'fa2f1b3d-9d52-4951-a099-25991fd394d6' });
  });
});
