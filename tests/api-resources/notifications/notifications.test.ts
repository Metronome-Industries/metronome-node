// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource notifications', () => {
  test('create: only required params', async () => {
    const responsePromise = client.notifications.create({
      name: '+1 day after contract starts',
      policy: { offset: 'P1D', type: 'contract.start' },
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
    const response = await client.notifications.create({
      name: '+1 day after contract starts',
      policy: { offset: 'P1D', type: 'contract.start' },
      uniqueness_key: 'contract-start-notification-823j7fqzo1',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.notifications.retrieve({ id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.notifications.retrieve({ id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.notifications.update({
      policy: { offset: 'P2D', type: 'contract.start' },
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
    const response = await client.notifications.update({
      policy: { offset: 'P2D', type: 'contract.start' },
      id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      is_enabled: true,
    });
  });

  test('archive: only required params', async () => {
    const responsePromise = client.notifications.archive({ id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('archive: required and optional params', async () => {
    const response = await client.notifications.archive({ id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc' });
  });
});
