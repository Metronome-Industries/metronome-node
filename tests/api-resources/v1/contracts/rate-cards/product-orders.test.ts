// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource productOrders', () => {
  test('update: only required params', async () => {
    const responsePromise = client.v1.contracts.rateCards.productOrders.update({
      product_moves: [
        { position: 0, product_id: '13117714-3f05-48e5-a6e9-a66093f13b4d' },
        { position: 1, product_id: 'b086f2f4-9851-4466-9ca0-30d53e6a42ac' },
      ],
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
    const response = await client.v1.contracts.rateCards.productOrders.update({
      product_moves: [
        { position: 0, product_id: '13117714-3f05-48e5-a6e9-a66093f13b4d' },
        { position: 1, product_id: 'b086f2f4-9851-4466-9ca0-30d53e6a42ac' },
      ],
      rate_card_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
    });
  });

  test('set: only required params', async () => {
    const responsePromise = client.v1.contracts.rateCards.productOrders.set({
      product_order: ['13117714-3f05-48e5-a6e9-a66093f13b4d', 'b086f2f4-9851-4466-9ca0-30d53e6a42ac'],
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

  test('set: required and optional params', async () => {
    const response = await client.v1.contracts.rateCards.productOrders.set({
      product_order: ['13117714-3f05-48e5-a6e9-a66093f13b4d', 'b086f2f4-9851-4466-9ca0-30d53e6a42ac'],
      rate_card_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
    });
  });
});
