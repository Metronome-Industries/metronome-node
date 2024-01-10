// File generated from our OpenAPI spec by Stainless.

import Metronome from '@metronome-industries/metronome';
import { Response } from 'node-fetch';

const metronome = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource alerts', () => {
  test('create: only required params', async () => {
    const responsePromise = metronome.alerts.create({
      alert_type: 'low_credit_balance_reached',
      name: '$100 credit balance alert for single customer',
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
    const response = await metronome.alerts.create({
      alert_type: 'low_credit_balance_reached',
      name: '$100 credit balance alert for single customer',
      threshold: 10000,
      billable_metric_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      credit_type_id: '2714e483-4ff1-48e4-9e25-ac732e8f24f2',
      customer_id: '4db51251-61de-4bfe-b9ce-495e244f3491',
      plan_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('archive: only required params', async () => {
    const responsePromise = metronome.alerts.archive({ id: '8deed800-1b7a-495d-a207-6c52bac54dc9' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('archive: required and optional params', async () => {
    const response = await metronome.alerts.archive({ id: '8deed800-1b7a-495d-a207-6c52bac54dc9' });
  });
});
