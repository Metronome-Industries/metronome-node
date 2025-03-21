// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource billingConfig', () => {
  test('create: only required params', async () => {
    const responsePromise = client.v1.customers.billingConfig.create({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      billing_provider_type: 'aws_marketplace',
      billing_provider_customer_id: 'cus_AJ6y20bjkOOayM',
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
    const response = await client.v1.customers.billingConfig.create({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      billing_provider_type: 'aws_marketplace',
      billing_provider_customer_id: 'cus_AJ6y20bjkOOayM',
      aws_product_code: 'aws_product_code',
      aws_region: 'af-south-1',
      stripe_collection_method: 'charge_automatically',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.v1.customers.billingConfig.retrieve({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      billing_provider_type: 'aws_marketplace',
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
    const response = await client.v1.customers.billingConfig.retrieve({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      billing_provider_type: 'aws_marketplace',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.v1.customers.billingConfig.delete({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      billing_provider_type: 'aws_marketplace',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.v1.customers.billingConfig.delete({
      customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      billing_provider_type: 'aws_marketplace',
    });
  });
});
