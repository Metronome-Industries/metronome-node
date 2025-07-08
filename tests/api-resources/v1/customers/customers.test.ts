// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.v1.customers.create({ name: 'Example, Inc.' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.v1.customers.create({
      name: 'Example, Inc.',
      billing_config: {
        billing_provider_customer_id: 'billing_provider_customer_id',
        billing_provider_type: 'aws_marketplace',
        aws_is_subscription_product: true,
        aws_product_code: 'aws_product_code',
        aws_region: 'af-south-1',
        stripe_collection_method: 'charge_automatically',
      },
      custom_fields: { foo: 'string' },
      customer_billing_provider_configurations: [
        {
          billing_provider: 'stripe',
          configuration: { stripe_customer_id: 'bar', stripe_collection_method: 'bar' },
          delivery_method: 'direct_to_billing_provider',
          delivery_method_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      external_id: 'x',
      ingest_aliases: ['team@example.com'],
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.v1.customers.retrieve({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
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
    const response = await client.v1.customers.retrieve({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
    });
  });

  test('list', async () => {
    const responsePromise = client.v1.customers.list();
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
    await expect(client.v1.customers.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Metronome.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.customers.list(
        {
          customer_ids: ['string'],
          ingest_alias: 'ingest_alias',
          limit: 1,
          next_page: 'next_page',
          only_archived: true,
          salesforce_account_ids: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('archive: only required params', async () => {
    const responsePromise = client.v1.customers.archive({ id: '8deed800-1b7a-495d-a207-6c52bac54dc9' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('archive: required and optional params', async () => {
    const response = await client.v1.customers.archive({ id: '8deed800-1b7a-495d-a207-6c52bac54dc9' });
  });

  test('listBillableMetrics: only required params', async () => {
    const responsePromise = client.v1.customers.listBillableMetrics({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listBillableMetrics: required and optional params', async () => {
    const response = await client.v1.customers.listBillableMetrics({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      include_archived: true,
      limit: 1,
      next_page: 'next_page',
      on_current_plan: true,
    });
  });

  test('listCosts: only required params', async () => {
    const responsePromise = client.v1.customers.listCosts({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
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
    const response = await client.v1.customers.listCosts({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      ending_before: '2019-12-27T18:11:19.117Z',
      starting_on: '2019-12-27T18:11:19.117Z',
      limit: 1,
      next_page: 'next_page',
    });
  });

  test('previewEvents: only required params', async () => {
    const responsePromise = client.v1.customers.previewEvents({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      events: [{ event_type: 'heartbeat' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('previewEvents: required and optional params', async () => {
    const response = await client.v1.customers.previewEvents({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      events: [
        {
          event_type: 'heartbeat',
          customer_id: 'x',
          properties: { cpu_hours: 'bar', memory_gb_hours: 'bar' },
          timestamp: '2021-01-01T00:00:00Z',
          transaction_id: 'x',
        },
      ],
      mode: 'replace',
      skip_zero_qty_line_items: true,
    });
  });

  test('setIngestAliases: only required params', async () => {
    const responsePromise = client.v1.customers.setIngestAliases({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
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
    const response = await client.v1.customers.setIngestAliases({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      ingest_aliases: ['team@example.com'],
    });
  });

  test('setName: only required params', async () => {
    const responsePromise = client.v1.customers.setName({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
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
    const response = await client.v1.customers.setName({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      name: 'Example, Inc.',
    });
  });

  test('updateConfig: only required params', async () => {
    const responsePromise = client.v1.customers.updateConfig({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateConfig: required and optional params', async () => {
    const response = await client.v1.customers.updateConfig({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      leave_stripe_invoices_in_draft: true,
      salesforce_account_id: '0015500001WO1ZiABL',
    });
  });
});
