// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource credits', () => {
  test('create: only required params', async () => {
    const responsePromise = client.customers.credits.create({
      access_schedule: {
        schedule_items: [
          {
            amount: 1000,
            ending_before: '2020-02-01T00:00:00.000Z',
            starting_at: '2020-01-01T00:00:00.000Z',
          },
        ],
      },
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      priority: 100,
      product_id: 'f14d6729-6a44-4b13-9908-9387f1918790',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.customers.credits.create({
      access_schedule: {
        schedule_items: [
          {
            amount: 1000,
            ending_before: '2020-02-01T00:00:00.000Z',
            starting_at: '2020-01-01T00:00:00.000Z',
          },
        ],
        credit_type_id: '2714e483-4ff1-48e4-9e25-ac732e8f24f2',
      },
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      priority: 100,
      product_id: 'f14d6729-6a44-4b13-9908-9387f1918790',
      applicable_contract_ids: ['string'],
      applicable_product_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      applicable_product_tags: ['string'],
      custom_fields: { foo: 'string' },
      description: 'description',
      name: 'My Credit',
      netsuite_sales_order_id: 'netsuite_sales_order_id',
      rate_type: 'COMMIT_RATE',
      salesforce_opportunity_id: 'salesforce_opportunity_id',
      uniqueness_key: 'x',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.customers.credits.list({
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
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
    const response = await client.customers.credits.list({
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      covering_date: '2019-12-27T18:11:19.117Z',
      credit_id: '6162d87b-e5db-4a33-b7f2-76ce6ead4e85',
      effective_before: '2019-12-27T18:11:19.117Z',
      include_archived: true,
      include_contract_credits: true,
      include_ledgers: true,
      next_page: 'next_page',
      starting_at: '2019-12-27T18:11:19.117Z',
    });
  });

  test('updateEndDate: only required params', async () => {
    const responsePromise = client.customers.credits.updateEndDate({
      access_ending_before: '2020-01-01T00:00:00.000Z',
      credit_id: '6162d87b-e5db-4a33-b7f2-76ce6ead4e85',
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateEndDate: required and optional params', async () => {
    const response = await client.customers.credits.updateEndDate({
      access_ending_before: '2020-01-01T00:00:00.000Z',
      credit_id: '6162d87b-e5db-4a33-b7f2-76ce6ead4e85',
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
    });
  });
});
