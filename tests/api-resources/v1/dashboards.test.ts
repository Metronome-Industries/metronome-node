// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dashboards', () => {
  test('getEmbeddableURL: only required params', async () => {
    const responsePromise = client.v1.dashboards.getEmbeddableURL({
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
    const response = await client.v1.dashboards.getEmbeddableURL({
      customer_id: '4db51251-61de-4bfe-b9ce-495e244f3491',
      dashboard: 'invoices',
      bm_group_key_overrides: [
        {
          group_key_name: 'tenant_id',
          display_name: 'Org ID',
          value_display_names: { '48ecb18f358f': 'bar', e358f3ce242d: 'bar' },
        },
      ],
      color_overrides: [{ name: 'Gray_dark', value: '#ff0000' }],
      dashboard_options: [
        { key: 'show_zero_usage_line_items', value: 'false' },
        { key: 'hide_voided_invoices', value: 'true' },
      ],
    });
  });
});
