// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invoices', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.v1.customers.invoices.retrieve({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      invoice_id: '6a37bb88-8538-48c5-b37b-a41c836328bd',
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
    const response = await client.v1.customers.invoices.retrieve({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      invoice_id: '6a37bb88-8538-48c5-b37b-a41c836328bd',
      skip_zero_qty_line_items: true,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.v1.customers.invoices.list({
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

  test('list: required and optional params', async () => {
    const response = await client.v1.customers.invoices.list({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      credit_type_id: 'credit_type_id',
      ending_before: '2019-12-27T18:11:19.117Z',
      limit: 1,
      next_page: 'next_page',
      skip_zero_qty_line_items: true,
      sort: 'date_asc',
      starting_on: '2019-12-27T18:11:19.117Z',
      status: 'status',
    });
  });

  test('addCharge: only required params', async () => {
    const responsePromise = client.v1.customers.invoices.addCharge({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      charge_id: '5ae4b726-1ebe-439c-9190-9831760ba195',
      customer_plan_id: 'a23b3cf4-47fb-4c3f-bb3d-9e64f7704015',
      description: 'One time charge',
      invoice_start_timestamp: '2024-01-01T00:00:00Z',
      price: 250,
      quantity: 1,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addCharge: required and optional params', async () => {
    const response = await client.v1.customers.invoices.addCharge({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      charge_id: '5ae4b726-1ebe-439c-9190-9831760ba195',
      customer_plan_id: 'a23b3cf4-47fb-4c3f-bb3d-9e64f7704015',
      description: 'One time charge',
      invoice_start_timestamp: '2024-01-01T00:00:00Z',
      price: 250,
      quantity: 1,
    });
  });

  test('listBreakdowns: only required params', async () => {
    const responsePromise = client.v1.customers.invoices.listBreakdowns({
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

  test('listBreakdowns: required and optional params', async () => {
    const response = await client.v1.customers.invoices.listBreakdowns({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      ending_before: '2019-12-27T18:11:19.117Z',
      starting_on: '2019-12-27T18:11:19.117Z',
      credit_type_id: 'credit_type_id',
      limit: 1,
      next_page: 'next_page',
      skip_zero_qty_line_items: true,
      sort: 'date_asc',
      status: 'status',
      window_size: 'HOUR',
    });
  });
});
