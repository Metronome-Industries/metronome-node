// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource usage', () => {
  test('list: only required params', async () => {
    const responsePromise = client.v1.usage.list({
      ending_before: '2021-01-03T00:00:00Z',
      starting_on: '2021-01-01T00:00:00Z',
      window_size: 'HOUR',
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
    const response = await client.v1.usage.list({
      ending_before: '2021-01-03T00:00:00Z',
      starting_on: '2021-01-01T00:00:00Z',
      window_size: 'HOUR',
      next_page: 'next_page',
      billable_metrics: [
        { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', group_by: { key: 'key', values: ['x'] } },
      ],
      customer_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
  });

  test('ingest', async () => {
    const responsePromise = client.v1.usage.ingest();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('ingest: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.v1.usage.ingest({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Metronome.NotFoundError,
    );
  });

  test('ingest: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v1.usage.ingest(
        [
          {
            customer_id: 'team@example.com',
            event_type: 'heartbeat',
            timestamp: '2021-01-01T00:00:00Z',
            transaction_id: '2021-01-01T00:00:00Z_cluster42',
            properties: { cluster_id: 'bar', cpu_seconds: 'bar', region: 'bar' },
          },
        ],
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('listWithGroups: only required params', async () => {
    const responsePromise = client.v1.usage.listWithGroups({
      billable_metric_id: '222796fd-d29c-429e-89b2-549fabda4ed6',
      customer_id: '04ca7e72-4229-4a6e-ab11-9f7376fccbcb',
      window_size: 'HOUR',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listWithGroups: required and optional params', async () => {
    const response = await client.v1.usage.listWithGroups({
      billable_metric_id: '222796fd-d29c-429e-89b2-549fabda4ed6',
      customer_id: '04ca7e72-4229-4a6e-ab11-9f7376fccbcb',
      window_size: 'HOUR',
      limit: 1,
      next_page: 'next_page',
      current_period: true,
      ending_before: '2021-01-03T00:00:00Z',
      group_by: { key: 'region', values: ['US-East', 'US-West', 'EU-Central'] },
      starting_on: '2021-01-01T00:00:00Z',
    });
  });
});
