// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from 'metronome';
import { Response } from 'node-fetch';

const metronome = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource billingConfig', () => {
  test('create: only required params', async () => {
    const responsePromise = metronome.customers.billingConfig.create(
      'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      'stripe',
      { billing_provider_customer_id: 'cus_AJ6y20bjkOOayM' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await metronome.customers.billingConfig.create(
      'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      'stripe',
      {
        billing_provider_customer_id: 'cus_AJ6y20bjkOOayM',
        aws_product_code: 'string',
        aws_region: 'af-south-1',
        stripe_collection_method: 'charge_automatically',
      },
    );
  });

  test('retrieve', async () => {
    const responsePromise = metronome.customers.billingConfig.retrieve(
      'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      'stripe',
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
      metronome.customers.billingConfig.retrieve('d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc', 'stripe', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = metronome.customers.billingConfig.delete(
      'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      'stripe',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      metronome.customers.billingConfig.delete('d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc', 'stripe', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Metronome.NotFoundError);
  });
});
