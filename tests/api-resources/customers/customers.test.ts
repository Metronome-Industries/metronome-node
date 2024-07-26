// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.customers.create({ name: 'Example, Inc.' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.customers.create({
      name: 'Example, Inc.',
      billing_config: {
        billing_provider_type: 'aws_marketplace',
        billing_provider_customer_id: 'billing_provider_customer_id',
        stripe_collection_method: 'charge_automatically',
        aws_product_code: 'aws_product_code',
        aws_region: 'af-south-1',
      },
      custom_fields: { foo: 'string' },
      external_id: 'x',
      ingest_aliases: ['team@example.com'],
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.customers.retrieve('d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc');
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
      client.customers.retrieve('d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.customers.list();
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
    await expect(client.customers.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Metronome.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.customers.list(
        {
          customer_ids: ['string', 'string', 'string'],
          ingest_alias: 'ingest_alias',
          limit: 1,
          next_page: 'next_page',
          only_archived: true,
          salesforce_account_ids: ['string', 'string', 'string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('archive: only required params', async () => {
    const responsePromise = client.customers.archive({ id: '8deed800-1b7a-495d-a207-6c52bac54dc9' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('archive: required and optional params', async () => {
    const response = await client.customers.archive({ id: '8deed800-1b7a-495d-a207-6c52bac54dc9' });
  });

  test('listBillableMetrics', async () => {
    const responsePromise = client.customers.listBillableMetrics('d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listBillableMetrics: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.customers.listBillableMetrics('d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('listBillableMetrics: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.customers.listBillableMetrics(
        'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
        { limit: 1, next_page: 'next_page', on_current_plan: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('listCosts: only required params', async () => {
    const responsePromise = client.customers.listCosts('d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc', {
      ending_before: '2019-12-27T18:11:19.117Z',
      starting_on: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listCosts: required and optional params', async () => {
    const response = await client.customers.listCosts('d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc', {
      ending_before: '2019-12-27T18:11:19.117Z',
      starting_on: '2019-12-27T18:11:19.117Z',
      limit: 1,
      next_page: 'next_page',
    });
  });

  test('setIngestAliases: only required params', async () => {
    const responsePromise = client.customers.setIngestAliases('d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc', {
      ingest_aliases: ['team@example.com'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setIngestAliases: required and optional params', async () => {
    const response = await client.customers.setIngestAliases('d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc', {
      ingest_aliases: ['team@example.com'],
    });
  });

  test('setName: only required params', async () => {
    const responsePromise = client.customers.setName('d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc', {
      name: 'Example, Inc.',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setName: required and optional params', async () => {
    const response = await client.customers.setName('d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc', {
      name: 'Example, Inc.',
    });
  });

  test('updateConfig', async () => {
    const responsePromise = client.customers.updateConfig('d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateConfig: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.customers.updateConfig('d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('updateConfig: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.customers.updateConfig(
        'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
        { leave_stripe_invoices_in_draft: true, salesforce_account_id: '0015500001WO1ZiABL' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });
});
