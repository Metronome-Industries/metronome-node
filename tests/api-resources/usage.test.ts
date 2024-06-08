// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const metronome = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource usage', () => {
  test('list: only required params', async () => {
    const responsePromise = metronome.usage.list({
      ending_before: '2021-01-03T00:00:00Z',
      starting_on: '2021-01-01T00:00:00Z',
      window_size: 'day',
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
    const response = await metronome.usage.list({
      ending_before: '2021-01-03T00:00:00Z',
      starting_on: '2021-01-01T00:00:00Z',
      window_size: 'day',
      next_page: 'string',
      billable_metrics: [
        { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', group_by: { key: 'string', values: ['x'] } },
        { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', group_by: { key: 'string', values: ['x'] } },
        { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', group_by: { key: 'string', values: ['x'] } },
      ],
      customer_ids: [
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      ],
    });
  });

  test('ingest: only required params', async () => {
    const responsePromise = metronome.usage.ingest([
      {
        transaction_id: '2021-01-01T00:00:00Z_cluster42',
        customer_id: 'team@example.com',
        event_type: 'heartbeat',
        timestamp: '2021-01-01T00:00:00Z',
      },
    ]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('ingest: required and optional params', async () => {
    const response = await metronome.usage.ingest([
      {
        transaction_id: '2021-01-01T00:00:00Z_cluster42',
        customer_id: 'team@example.com',
        event_type: 'heartbeat',
        timestamp: '2021-01-01T00:00:00Z',
        properties: { cluster_id: 'bar', cpu_seconds: 'bar', region: 'bar' },
      },
    ]);
  });

  test('listWithGroups: only required params', async () => {
    const responsePromise = metronome.usage.listWithGroups({
      billable_metric_id: '222796fd-d29c-429e-89b2-549fabda4ed6',
      customer_id: '04ca7e72-4229-4a6e-ab11-9f7376fccbcb',
      window_size: 'day',
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
    const response = await metronome.usage.listWithGroups({
      billable_metric_id: '222796fd-d29c-429e-89b2-549fabda4ed6',
      customer_id: '04ca7e72-4229-4a6e-ab11-9f7376fccbcb',
      window_size: 'day',
      limit: 1,
      next_page: 'string',
      current_period: true,
      ending_before: '2021-01-03T00:00:00Z',
      group_by: { key: 'region', values: ['US-East', 'US-West', 'EU-Central'] },
      starting_on: '2021-01-01T00:00:00Z',
    });
  });
});
