// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource plans', () => {
  test('list', async () => {
    const responsePromise = client.v1.plans.list();
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
    await expect(client.v1.plans.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Metronome.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.plans.list({ limit: 1, next_page: 'next_page' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('getDetails: only required params', async () => {
    const responsePromise = client.v1.plans.getDetails({ plan_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getDetails: required and optional params', async () => {
    const response = await client.v1.plans.getDetails({ plan_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc' });
  });

  test('listCharges: only required params', async () => {
    const responsePromise = client.v1.plans.listCharges({ plan_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listCharges: required and optional params', async () => {
    const response = await client.v1.plans.listCharges({
      plan_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      limit: 1,
      next_page: 'next_page',
    });
  });

  test('listCustomers: only required params', async () => {
    const responsePromise = client.v1.plans.listCustomers({
      plan_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listCustomers: required and optional params', async () => {
    const response = await client.v1.plans.listCustomers({
      plan_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      limit: 1,
      next_page: 'next_page',
      status: 'all',
    });
  });
});
