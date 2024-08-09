// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Response } from 'node-fetch';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contracts', () => {
  test('create: only required params', async () => {
    const responsePromise = client.contracts.create({
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      starting_at: '2020-01-01T00:00:00.000Z',
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
    const response = await client.contracts.create({
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      starting_at: '2020-01-01T00:00:00.000Z',
      billing_provider_configuration: {
        billing_provider: 'aws_marketplace',
        delivery_method: 'direct_to_billing_provider',
      },
      commits: [
        {
          type: 'PREPAID',
          name: 'x',
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          access_schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
            ],
          },
          invoice_schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
            ],
            recurring_schedule: {
              starting_at: '2019-12-27T18:11:19.117Z',
              ending_before: '2019-12-27T18:11:19.117Z',
              frequency: 'MONTHLY',
              unit_price: 0,
              quantity: 0,
              amount: 0,
              amount_distribution: 'DIVIDED',
            },
          },
          amount: 0,
          description: 'description',
          rollover_fraction: 0,
          priority: 0,
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          custom_fields: { foo: 'string' },
        },
        {
          type: 'PREPAID',
          name: 'x',
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          access_schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
            ],
          },
          invoice_schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
            ],
            recurring_schedule: {
              starting_at: '2019-12-27T18:11:19.117Z',
              ending_before: '2019-12-27T18:11:19.117Z',
              frequency: 'MONTHLY',
              unit_price: 0,
              quantity: 0,
              amount: 0,
              amount_distribution: 'DIVIDED',
            },
          },
          amount: 0,
          description: 'description',
          rollover_fraction: 0,
          priority: 0,
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          custom_fields: { foo: 'string' },
        },
        {
          type: 'PREPAID',
          name: 'x',
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          access_schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
            ],
          },
          invoice_schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
            ],
            recurring_schedule: {
              starting_at: '2019-12-27T18:11:19.117Z',
              ending_before: '2019-12-27T18:11:19.117Z',
              frequency: 'MONTHLY',
              unit_price: 0,
              quantity: 0,
              amount: 0,
              amount_distribution: 'DIVIDED',
            },
          },
          amount: 0,
          description: 'description',
          rollover_fraction: 0,
          priority: 0,
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          custom_fields: { foo: 'string' },
        },
      ],
      credits: [
        {
          name: 'x',
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          access_schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
            ],
          },
          description: 'description',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          priority: 0,
          custom_fields: { foo: 'string' },
        },
        {
          name: 'x',
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          access_schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
            ],
          },
          description: 'description',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          priority: 0,
          custom_fields: { foo: 'string' },
        },
        {
          name: 'x',
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          access_schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
            ],
          },
          description: 'description',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          priority: 0,
          custom_fields: { foo: 'string' },
        },
      ],
      custom_fields: { foo: 'string' },
      discounts: [
        {
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          name: 'x',
          schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
            ],
            recurring_schedule: {
              starting_at: '2019-12-27T18:11:19.117Z',
              ending_before: '2019-12-27T18:11:19.117Z',
              frequency: 'MONTHLY',
              unit_price: 0,
              quantity: 0,
              amount: 0,
              amount_distribution: 'DIVIDED',
            },
          },
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
        {
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          name: 'x',
          schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
            ],
            recurring_schedule: {
              starting_at: '2019-12-27T18:11:19.117Z',
              ending_before: '2019-12-27T18:11:19.117Z',
              frequency: 'MONTHLY',
              unit_price: 0,
              quantity: 0,
              amount: 0,
              amount_distribution: 'DIVIDED',
            },
          },
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
        {
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          name: 'x',
          schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
            ],
            recurring_schedule: {
              starting_at: '2019-12-27T18:11:19.117Z',
              ending_before: '2019-12-27T18:11:19.117Z',
              frequency: 'MONTHLY',
              unit_price: 0,
              quantity: 0,
              amount: 0,
              amount_distribution: 'DIVIDED',
            },
          },
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
      ],
      ending_before: '2019-12-27T18:11:19.117Z',
      multiplier_override_prioritization: 'LOWEST_MULTIPLIER',
      name: 'name',
      net_payment_terms_days: 0,
      netsuite_sales_order_id: 'netsuite_sales_order_id',
      overrides: [
        {
          starting_at: '2019-12-27T18:11:19.117Z',
          ending_before: '2019-12-27T18:11:19.117Z',
          entitled: true,
          type: 'OVERWRITE',
          multiplier: 0,
          priority: 0,
          overwrite_rate: {
            rate_type: 'FLAT',
            price: 0,
            quantity: 0,
            is_prorated: true,
            tiers: [
              { size: 0, price: 0 },
              { size: 0, price: 0 },
              { size: 0, price: 0 },
            ],
            custom_rate: { foo: 'bar' },
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          applicable_product_tags: ['string', 'string', 'string'],
          override_specifiers: [
            {
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
              pricing_group_values: { foo: 'string' },
              presentation_group_values: { foo: 'string' },
            },
            {
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
              pricing_group_values: { foo: 'string' },
              presentation_group_values: { foo: 'string' },
            },
            {
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
              pricing_group_values: { foo: 'string' },
              presentation_group_values: { foo: 'string' },
            },
          ],
        },
        {
          starting_at: '2019-12-27T18:11:19.117Z',
          ending_before: '2019-12-27T18:11:19.117Z',
          entitled: true,
          type: 'OVERWRITE',
          multiplier: 0,
          priority: 0,
          overwrite_rate: {
            rate_type: 'FLAT',
            price: 0,
            quantity: 0,
            is_prorated: true,
            tiers: [
              { size: 0, price: 0 },
              { size: 0, price: 0 },
              { size: 0, price: 0 },
            ],
            custom_rate: { foo: 'bar' },
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          applicable_product_tags: ['string', 'string', 'string'],
          override_specifiers: [
            {
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
              pricing_group_values: { foo: 'string' },
              presentation_group_values: { foo: 'string' },
            },
            {
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
              pricing_group_values: { foo: 'string' },
              presentation_group_values: { foo: 'string' },
            },
            {
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
              pricing_group_values: { foo: 'string' },
              presentation_group_values: { foo: 'string' },
            },
          ],
        },
        {
          starting_at: '2019-12-27T18:11:19.117Z',
          ending_before: '2019-12-27T18:11:19.117Z',
          entitled: true,
          type: 'OVERWRITE',
          multiplier: 0,
          priority: 0,
          overwrite_rate: {
            rate_type: 'FLAT',
            price: 0,
            quantity: 0,
            is_prorated: true,
            tiers: [
              { size: 0, price: 0 },
              { size: 0, price: 0 },
              { size: 0, price: 0 },
            ],
            custom_rate: { foo: 'bar' },
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          applicable_product_tags: ['string', 'string', 'string'],
          override_specifiers: [
            {
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
              pricing_group_values: { foo: 'string' },
              presentation_group_values: { foo: 'string' },
            },
            {
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
              pricing_group_values: { foo: 'string' },
              presentation_group_values: { foo: 'string' },
            },
            {
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
              pricing_group_values: { foo: 'string' },
              presentation_group_values: { foo: 'string' },
            },
          ],
        },
      ],
      professional_services: [
        {
          description: 'description',
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          unit_price: 0,
          quantity: 0,
          max_amount: 0,
          custom_fields: { foo: 'string' },
        },
        {
          description: 'description',
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          unit_price: 0,
          quantity: 0,
          max_amount: 0,
          custom_fields: { foo: 'string' },
        },
        {
          description: 'description',
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          unit_price: 0,
          quantity: 0,
          max_amount: 0,
          custom_fields: { foo: 'string' },
        },
      ],
      rate_card_alias: 'rate_card_alias',
      rate_card_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      reseller_royalties: [
        {
          reseller_type: 'AWS',
          fraction: 0,
          netsuite_reseller_id: 'netsuite_reseller_id',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          starting_at: '2019-12-27T18:11:19.117Z',
          ending_before: '2019-12-27T18:11:19.117Z',
          reseller_contract_value: 0,
          aws_options: {
            aws_account_number: 'aws_account_number',
            aws_payer_reference_id: 'aws_payer_reference_id',
            aws_offer_id: 'aws_offer_id',
          },
          gcp_options: { gcp_account_id: 'gcp_account_id', gcp_offer_id: 'gcp_offer_id' },
        },
        {
          reseller_type: 'AWS',
          fraction: 0,
          netsuite_reseller_id: 'netsuite_reseller_id',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          starting_at: '2019-12-27T18:11:19.117Z',
          ending_before: '2019-12-27T18:11:19.117Z',
          reseller_contract_value: 0,
          aws_options: {
            aws_account_number: 'aws_account_number',
            aws_payer_reference_id: 'aws_payer_reference_id',
            aws_offer_id: 'aws_offer_id',
          },
          gcp_options: { gcp_account_id: 'gcp_account_id', gcp_offer_id: 'gcp_offer_id' },
        },
        {
          reseller_type: 'AWS',
          fraction: 0,
          netsuite_reseller_id: 'netsuite_reseller_id',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          starting_at: '2019-12-27T18:11:19.117Z',
          ending_before: '2019-12-27T18:11:19.117Z',
          reseller_contract_value: 0,
          aws_options: {
            aws_account_number: 'aws_account_number',
            aws_payer_reference_id: 'aws_payer_reference_id',
            aws_offer_id: 'aws_offer_id',
          },
          gcp_options: { gcp_account_id: 'gcp_account_id', gcp_offer_id: 'gcp_offer_id' },
        },
      ],
      salesforce_opportunity_id: 'salesforce_opportunity_id',
      scheduled_charges: [
        {
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          name: 'x',
          schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
            ],
            recurring_schedule: {
              starting_at: '2019-12-27T18:11:19.117Z',
              ending_before: '2019-12-27T18:11:19.117Z',
              frequency: 'MONTHLY',
              unit_price: 0,
              quantity: 0,
              amount: 0,
              amount_distribution: 'DIVIDED',
            },
          },
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
        {
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          name: 'x',
          schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
            ],
            recurring_schedule: {
              starting_at: '2019-12-27T18:11:19.117Z',
              ending_before: '2019-12-27T18:11:19.117Z',
              frequency: 'MONTHLY',
              unit_price: 0,
              quantity: 0,
              amount: 0,
              amount_distribution: 'DIVIDED',
            },
          },
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
        {
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          name: 'x',
          schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
            ],
            recurring_schedule: {
              starting_at: '2019-12-27T18:11:19.117Z',
              ending_before: '2019-12-27T18:11:19.117Z',
              frequency: 'MONTHLY',
              unit_price: 0,
              quantity: 0,
              amount: 0,
              amount_distribution: 'DIVIDED',
            },
          },
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
      ],
      total_contract_value: 0,
      transition: {
        type: 'SUPERSEDE',
        from_contract_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        future_invoice_behavior: { trueup: 'remove' },
      },
      uniqueness_key: 'x',
      usage_filter: {
        group_key: 'group_key',
        group_values: ['string', 'string', 'string'],
        starting_at: '2019-12-27T18:11:19.117Z',
      },
      usage_statement_schedule: {
        frequency: 'MONTHLY',
        day: 'FIRST_OF_MONTH',
        invoice_generation_starting_at: '2019-12-27T18:11:19.117Z',
      },
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.contracts.retrieve({
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
    const response = await client.contracts.retrieve({
      contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      include_ledgers: true,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.contracts.list({ customer_id: '9b85c1c1-5238-4f2a-a409-61412905e1e1' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.contracts.list({
      customer_id: '9b85c1c1-5238-4f2a-a409-61412905e1e1',
      covering_date: '2019-12-27T18:11:19.117Z',
      include_archived: true,
      include_ledgers: true,
      starting_at: '2019-12-27T18:11:19.117Z',
    });
  });

  test('addManualBalanceEntry: only required params', async () => {
    const responsePromise = client.contracts.addManualBalanceEntry({
      id: '6162d87b-e5db-4a33-b7f2-76ce6ead4e85',
      amount: -1000,
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      reason: 'Reason for entry',
      segment_id: '66368e29-3f97-4d15-a6e9-120897f0070a',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addManualBalanceEntry: required and optional params', async () => {
    const response = await client.contracts.addManualBalanceEntry({
      id: '6162d87b-e5db-4a33-b7f2-76ce6ead4e85',
      amount: -1000,
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      reason: 'Reason for entry',
      segment_id: '66368e29-3f97-4d15-a6e9-120897f0070a',
      contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      timestamp: '2019-12-27T18:11:19.117Z',
    });
  });

  test('amend: only required params', async () => {
    const responsePromise = client.contracts.amend({
      contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      starting_at: '2020-01-01T00:00:00.000Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('amend: required and optional params', async () => {
    const response = await client.contracts.amend({
      contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      starting_at: '2020-01-01T00:00:00.000Z',
      commits: [
        {
          type: 'PREPAID',
          name: 'x',
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          access_schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
            ],
          },
          invoice_schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
            ],
            recurring_schedule: {
              starting_at: '2019-12-27T18:11:19.117Z',
              ending_before: '2019-12-27T18:11:19.117Z',
              frequency: 'MONTHLY',
              unit_price: 0,
              quantity: 0,
              amount: 0,
              amount_distribution: 'DIVIDED',
            },
          },
          amount: 0,
          description: 'description',
          rollover_fraction: 0,
          priority: 0,
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          custom_fields: { foo: 'string' },
        },
        {
          type: 'PREPAID',
          name: 'x',
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          access_schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
            ],
          },
          invoice_schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
            ],
            recurring_schedule: {
              starting_at: '2019-12-27T18:11:19.117Z',
              ending_before: '2019-12-27T18:11:19.117Z',
              frequency: 'MONTHLY',
              unit_price: 0,
              quantity: 0,
              amount: 0,
              amount_distribution: 'DIVIDED',
            },
          },
          amount: 0,
          description: 'description',
          rollover_fraction: 0,
          priority: 0,
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          custom_fields: { foo: 'string' },
        },
        {
          type: 'PREPAID',
          name: 'x',
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          access_schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
            ],
          },
          invoice_schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
            ],
            recurring_schedule: {
              starting_at: '2019-12-27T18:11:19.117Z',
              ending_before: '2019-12-27T18:11:19.117Z',
              frequency: 'MONTHLY',
              unit_price: 0,
              quantity: 0,
              amount: 0,
              amount_distribution: 'DIVIDED',
            },
          },
          amount: 0,
          description: 'description',
          rollover_fraction: 0,
          priority: 0,
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          custom_fields: { foo: 'string' },
        },
      ],
      credits: [
        {
          name: 'x',
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          access_schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
            ],
          },
          description: 'description',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          priority: 0,
          custom_fields: { foo: 'string' },
        },
        {
          name: 'x',
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          access_schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
            ],
          },
          description: 'description',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          priority: 0,
          custom_fields: { foo: 'string' },
        },
        {
          name: 'x',
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          access_schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                starting_at: '2019-12-27T18:11:19.117Z',
                ending_before: '2019-12-27T18:11:19.117Z',
              },
            ],
          },
          description: 'description',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          priority: 0,
          custom_fields: { foo: 'string' },
        },
      ],
      custom_fields: { foo: 'string' },
      discounts: [
        {
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          name: 'x',
          schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
            ],
            recurring_schedule: {
              starting_at: '2019-12-27T18:11:19.117Z',
              ending_before: '2019-12-27T18:11:19.117Z',
              frequency: 'MONTHLY',
              unit_price: 0,
              quantity: 0,
              amount: 0,
              amount_distribution: 'DIVIDED',
            },
          },
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
        {
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          name: 'x',
          schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
            ],
            recurring_schedule: {
              starting_at: '2019-12-27T18:11:19.117Z',
              ending_before: '2019-12-27T18:11:19.117Z',
              frequency: 'MONTHLY',
              unit_price: 0,
              quantity: 0,
              amount: 0,
              amount_distribution: 'DIVIDED',
            },
          },
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
        {
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          name: 'x',
          schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
            ],
            recurring_schedule: {
              starting_at: '2019-12-27T18:11:19.117Z',
              ending_before: '2019-12-27T18:11:19.117Z',
              frequency: 'MONTHLY',
              unit_price: 0,
              quantity: 0,
              amount: 0,
              amount_distribution: 'DIVIDED',
            },
          },
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
      ],
      netsuite_sales_order_id: 'netsuite_sales_order_id',
      overrides: [
        {
          starting_at: '2019-12-27T18:11:19.117Z',
          ending_before: '2019-12-27T18:11:19.117Z',
          entitled: true,
          type: 'OVERWRITE',
          multiplier: 0,
          priority: 0,
          overwrite_rate: {
            rate_type: 'FLAT',
            price: 0,
            quantity: 0,
            is_prorated: true,
            tiers: [
              { size: 0, price: 0 },
              { size: 0, price: 0 },
              { size: 0, price: 0 },
            ],
            custom_rate: { foo: 'bar' },
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          applicable_product_tags: ['string', 'string', 'string'],
          override_specifiers: [
            {
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
              pricing_group_values: { foo: 'string' },
              presentation_group_values: { foo: 'string' },
            },
            {
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
              pricing_group_values: { foo: 'string' },
              presentation_group_values: { foo: 'string' },
            },
            {
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
              pricing_group_values: { foo: 'string' },
              presentation_group_values: { foo: 'string' },
            },
          ],
        },
        {
          starting_at: '2019-12-27T18:11:19.117Z',
          ending_before: '2019-12-27T18:11:19.117Z',
          entitled: true,
          type: 'OVERWRITE',
          multiplier: 0,
          priority: 0,
          overwrite_rate: {
            rate_type: 'FLAT',
            price: 0,
            quantity: 0,
            is_prorated: true,
            tiers: [
              { size: 0, price: 0 },
              { size: 0, price: 0 },
              { size: 0, price: 0 },
            ],
            custom_rate: { foo: 'bar' },
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          applicable_product_tags: ['string', 'string', 'string'],
          override_specifiers: [
            {
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
              pricing_group_values: { foo: 'string' },
              presentation_group_values: { foo: 'string' },
            },
            {
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
              pricing_group_values: { foo: 'string' },
              presentation_group_values: { foo: 'string' },
            },
            {
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
              pricing_group_values: { foo: 'string' },
              presentation_group_values: { foo: 'string' },
            },
          ],
        },
        {
          starting_at: '2019-12-27T18:11:19.117Z',
          ending_before: '2019-12-27T18:11:19.117Z',
          entitled: true,
          type: 'OVERWRITE',
          multiplier: 0,
          priority: 0,
          overwrite_rate: {
            rate_type: 'FLAT',
            price: 0,
            quantity: 0,
            is_prorated: true,
            tiers: [
              { size: 0, price: 0 },
              { size: 0, price: 0 },
              { size: 0, price: 0 },
            ],
            custom_rate: { foo: 'bar' },
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          applicable_product_tags: ['string', 'string', 'string'],
          override_specifiers: [
            {
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
              pricing_group_values: { foo: 'string' },
              presentation_group_values: { foo: 'string' },
            },
            {
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
              pricing_group_values: { foo: 'string' },
              presentation_group_values: { foo: 'string' },
            },
            {
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
              pricing_group_values: { foo: 'string' },
              presentation_group_values: { foo: 'string' },
            },
          ],
        },
      ],
      professional_services: [
        {
          description: 'description',
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          unit_price: 0,
          quantity: 0,
          max_amount: 0,
          custom_fields: { foo: 'string' },
        },
        {
          description: 'description',
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          unit_price: 0,
          quantity: 0,
          max_amount: 0,
          custom_fields: { foo: 'string' },
        },
        {
          description: 'description',
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          unit_price: 0,
          quantity: 0,
          max_amount: 0,
          custom_fields: { foo: 'string' },
        },
      ],
      reseller_royalties: [
        {
          reseller_type: 'AWS',
          fraction: 0,
          netsuite_reseller_id: 'netsuite_reseller_id',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          starting_at: '2019-12-27T18:11:19.117Z',
          ending_before: '2019-12-27T18:11:19.117Z',
          reseller_contract_value: 0,
          aws_options: {
            aws_account_number: 'aws_account_number',
            aws_payer_reference_id: 'aws_payer_reference_id',
            aws_offer_id: 'aws_offer_id',
          },
          gcp_options: { gcp_account_id: 'gcp_account_id', gcp_offer_id: 'gcp_offer_id' },
        },
        {
          reseller_type: 'AWS',
          fraction: 0,
          netsuite_reseller_id: 'netsuite_reseller_id',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          starting_at: '2019-12-27T18:11:19.117Z',
          ending_before: '2019-12-27T18:11:19.117Z',
          reseller_contract_value: 0,
          aws_options: {
            aws_account_number: 'aws_account_number',
            aws_payer_reference_id: 'aws_payer_reference_id',
            aws_offer_id: 'aws_offer_id',
          },
          gcp_options: { gcp_account_id: 'gcp_account_id', gcp_offer_id: 'gcp_offer_id' },
        },
        {
          reseller_type: 'AWS',
          fraction: 0,
          netsuite_reseller_id: 'netsuite_reseller_id',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          starting_at: '2019-12-27T18:11:19.117Z',
          ending_before: '2019-12-27T18:11:19.117Z',
          reseller_contract_value: 0,
          aws_options: {
            aws_account_number: 'aws_account_number',
            aws_payer_reference_id: 'aws_payer_reference_id',
            aws_offer_id: 'aws_offer_id',
          },
          gcp_options: { gcp_account_id: 'gcp_account_id', gcp_offer_id: 'gcp_offer_id' },
        },
      ],
      salesforce_opportunity_id: 'salesforce_opportunity_id',
      scheduled_charges: [
        {
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          name: 'x',
          schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
            ],
            recurring_schedule: {
              starting_at: '2019-12-27T18:11:19.117Z',
              ending_before: '2019-12-27T18:11:19.117Z',
              frequency: 'MONTHLY',
              unit_price: 0,
              quantity: 0,
              amount: 0,
              amount_distribution: 'DIVIDED',
            },
          },
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
        {
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          name: 'x',
          schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
            ],
            recurring_schedule: {
              starting_at: '2019-12-27T18:11:19.117Z',
              ending_before: '2019-12-27T18:11:19.117Z',
              frequency: 'MONTHLY',
              unit_price: 0,
              quantity: 0,
              amount: 0,
              amount_distribution: 'DIVIDED',
            },
          },
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
        {
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          name: 'x',
          schedule: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            schedule_items: [
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
              { unit_price: 0, quantity: 0, amount: 0, timestamp: '2019-12-27T18:11:19.117Z' },
            ],
            recurring_schedule: {
              starting_at: '2019-12-27T18:11:19.117Z',
              ending_before: '2019-12-27T18:11:19.117Z',
              frequency: 'MONTHLY',
              unit_price: 0,
              quantity: 0,
              amount: 0,
              amount_distribution: 'DIVIDED',
            },
          },
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
      ],
      total_contract_value: 0,
    });
  });

  test('archive: only required params', async () => {
    const responsePromise = client.contracts.archive({
      contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      void_invoices: true,
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
    const response = await client.contracts.archive({
      contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      void_invoices: true,
    });
  });

  test('listBalances: only required params', async () => {
    const responsePromise = client.contracts.listBalances({
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

  test('listBalances: required and optional params', async () => {
    const response = await client.contracts.listBalances({
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      id: '6162d87b-e5db-4a33-b7f2-76ce6ead4e85',
      covering_date: '2019-12-27T18:11:19.117Z',
      effective_before: '2019-12-27T18:11:19.117Z',
      include_archived: true,
      include_contract_balances: true,
      include_ledgers: true,
      next_page: 'next_page',
      starting_at: '2019-12-27T18:11:19.117Z',
    });
  });

  test('retrieveRateSchedule: only required params', async () => {
    const responsePromise = client.contracts.retrieveRateSchedule({
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

  test('retrieveRateSchedule: required and optional params', async () => {
    const response = await client.contracts.retrieveRateSchedule({
      contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      limit: 1,
      next_page: 'next_page',
      at: '2020-01-01T00:00:00.000Z',
      selectors: [
        {
          product_id: 'd6300dbb-882e-4d2d-8dec-5125d16b65d0',
          product_tags: ['string', 'string', 'string'],
          pricing_group_values: { foo: 'string' },
          partial_pricing_group_values: { region: 'us-west-2', cloud: 'aws' },
        },
      ],
    });
  });

  test('scheduleProServicesInvoice: only required params', async () => {
    const responsePromise = client.contracts.scheduleProServicesInvoice({
      contract_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      issued_at: '2019-12-27T18:11:19.117Z',
      line_items: [
        { professional_service_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { professional_service_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { professional_service_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('scheduleProServicesInvoice: required and optional params', async () => {
    const response = await client.contracts.scheduleProServicesInvoice({
      contract_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      issued_at: '2019-12-27T18:11:19.117Z',
      line_items: [
        {
          professional_service_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          amendment_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          unit_price: 0,
          quantity: 0,
          amount: 0,
          netsuite_invoice_billing_start: '2019-12-27T18:11:19.117Z',
          netsuite_invoice_billing_end: '2019-12-27T18:11:19.117Z',
          metadata: 'metadata',
        },
        {
          professional_service_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          amendment_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          unit_price: 0,
          quantity: 0,
          amount: 0,
          netsuite_invoice_billing_start: '2019-12-27T18:11:19.117Z',
          netsuite_invoice_billing_end: '2019-12-27T18:11:19.117Z',
          metadata: 'metadata',
        },
        {
          professional_service_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          amendment_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          unit_price: 0,
          quantity: 0,
          amount: 0,
          netsuite_invoice_billing_start: '2019-12-27T18:11:19.117Z',
          netsuite_invoice_billing_end: '2019-12-27T18:11:19.117Z',
          metadata: 'metadata',
        },
      ],
      netsuite_invoice_header_end: '2019-12-27T18:11:19.117Z',
      netsuite_invoice_header_start: '2019-12-27T18:11:19.117Z',
    });
  });

  test('setUsageFilter: only required params', async () => {
    const responsePromise = client.contracts.setUsageFilter({
      contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      group_key: 'business_subscription_id',
      group_values: ['ID-1', 'ID-2'],
      starting_at: '2020-01-01T00:00:00.000Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setUsageFilter: required and optional params', async () => {
    const response = await client.contracts.setUsageFilter({
      contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      group_key: 'business_subscription_id',
      group_values: ['ID-1', 'ID-2'],
      starting_at: '2020-01-01T00:00:00.000Z',
    });
  });

  test('updateEndDate: only required params', async () => {
    const responsePromise = client.contracts.updateEndDate({
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

  test('updateEndDate: required and optional params', async () => {
    const response = await client.contracts.updateEndDate({
      contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
      ending_before: '2020-01-01T00:00:00.000Z',
    });
  });
});
