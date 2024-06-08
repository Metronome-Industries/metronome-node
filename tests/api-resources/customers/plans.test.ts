// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const metronome = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource plans', () => {
  test('list', async () => {
    const responsePromise = metronome.customers.plans.list('d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      metronome.customers.plans.list('d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      metronome.customers.plans.list(
        'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
        { limit: 1, next_page: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('add: only required params', async () => {
    const responsePromise = metronome.customers.plans.add('d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc', {
      plan_id: 'd2c06dae-9549-4d7d-bc04-b78dd3d241b8',
      starting_on: '2021-02-01T00:00:00Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('add: required and optional params', async () => {
    const response = await metronome.customers.plans.add('d7abd0cd-4ae9-4db7-8676-e986a4ebd8dc', {
      plan_id: 'd2c06dae-9549-4d7d-bc04-b78dd3d241b8',
      starting_on: '2021-02-01T00:00:00Z',
      ending_before: '2022-02-01T00:00:00Z',
      net_payment_terms_days: 0,
      overage_rate_adjustments: [
        {
          custom_credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          fiat_currency_credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          to_fiat_conversion_factor: 0,
        },
        {
          custom_credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          fiat_currency_credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          to_fiat_conversion_factor: 0,
        },
        {
          custom_credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          fiat_currency_credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          to_fiat_conversion_factor: 0,
        },
      ],
      price_adjustments: [
        {
          charge_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          adjustment_type: 'percentage',
          value: 0,
          quantity: 0,
          tier: 0,
          start_period: 0,
        },
        {
          charge_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          adjustment_type: 'percentage',
          value: 0,
          quantity: 0,
          tier: 0,
          start_period: 0,
        },
        {
          charge_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          adjustment_type: 'percentage',
          value: 0,
          quantity: 0,
          tier: 0,
          start_period: 0,
        },
      ],
      trial_spec: { length_in_days: 0, spending_cap: { credit_type_id: 'string', amount: 0 } },
    });
  });

  test('end', async () => {
    const responsePromise = metronome.customers.plans.end(
      'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      '7aa11640-0703-4600-8eb9-293f535a6b74',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('end: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      metronome.customers.plans.end(
        'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
        '7aa11640-0703-4600-8eb9-293f535a6b74',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('end: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      metronome.customers.plans.end(
        'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
        '7aa11640-0703-4600-8eb9-293f535a6b74',
        { ending_before: '2021-02-01T00:00:00Z', void_invoices: true, void_stripe_invoices: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('listPriceAdjustments', async () => {
    const responsePromise = metronome.customers.plans.listPriceAdjustments(
      'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      '7aa11640-0703-4600-8eb9-293f535a6b74',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listPriceAdjustments: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      metronome.customers.plans.listPriceAdjustments(
        'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
        '7aa11640-0703-4600-8eb9-293f535a6b74',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });

  test('listPriceAdjustments: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      metronome.customers.plans.listPriceAdjustments(
        'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
        '7aa11640-0703-4600-8eb9-293f535a6b74',
        { limit: 1, next_page: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Metronome.NotFoundError);
  });
});
