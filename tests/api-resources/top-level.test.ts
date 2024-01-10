// File generated from our OpenAPI spec by Stainless.

import Metronome from '@metronome-industries/metronome';
import { Response } from 'node-fetch';

const metronome = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('top level methods', () => {
  test('ingest: only required params', async () => {
    const responsePromise = metronome.ingest([
      {
        transaction_id: '2021-01-01T00:00:00+00:00_cluster42',
        customer_id: 'team@example.com',
        event_type: 'heartbeat',
        timestamp: '2021-01-01T00:00:00+00:00',
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
    const response = await metronome.ingest([
      {
        transaction_id: '2021-01-01T00:00:00+00:00_cluster42',
        customer_id: 'team@example.com',
        event_type: 'heartbeat',
        timestamp: '2021-01-01T00:00:00+00:00',
        properties: { cluster_id: 'bar', cpu_seconds: 'bar', region: 'bar' },
      },
    ]);
  });
});
