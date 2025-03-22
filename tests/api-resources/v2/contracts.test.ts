// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contracts', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.v2.contracts.retrieve({
      contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
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
    const response = await client.v2.contracts.retrieve({
      contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      as_of_date: '2019-12-27T18:11:19.117Z',
      include_balance: true,
      include_ledgers: true,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.v2.contracts.list({ customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.v2.contracts.list({
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      covering_date: '2019-12-27T18:11:19.117Z',
      include_archived: true,
      include_balance: true,
      include_ledgers: true,
      starting_at: '2019-12-27T18:11:19.117Z',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.v2.contracts.edit({
      contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
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
    const response = await client.v2.contracts.edit({
      contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      add_commits: [
        {
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          type: 'PREPAID',
          access_schedule: {
            schedule_items: [
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
            ],
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          amount: 0,
          applicable_product_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          applicable_product_tags: ['string'],
          custom_fields: { foo: 'string' },
          description: 'description',
          invoice_schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            recurring_schedule: {
              amount_distribution: 'DIVIDED',
              ending_before: '2019-12-27T18:11:19.117Z',
              frequency: 'MONTHLY',
              starting_at: '2019-12-27T18:11:19.117Z',
              amount: 0,
              quantity: 0,
              unit_price: 0,
            },
            schedule_items: [
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
            ],
          },
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          priority: 0,
          rate_type: 'COMMIT_RATE',
          rollover_fraction: 0,
          temporary_id: 'temporary_id',
        },
      ],
      add_credits: [
        {
          access_schedule: {
            schedule_items: [
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
            ],
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          applicable_product_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          applicable_product_tags: ['string'],
          custom_fields: { foo: 'string' },
          description: 'description',
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          priority: 0,
          rate_type: 'COMMIT_RATE',
        },
      ],
      add_discounts: [
        {
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            recurring_schedule: {
              amount_distribution: 'DIVIDED',
              ending_before: '2019-12-27T18:11:19.117Z',
              frequency: 'MONTHLY',
              starting_at: '2019-12-27T18:11:19.117Z',
              amount: 0,
              quantity: 0,
              unit_price: 0,
            },
            schedule_items: [
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
            ],
          },
          custom_fields: { foo: 'string' },
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
      ],
      add_overrides: [
        {
          starting_at: '2024-11-02T00:00:00Z',
          applicable_product_tags: ['string'],
          ending_before: '2019-12-27T18:11:19.117Z',
          entitled: true,
          is_commit_specific: true,
          multiplier: 2,
          override_specifiers: [
            {
              commit_ids: ['string'],
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string'],
              recurring_commit_ids: ['string'],
              recurring_credit_ids: ['string'],
            },
          ],
          overwrite_rate: {
            rate_type: 'FLAT',
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            custom_rate: { foo: 'bar' },
            is_prorated: true,
            price: 0,
            quantity: 0,
            tiers: [{ price: 0, size: 0 }],
          },
          priority: 100,
          product_id: 'd4fc086c-d8e5-4091-a235-fbba5da4ec14',
          target: 'COMMIT_RATE',
          tiers: [{ multiplier: 0, size: 0 }],
          type: 'OVERWRITE',
        },
      ],
      add_professional_services: [
        {
          max_amount: 0,
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          quantity: 0,
          unit_price: 0,
          custom_fields: { foo: 'string' },
          description: 'description',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
      ],
      add_recurring_commits: [
        {
          access_amount: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            quantity: 0,
            unit_price: 0,
          },
          commit_duration: { unit: 'PERIODS', value: 0 },
          priority: 0,
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          starting_at: '2019-12-27T18:11:19.117Z',
          applicable_product_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          applicable_product_tags: ['string'],
          description: 'description',
          ending_before: '2019-12-27T18:11:19.117Z',
          invoice_amount: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            quantity: 0,
            unit_price: 0,
          },
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          proration: 'NONE',
          rate_type: 'COMMIT_RATE',
          recurrence_frequency: 'MONTHLY',
          rollover_fraction: 0,
          temporary_id: 'temporary_id',
        },
      ],
      add_recurring_credits: [
        {
          access_amount: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            quantity: 0,
            unit_price: 0,
          },
          commit_duration: { unit: 'PERIODS', value: 0 },
          priority: 0,
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          starting_at: '2019-12-27T18:11:19.117Z',
          applicable_product_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          applicable_product_tags: ['string'],
          description: 'description',
          ending_before: '2019-12-27T18:11:19.117Z',
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          proration: 'NONE',
          rate_type: 'COMMIT_RATE',
          recurrence_frequency: 'MONTHLY',
          rollover_fraction: 0,
          temporary_id: 'temporary_id',
        },
      ],
      add_reseller_royalties: [
        {
          reseller_type: 'AWS',
          applicable_product_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          applicable_product_tags: ['string'],
          aws_options: {
            aws_account_number: 'aws_account_number',
            aws_offer_id: 'aws_offer_id',
            aws_payer_reference_id: 'aws_payer_reference_id',
          },
          ending_before: '2019-12-27T18:11:19.117Z',
          fraction: 0,
          gcp_options: { gcp_account_id: 'gcp_account_id', gcp_offer_id: 'gcp_offer_id' },
          netsuite_reseller_id: 'netsuite_reseller_id',
          reseller_contract_value: 0,
          starting_at: '2019-12-27T18:11:19.117Z',
        },
      ],
      add_scheduled_charges: [
        {
          product_id: '2e30f074-d04c-412e-a134-851ebfa5ceb2',
          schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            recurring_schedule: {
              amount_distribution: 'DIVIDED',
              ending_before: '2019-12-27T18:11:19.117Z',
              frequency: 'MONTHLY',
              starting_at: '2019-12-27T18:11:19.117Z',
              amount: 0,
              quantity: 0,
              unit_price: 0,
            },
            schedule_items: [
              { timestamp: '2020-02-15T00:00:00.000Z', amount: 0, quantity: 1, unit_price: 1000000 },
            ],
          },
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
      ],
      update_commits: [
        {
          commit_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          access_schedule: {
            add_schedule_items: [
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
            ],
            remove_schedule_items: [{ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],
            update_schedule_items: [
              {
                id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
            ],
          },
          applicable_product_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          applicable_product_tags: ['string'],
          invoice_schedule: {
            add_schedule_items: [
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
            ],
            remove_schedule_items: [{ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],
            update_schedule_items: [
              {
                id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
                amount: 0,
                quantity: 0,
                timestamp: '2019-12-27T18:11:19.117Z',
                unit_price: 0,
              },
            ],
          },
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          rollover_fraction: 0,
        },
      ],
      update_credits: [
        {
          credit_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          access_schedule: {
            add_schedule_items: [
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
            ],
            remove_schedule_items: [{ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],
            update_schedule_items: [
              {
                id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
            ],
          },
          applicable_product_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          applicable_product_tags: ['string'],
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      update_scheduled_charges: [
        {
          scheduled_charge_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          invoice_schedule: {
            add_schedule_items: [
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
            ],
            remove_schedule_items: [{ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],
            update_schedule_items: [
              {
                id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
                amount: 0,
                quantity: 0,
                timestamp: '2019-12-27T18:11:19.117Z',
                unit_price: 0,
              },
            ],
          },
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
      ],
    });
  });

  test('editCommit: only required params', async () => {
    const responsePromise = client.v2.contracts.editCommit({
      commit_id: '5e7e82cf-ccb7-428c-a96f-a8e4f67af822',
      customer_id: '4c91c473-fc12-445a-9c38-40421d47023f',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('editCommit: required and optional params', async () => {
    const response = await client.v2.contracts.editCommit({
      commit_id: '5e7e82cf-ccb7-428c-a96f-a8e4f67af822',
      customer_id: '4c91c473-fc12-445a-9c38-40421d47023f',
      access_schedule: {
        add_schedule_items: [
          { amount: 0, ending_before: '2019-12-27T18:11:19.117Z', starting_at: '2019-12-27T18:11:19.117Z' },
        ],
        remove_schedule_items: [{ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],
        update_schedule_items: [
          {
            id: 'd5edbd32-c744-48cb-9475-a9bca0e6fa39',
            amount: 0,
            ending_before: '2025-03-12T00:00:00Z',
            starting_at: '2019-12-27T18:11:19.117Z',
          },
        ],
      },
      applicable_product_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      applicable_product_tags: ['string'],
      invoice_contract_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      invoice_schedule: {
        add_schedule_items: [
          { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
        ],
        remove_schedule_items: [{ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],
        update_schedule_items: [
          {
            id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            amount: 0,
            quantity: 0,
            timestamp: '2019-12-27T18:11:19.117Z',
            unit_price: 0,
          },
        ],
      },
      product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('editCredit: only required params', async () => {
    const responsePromise = client.v2.contracts.editCredit({
      credit_id: '5e7e82cf-ccb7-428c-a96f-a8e4f67af822',
      customer_id: '4c91c473-fc12-445a-9c38-40421d47023f',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('editCredit: required and optional params', async () => {
    const response = await client.v2.contracts.editCredit({
      credit_id: '5e7e82cf-ccb7-428c-a96f-a8e4f67af822',
      customer_id: '4c91c473-fc12-445a-9c38-40421d47023f',
      access_schedule: {
        add_schedule_items: [
          { amount: 0, ending_before: '2019-12-27T18:11:19.117Z', starting_at: '2019-12-27T18:11:19.117Z' },
        ],
        remove_schedule_items: [{ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],
        update_schedule_items: [
          {
            id: 'd5edbd32-c744-48cb-9475-a9bca0e6fa39',
            amount: 0,
            ending_before: '2025-03-12T00:00:00Z',
            starting_at: '2019-12-27T18:11:19.117Z',
          },
        ],
      },
      applicable_product_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      applicable_product_tags: ['string'],
      product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('getEditHistory: only required params', async () => {
    const responsePromise = client.v2.contracts.getEditHistory({
      contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getEditHistory: required and optional params', async () => {
    const response = await client.v2.contracts.getEditHistory({
      contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
    });
  });
});
