// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource namedSchedules', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.contracts.namedSchedules.retrieve({
      rate_card_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      schedule_name: 'my-schedule',
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
    const response = await client.contracts.namedSchedules.retrieve({
      rate_card_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      schedule_name: 'my-schedule',
      covering_date: '2022-02-15T00:00:00Z',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.contracts.namedSchedules.update({
      rate_card_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      schedule_name: 'my-schedule',
      starting_at: '2022-02-01T00:00:00Z',
      value: { my_key: 'my_value' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.contracts.namedSchedules.update({
      rate_card_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      schedule_name: 'my-schedule',
      starting_at: '2022-02-01T00:00:00Z',
      value: { my_key: 'my_value' },
      ending_before: '2022-02-15T00:00:00Z',
    });
  });
});
