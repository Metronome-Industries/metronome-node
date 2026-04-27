// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource billingProviders', () => {
  test('create: only required params', async () => {
    const responsePromise = client.v1.settings.billingProviders.create({
      billing_provider: 'aws_marketplace',
      configuration: { aws_external_id: 'bar', aws_iam_role_arn: 'bar' },
      delivery_method: 'direct_to_billing_provider',
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
    const response = await client.v1.settings.billingProviders.create({
      billing_provider: 'aws_marketplace',
      configuration: { aws_external_id: 'bar', aws_iam_role_arn: 'bar' },
      delivery_method: 'direct_to_billing_provider',
    });
  });

  test('list', async () => {
    const responsePromise = client.v1.settings.billingProviders.list();
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
      client.v1.settings.billingProviders.list(
        { next_page: 'af26878a-de62-4a0d-9b77-3936f7c2b6d6' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });
});
