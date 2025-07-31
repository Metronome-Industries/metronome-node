// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource alerts', () => {
  test('create: only required params', async () => {
    const responsePromise = client.v1.alerts.create({
      alert_type: 'spend_threshold_reached',
      name: '$100 spend threshold reached',
      threshold: 10000,
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
    const response = await client.v1.alerts.create({
      alert_type: 'spend_threshold_reached',
      name: '$100 spend threshold reached',
      threshold: 10000,
      billable_metric_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      credit_grant_type_filters: ['enterprise'],
      credit_type_id: '2714e483-4ff1-48e4-9e25-ac732e8f24f2',
      custom_field_filters: [{ entity: 'Contract', key: 'key', value: 'value' }],
      customer_id: '4db51251-61de-4bfe-b9ce-495e244f3491',
      evaluate_on_create: true,
      group_values: [{ key: 'key', value: 'value' }],
      invoice_types_filter: ['PLAN_ARREARS, SCHEDULED, USAGE, CORRECTION, CREDIT_PURCHASE, or SEAT_PURCHASE'],
      plan_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      uniqueness_key: 'x',
    });
  });

  test('archive: only required params', async () => {
    const responsePromise = client.v1.alerts.archive({ id: '8deed800-1b7a-495d-a207-6c52bac54dc9' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('archive: required and optional params', async () => {
    const response = await client.v1.alerts.archive({
      id: '8deed800-1b7a-495d-a207-6c52bac54dc9',
      release_uniqueness_key: true,
    });
  });
});
