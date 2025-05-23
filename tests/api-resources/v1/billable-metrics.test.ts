// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource billableMetrics', () => {
  test('create: only required params', async () => {
    const responsePromise = client.v1.billableMetrics.create({ name: 'CPU Hours' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.v1.billableMetrics.create({
      name: 'CPU Hours',
      aggregation_key: 'cpu_hours',
      aggregation_type: 'SUM',
      custom_fields: { foo: 'string' },
      event_type_filter: { in_values: ['cpu_usage'], not_in_values: ['string'] },
      group_keys: [['region'], ['machine_type']],
      property_filters: [
        { name: 'cpu_hours', exists: true, in_values: ['string'], not_in_values: ['string'] },
        { name: 'region', exists: true, in_values: ['EU', 'NA'], not_in_values: ['string'] },
        { name: 'machine_type', exists: true, in_values: ['slow', 'fast'], not_in_values: ['string'] },
      ],
      sql: 'sql',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.v1.billableMetrics.retrieve({
      billable_metric_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
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
    const response = await client.v1.billableMetrics.retrieve({
      billable_metric_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
    });
  });

  test('list', async () => {
    const responsePromise = client.v1.billableMetrics.list();
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
    await expect(client.v1.billableMetrics.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Metronome.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.billableMetrics.list(
        { include_archived: true, limit: 1, next_page: 'next_page' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('archive: only required params', async () => {
    const responsePromise = client.v1.billableMetrics.archive({ id: '8deed800-1b7a-495d-a207-6c52bac54dc9' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('archive: required and optional params', async () => {
    const response = await client.v1.billableMetrics.archive({ id: '8deed800-1b7a-495d-a207-6c52bac54dc9' });
  });
});
