// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const metronome = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dashboards', () => {
  test('getEmbeddableURL: only required params', async () => {
    const responsePromise = metronome.dashboards.getEmbeddableURL({
      customer_id: '4db51251-61de-4bfe-b9ce-495e244f3491',
      dashboard: 'invoices',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getEmbeddableURL: required and optional params', async () => {
    const response = await metronome.dashboards.getEmbeddableURL({
      customer_id: '4db51251-61de-4bfe-b9ce-495e244f3491',
      dashboard: 'invoices',
      color_overrides: [{ name: 'Gray_dark', value: '#ff0000' }],
      dashboard_options: [
        { key: 'key', value: 'value' },
        { key: 'key', value: 'value' },
        { key: 'key', value: 'value' },
      ],
    });
  });
});
