// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource offset', () => {
  test('create: only required params', async () => {
    const responsePromise = client.v2.notifications.offset.create({
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
    const response = await client.v2.notifications.offset.create({
      name: '+1 day after contract starts',
      policy: { offset: 'P1D', type: 'contract.start' },
      uniqueness_key: 'contract-start-notification-823j7fqzo1',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.v2.notifications.offset.retrieve({
      id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
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
    const response = await client.v2.notifications.offset.retrieve({
      id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
    });
  });

  test('list', async () => {
    const responsePromise = client.v2.notifications.offset.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.v2.notifications.offset.list(
        {
          archive_filter: 'NOT_ARCHIVED',
          cursor: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
          limit: 20,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('archive: only required params', async () => {
    const responsePromise = client.v2.notifications.offset.archive({
      id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('archive: required and optional params', async () => {
    const response = await client.v2.notifications.offset.archive({
      id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.v2.notifications.offset.edit({
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

  test('edit: required and optional params', async () => {
    const response = await client.v2.notifications.offset.edit({
      policy: { offset: 'P2D', type: 'contract.start' },
      id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      is_enabled: true,
    });
  });
});
