// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rates', () => {
  test('list: only required params', async () => {
    const responsePromise = client.contracts.rateCards.rates.list({
      at: '2024-01-01T00:00:00.000Z',
      rate_card_id: 'f3d51ae8-f283-44e1-9933-a3cf9ad7a6fe',
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
    const response = await client.contracts.rateCards.rates.list({
      at: '2024-01-01T00:00:00.000Z',
      rate_card_id: 'f3d51ae8-f283-44e1-9933-a3cf9ad7a6fe',
      limit: 1,
      next_page: 'next_page',
      selectors: [
        {
          partial_pricing_group_values: { region: 'us-west-2', cloud: 'aws' },
          pricing_group_values: { foo: 'string' },
          product_id: 'd6300dbb-882e-4d2d-8dec-5125d16b65d0',
          product_tags: ['string', 'string', 'string'],
        },
      ],
    });
  });

  test('add: only required params', async () => {
    const responsePromise = client.contracts.rateCards.rates.add({
      entitled: true,
      product_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      rate_card_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      rate_type: 'FLAT',
      starting_at: '2020-01-01T00:00:00.000Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('add: required and optional params', async () => {
    const response = await client.contracts.rateCards.rates.add({
      entitled: true,
      product_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      rate_card_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      rate_type: 'FLAT',
      starting_at: '2020-01-01T00:00:00.000Z',
      credit_type_id: '2714e483-4ff1-48e4-9e25-ac732e8f24f2',
      custom_rate: { foo: 'bar' },
      ending_before: '2019-12-27T18:11:19.117Z',
      is_prorated: true,
      price: 100,
      pricing_group_values: { foo: 'string' },
      quantity: 0,
      tiers: [
        { price: 0, size: 0 },
        { price: 0, size: 0 },
        { price: 0, size: 0 },
      ],
      use_list_prices: true,
    });
  });

  test('addMany: only required params', async () => {
    const responsePromise = client.contracts.rateCards.rates.addMany({
      rate_card_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      rates: [
        {
          entitled: true,
          product_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
          rate_type: 'FLAT',
          starting_at: '2020-01-01T00:00:00.000Z',
        },
        {
          entitled: true,
          product_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
          rate_type: 'FLAT',
          starting_at: '2020-01-01T00:00:00.000Z',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addMany: required and optional params', async () => {
    const response = await client.contracts.rateCards.rates.addMany({
      rate_card_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      rates: [
        {
          entitled: true,
          product_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
          rate_type: 'FLAT',
          starting_at: '2020-01-01T00:00:00.000Z',
          credit_type_id: '2714e483-4ff1-48e4-9e25-ac732e8f24f2',
          custom_rate: { foo: 'bar' },
          ending_before: '2019-12-27T18:11:19.117Z',
          is_prorated: true,
          price: 100,
          pricing_group_values: { region: 'us-west-2', cloud: 'aws' },
          quantity: 0,
          tiers: [
            { price: 0, size: 0 },
            { price: 0, size: 0 },
            { price: 0, size: 0 },
          ],
          use_list_prices: true,
        },
        {
          entitled: true,
          product_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
          rate_type: 'FLAT',
          starting_at: '2020-01-01T00:00:00.000Z',
          credit_type_id: '2714e483-4ff1-48e4-9e25-ac732e8f24f2',
          custom_rate: { foo: 'bar' },
          ending_before: '2019-12-27T18:11:19.117Z',
          is_prorated: true,
          price: 120,
          pricing_group_values: { region: 'us-east-2', cloud: 'aws' },
          quantity: 0,
          tiers: [
            { price: 0, size: 0 },
            { price: 0, size: 0 },
            { price: 0, size: 0 },
          ],
          use_list_prices: true,
        },
      ],
    });
  });
});
