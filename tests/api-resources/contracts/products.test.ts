// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource products', () => {
  test('create: only required params', async () => {
    const responsePromise = client.contracts.products.create({ name: 'My Product', type: 'FIXED' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.contracts.products.create({
      name: 'My Product',
      type: 'FIXED',
      billable_metric_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      composite_product_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      composite_tags: ['string'],
      exclude_free_usage: true,
      is_refundable: true,
      netsuite_internal_item_id: 'netsuite_internal_item_id',
      netsuite_overage_item_id: 'netsuite_overage_item_id',
      presentation_group_key: ['string'],
      pricing_group_key: ['string'],
      quantity_conversion: { conversion_factor: 0, operation: 'MULTIPLY', name: 'name' },
      quantity_rounding: { decimal_places: 0, rounding_method: 'ROUND_UP' },
      tags: ['string'],
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.contracts.products.retrieve({
      id: 'd84e7f4e-7a70-4fe4-be02-7a5027beffcc',
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
    const response = await client.contracts.products.retrieve({ id: 'd84e7f4e-7a70-4fe4-be02-7a5027beffcc' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.contracts.products.update({
      product_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
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

  test('update: required and optional params', async () => {
    const response = await client.contracts.products.update({
      product_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      starting_at: '2020-01-01T00:00:00.000Z',
      billable_metric_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      composite_product_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      composite_tags: ['string'],
      exclude_free_usage: true,
      is_refundable: true,
      name: 'My Updated Product',
      netsuite_internal_item_id: 'netsuite_internal_item_id',
      netsuite_overage_item_id: 'netsuite_overage_item_id',
      presentation_group_key: ['string'],
      pricing_group_key: ['string'],
      quantity_conversion: { conversion_factor: 0, operation: 'MULTIPLY', name: 'name' },
      quantity_rounding: { decimal_places: 0, rounding_method: 'ROUND_UP' },
      tags: ['string'],
    });
  });

  test('list', async () => {
    const responsePromise = client.contracts.products.list();
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
    await expect(client.contracts.products.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Metronome.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.contracts.products.list(
        { limit: 1, next_page: 'next_page', archive_filter: 'ARCHIVED' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('archive: only required params', async () => {
    const responsePromise = client.contracts.products.archive({
      product_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
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
    const response = await client.contracts.products.archive({
      product_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
    });
  });
});
