// File generated from our OpenAPI spec by Stainless.

import Metronome from '@metronome-industries/metronome';
import { Response } from 'node-fetch';

const metronome = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customerAlerts', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = metronome.customerAlerts.retrieve({
      alert_id: '8deed800-1b7a-495d-a207-6c52bac54dc9',
      customer_id: '9b85c1c1-5238-4f2a-a409-61412905e1e1',
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
    const response = await metronome.customerAlerts.retrieve({
      alert_id: '8deed800-1b7a-495d-a207-6c52bac54dc9',
      customer_id: '9b85c1c1-5238-4f2a-a409-61412905e1e1',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = metronome.customerAlerts.list({
      customer_id: '9b85c1c1-5238-4f2a-a409-61412905e1e1',
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
    const response = await metronome.customerAlerts.list({
      customer_id: '9b85c1c1-5238-4f2a-a409-61412905e1e1',
      next_page: 'string',
      alert_statuses: ['enabled'],
    });
  });
});
