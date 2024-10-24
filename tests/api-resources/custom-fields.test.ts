// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customFields', () => {
  test('addKey: only required params', async () => {
    const responsePromise = client.customFields.addKey({
      enforce_uniqueness: true,
      entity: 'alert',
      key: 'x_account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addKey: required and optional params', async () => {
    const response = await client.customFields.addKey({
      enforce_uniqueness: true,
      entity: 'alert',
      key: 'x_account_id',
    });
  });

  test('deleteValues: only required params', async () => {
    const responsePromise = client.customFields.deleteValues({
      entity: 'alert',
      entity_id: '99594816-e8a5-4bca-be21-8d1de0f45120',
      keys: ['x_account_id'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteValues: required and optional params', async () => {
    const response = await client.customFields.deleteValues({
      entity: 'alert',
      entity_id: '99594816-e8a5-4bca-be21-8d1de0f45120',
      keys: ['x_account_id'],
    });
  });

  test('listKeys', async () => {
    const responsePromise = client.customFields.listKeys();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listKeys: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.customFields.listKeys({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Metronome.NotFoundError,
    );
  });

  test('listKeys: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.customFields.listKeys(
        { next_page: 'next_page', entities: ['alert'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('removeKey: only required params', async () => {
    const responsePromise = client.customFields.removeKey({ entity: 'alert', key: 'x_account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('removeKey: required and optional params', async () => {
    const response = await client.customFields.removeKey({ entity: 'alert', key: 'x_account_id' });
  });

  test('setValues: only required params', async () => {
    const responsePromise = client.customFields.setValues({
      custom_fields: { x_account_id: 'KyVnHhSBWl7eY2bl' },
      entity: 'alert',
      entity_id: '99594816-e8a5-4bca-be21-8d1de0f45120',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setValues: required and optional params', async () => {
    const response = await client.customFields.setValues({
      custom_fields: { x_account_id: 'KyVnHhSBWl7eY2bl' },
      entity: 'alert',
      entity_id: '99594816-e8a5-4bca-be21-8d1de0f45120',
    });
  });
});
