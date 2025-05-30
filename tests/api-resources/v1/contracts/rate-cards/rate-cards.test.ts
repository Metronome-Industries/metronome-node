// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rateCards', () => {
  test('create: only required params', async () => {
    const responsePromise = client.v1.contracts.rateCards.create({ name: 'My Rate Card' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.v1.contracts.rateCards.create({
      name: 'My Rate Card',
      aliases: [
        {
          name: 'my-rate-card',
          ending_before: '2019-12-27T18:11:19.117Z',
          starting_at: '2019-12-27T18:11:19.117Z',
        },
      ],
      credit_type_conversions: [
        { custom_credit_type_id: '2714e483-4ff1-48e4-9e25-ac732e8f24f2', fiat_per_custom_credit: 2 },
      ],
      custom_fields: { foo: 'string' },
      description: 'My Rate Card Description',
      fiat_credit_type_id: '2714e483-4ff1-48e4-9e25-ac732e8f24f2',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.v1.contracts.rateCards.retrieve({
      id: 'f3d51ae8-f283-44e1-9933-a3cf9ad7a6fe',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.v1.contracts.rateCards.retrieve({
      id: 'f3d51ae8-f283-44e1-9933-a3cf9ad7a6fe',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.v1.contracts.rateCards.update({
      rate_card_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.v1.contracts.rateCards.update({
      rate_card_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      aliases: [
        { name: 'name', ending_before: '2019-12-27T18:11:19.117Z', starting_at: '2019-12-27T18:11:19.117Z' },
      ],
      description: 'My Updated Rate Card Description',
      name: 'My Updated Rate Card',
    });
  });

  test('list', async () => {
    const responsePromise = client.v1.contracts.rateCards.list();
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
    await expect(client.v1.contracts.rateCards.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Metronome.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.contracts.rateCards.list(
        { limit: 1, next_page: 'next_page', body: {} },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('archive: only required params', async () => {
    const responsePromise = client.v1.contracts.rateCards.archive({
      id: '12b21470-4570-40df-8998-449d0b0bc52f',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('archive: required and optional params', async () => {
    const response = await client.v1.contracts.rateCards.archive({
      id: '12b21470-4570-40df-8998-449d0b0bc52f',
    });
  });

  test('retrieveRateSchedule: only required params', async () => {
    const responsePromise = client.v1.contracts.rateCards.retrieveRateSchedule({
      rate_card_id: 'f3d51ae8-f283-44e1-9933-a3cf9ad7a6fe',
      starting_at: '2024-01-01T00:00:00.000Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveRateSchedule: required and optional params', async () => {
    const response = await client.v1.contracts.rateCards.retrieveRateSchedule({
      rate_card_id: 'f3d51ae8-f283-44e1-9933-a3cf9ad7a6fe',
      starting_at: '2024-01-01T00:00:00.000Z',
      limit: 1,
      next_page: 'next_page',
      ending_before: '2019-12-27T18:11:19.117Z',
      selectors: [
        {
          billing_frequency: 'MONTHLY',
          partial_pricing_group_values: { region: 'us-west-2', cloud: 'aws' },
          pricing_group_values: { foo: 'string' },
          product_id: 'd6300dbb-882e-4d2d-8dec-5125d16b65d0',
        },
      ],
    });
  });
});
