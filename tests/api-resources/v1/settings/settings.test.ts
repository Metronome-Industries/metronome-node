// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource settings', () => {
  test('upsertAvalaraCredentials: only required params', async () => {
    const responsePromise = client.v1.settings.upsertAvalaraCredentials({
      avalara_environment: 'PRODUCTION',
      avalara_password: 'my_password_123',
      avalara_username: 'test@metronome.com',
      delivery_method_ids: ['9a906ebb-fbc7-42e8-8e29-53bfd2db3aca'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('upsertAvalaraCredentials: required and optional params', async () => {
    const response = await client.v1.settings.upsertAvalaraCredentials({
      avalara_environment: 'PRODUCTION',
      avalara_password: 'my_password_123',
      avalara_username: 'test@metronome.com',
      delivery_method_ids: ['9a906ebb-fbc7-42e8-8e29-53bfd2db3aca'],
    });
  });
});
