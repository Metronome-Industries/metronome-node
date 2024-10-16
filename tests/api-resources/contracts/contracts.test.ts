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
        billing_provider_configuration_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        delivery_method: 'direct_to_billing_provider',
      },
      commits: [
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
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
            ],
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          amount: 0,
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
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
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
            ],
          },
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          priority: 0,
          rollover_fraction: 0,
        },
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
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
            ],
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          amount: 0,
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
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
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
            ],
          },
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          priority: 0,
          rollover_fraction: 0,
        },
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
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
            ],
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          amount: 0,
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
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
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
            ],
          },
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          priority: 0,
          rollover_fraction: 0,
        },
      ],
      credits: [
        {
          access_schedule: {
            schedule_items: [
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
            ],
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          custom_fields: { foo: 'string' },
          description: 'description',
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          priority: 0,
        },
        {
          access_schedule: {
            schedule_items: [
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
            ],
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          custom_fields: { foo: 'string' },
          description: 'description',
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          priority: 0,
        },
        {
          access_schedule: {
            schedule_items: [
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
            ],
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          custom_fields: { foo: 'string' },
          description: 'description',
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          priority: 0,
        },
      ],
      custom_fields: { foo: 'string' },
      discounts: [
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
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
            ],
          },
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
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
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
            ],
          },
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
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
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
            ],
          },
          name: 'x',
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
          applicable_product_tags: ['string', 'string', 'string'],
          ending_before: '2019-12-27T18:11:19.117Z',
          entitled: true,
          multiplier: 0,
          override_specifiers: [
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
            },
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
            },
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
            },
          ],
          overwrite_rate: {
            rate_type: 'FLAT',
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            custom_rate: { foo: 'bar' },
            is_prorated: true,
            price: 0,
            quantity: 0,
            tiers: [
              { price: 0, size: 0 },
              { price: 0, size: 0 },
              { price: 0, size: 0 },
            ],
          },
          priority: 0,
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          tiers: [
            { multiplier: 0, size: 0 },
            { multiplier: 0, size: 0 },
            { multiplier: 0, size: 0 },
          ],
          type: 'OVERWRITE',
        },
        {
          starting_at: '2019-12-27T18:11:19.117Z',
          applicable_product_tags: ['string', 'string', 'string'],
          ending_before: '2019-12-27T18:11:19.117Z',
          entitled: true,
          multiplier: 0,
          override_specifiers: [
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
            },
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
            },
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
            },
          ],
          overwrite_rate: {
            rate_type: 'FLAT',
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            custom_rate: { foo: 'bar' },
            is_prorated: true,
            price: 0,
            quantity: 0,
            tiers: [
              { price: 0, size: 0 },
              { price: 0, size: 0 },
              { price: 0, size: 0 },
            ],
          },
          priority: 0,
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          tiers: [
            { multiplier: 0, size: 0 },
            { multiplier: 0, size: 0 },
            { multiplier: 0, size: 0 },
          ],
          type: 'OVERWRITE',
        },
        {
          starting_at: '2019-12-27T18:11:19.117Z',
          applicable_product_tags: ['string', 'string', 'string'],
          ending_before: '2019-12-27T18:11:19.117Z',
          entitled: true,
          multiplier: 0,
          override_specifiers: [
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
            },
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
            },
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
            },
          ],
          overwrite_rate: {
            rate_type: 'FLAT',
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            custom_rate: { foo: 'bar' },
            is_prorated: true,
            price: 0,
            quantity: 0,
            tiers: [
              { price: 0, size: 0 },
              { price: 0, size: 0 },
              { price: 0, size: 0 },
            ],
          },
          priority: 0,
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          tiers: [
            { multiplier: 0, size: 0 },
            { multiplier: 0, size: 0 },
            { multiplier: 0, size: 0 },
          ],
          type: 'OVERWRITE',
        },
      ],
      professional_services: [
        {
          max_amount: 0,
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          quantity: 0,
          unit_price: 0,
          custom_fields: { foo: 'string' },
          description: 'description',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
        {
          max_amount: 0,
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          quantity: 0,
          unit_price: 0,
          custom_fields: { foo: 'string' },
          description: 'description',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
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
      rate_card_alias: 'rate_card_alias',
      rate_card_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      reseller_royalties: [
        {
          fraction: 0,
          netsuite_reseller_id: 'netsuite_reseller_id',
          reseller_type: 'AWS',
          starting_at: '2019-12-27T18:11:19.117Z',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          aws_options: {
            aws_account_number: 'aws_account_number',
            aws_offer_id: 'aws_offer_id',
            aws_payer_reference_id: 'aws_payer_reference_id',
          },
          ending_before: '2019-12-27T18:11:19.117Z',
          gcp_options: { gcp_account_id: 'gcp_account_id', gcp_offer_id: 'gcp_offer_id' },
          reseller_contract_value: 0,
        },
        {
          fraction: 0,
          netsuite_reseller_id: 'netsuite_reseller_id',
          reseller_type: 'AWS',
          starting_at: '2019-12-27T18:11:19.117Z',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          aws_options: {
            aws_account_number: 'aws_account_number',
            aws_offer_id: 'aws_offer_id',
            aws_payer_reference_id: 'aws_payer_reference_id',
          },
          ending_before: '2019-12-27T18:11:19.117Z',
          gcp_options: { gcp_account_id: 'gcp_account_id', gcp_offer_id: 'gcp_offer_id' },
          reseller_contract_value: 0,
        },
        {
          fraction: 0,
          netsuite_reseller_id: 'netsuite_reseller_id',
          reseller_type: 'AWS',
          starting_at: '2019-12-27T18:11:19.117Z',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          aws_options: {
            aws_account_number: 'aws_account_number',
            aws_offer_id: 'aws_offer_id',
            aws_payer_reference_id: 'aws_payer_reference_id',
          },
          ending_before: '2019-12-27T18:11:19.117Z',
          gcp_options: { gcp_account_id: 'gcp_account_id', gcp_offer_id: 'gcp_offer_id' },
          reseller_contract_value: 0,
        },
      ],
      salesforce_opportunity_id: 'salesforce_opportunity_id',
      scheduled_charges: [
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
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
            ],
          },
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
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
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
            ],
          },
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
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
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
            ],
          },
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
      ],
      total_contract_value: 0,
      transition: {
        from_contract_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        type: 'SUPERSEDE',
        future_invoice_behavior: { trueup: 'REMOVE' },
      },
      uniqueness_key: 'x',
      usage_filter: {
        group_key: 'group_key',
        group_values: ['string', 'string', 'string'],
        starting_at: '2019-12-27T18:11:19.117Z',
      },
      usage_statement_schedule: {
        frequency: 'MONTHLY',
        billing_anchor_date: '2019-12-27T18:11:19.117Z',
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
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          type: 'PREPAID',
          access_schedule: {
            schedule_items: [
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
            ],
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          amount: 0,
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
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
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
            ],
          },
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          priority: 0,
          rollover_fraction: 0,
        },
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
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
            ],
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          amount: 0,
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
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
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
            ],
          },
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          priority: 0,
          rollover_fraction: 0,
        },
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
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
            ],
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          amount: 0,
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
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
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
            ],
          },
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          priority: 0,
          rollover_fraction: 0,
        },
      ],
      credits: [
        {
          access_schedule: {
            schedule_items: [
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
            ],
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          custom_fields: { foo: 'string' },
          description: 'description',
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          priority: 0,
        },
        {
          access_schedule: {
            schedule_items: [
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
            ],
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          custom_fields: { foo: 'string' },
          description: 'description',
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          priority: 0,
        },
        {
          access_schedule: {
            schedule_items: [
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
              {
                amount: 0,
                ending_before: '2019-12-27T18:11:19.117Z',
                starting_at: '2019-12-27T18:11:19.117Z',
              },
            ],
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
          custom_fields: { foo: 'string' },
          description: 'description',
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
          priority: 0,
        },
      ],
      custom_fields: { foo: 'string' },
      discounts: [
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
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
            ],
          },
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
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
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
            ],
          },
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
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
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
            ],
          },
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
      ],
      netsuite_sales_order_id: 'netsuite_sales_order_id',
      overrides: [
        {
          starting_at: '2019-12-27T18:11:19.117Z',
          applicable_product_tags: ['string', 'string', 'string'],
          ending_before: '2019-12-27T18:11:19.117Z',
          entitled: true,
          multiplier: 0,
          override_specifiers: [
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
            },
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
            },
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
            },
          ],
          overwrite_rate: {
            rate_type: 'FLAT',
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            custom_rate: { foo: 'bar' },
            is_prorated: true,
            price: 0,
            quantity: 0,
            tiers: [
              { price: 0, size: 0 },
              { price: 0, size: 0 },
              { price: 0, size: 0 },
            ],
          },
          priority: 0,
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          tiers: [
            { multiplier: 0, size: 0 },
            { multiplier: 0, size: 0 },
            { multiplier: 0, size: 0 },
          ],
          type: 'OVERWRITE',
        },
        {
          starting_at: '2019-12-27T18:11:19.117Z',
          applicable_product_tags: ['string', 'string', 'string'],
          ending_before: '2019-12-27T18:11:19.117Z',
          entitled: true,
          multiplier: 0,
          override_specifiers: [
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
            },
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
            },
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
            },
          ],
          overwrite_rate: {
            rate_type: 'FLAT',
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            custom_rate: { foo: 'bar' },
            is_prorated: true,
            price: 0,
            quantity: 0,
            tiers: [
              { price: 0, size: 0 },
              { price: 0, size: 0 },
              { price: 0, size: 0 },
            ],
          },
          priority: 0,
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          tiers: [
            { multiplier: 0, size: 0 },
            { multiplier: 0, size: 0 },
            { multiplier: 0, size: 0 },
          ],
          type: 'OVERWRITE',
        },
        {
          starting_at: '2019-12-27T18:11:19.117Z',
          applicable_product_tags: ['string', 'string', 'string'],
          ending_before: '2019-12-27T18:11:19.117Z',
          entitled: true,
          multiplier: 0,
          override_specifiers: [
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
            },
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
            },
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string', 'string', 'string'],
            },
          ],
          overwrite_rate: {
            rate_type: 'FLAT',
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            custom_rate: { foo: 'bar' },
            is_prorated: true,
            price: 0,
            quantity: 0,
            tiers: [
              { price: 0, size: 0 },
              { price: 0, size: 0 },
              { price: 0, size: 0 },
            ],
          },
          priority: 0,
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          tiers: [
            { multiplier: 0, size: 0 },
            { multiplier: 0, size: 0 },
            { multiplier: 0, size: 0 },
          ],
          type: 'OVERWRITE',
        },
      ],
      professional_services: [
        {
          max_amount: 0,
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          quantity: 0,
          unit_price: 0,
          custom_fields: { foo: 'string' },
          description: 'description',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
        {
          max_amount: 0,
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          quantity: 0,
          unit_price: 0,
          custom_fields: { foo: 'string' },
          description: 'description',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
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
      reseller_royalties: [
        {
          reseller_type: 'AWS',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
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
        {
          reseller_type: 'AWS',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
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
        {
          reseller_type: 'AWS',
          applicable_product_ids: [
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ],
          applicable_product_tags: ['string', 'string', 'string'],
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
      salesforce_opportunity_id: 'salesforce_opportunity_id',
      scheduled_charges: [
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
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
            ],
          },
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
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
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
            ],
          },
          name: 'x',
          netsuite_sales_order_id: 'netsuite_sales_order_id',
        },
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
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
              { timestamp: '2019-12-27T18:11:19.117Z', amount: 0, quantity: 0, unit_price: 0 },
            ],
          },
          name: 'x',
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

  test('createHistoricalInvoices: only required params', async () => {
    const responsePromise = client.contracts.createHistoricalInvoices({
      invoices: [
        {
          contract_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          exclusive_end_date: '2019-12-27T18:11:19.117Z',
          inclusive_start_date: '2019-12-27T18:11:19.117Z',
          issue_date: '2019-12-27T18:11:19.117Z',
          usage_line_items: [
            {
              exclusive_end_date: '2019-12-27T18:11:19.117Z',
              inclusive_start_date: '2019-12-27T18:11:19.117Z',
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            },
            {
              exclusive_end_date: '2019-12-27T18:11:19.117Z',
              inclusive_start_date: '2019-12-27T18:11:19.117Z',
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            },
            {
              exclusive_end_date: '2019-12-27T18:11:19.117Z',
              inclusive_start_date: '2019-12-27T18:11:19.117Z',
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            },
          ],
        },
        {
          contract_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          exclusive_end_date: '2019-12-27T18:11:19.117Z',
          inclusive_start_date: '2019-12-27T18:11:19.117Z',
          issue_date: '2019-12-27T18:11:19.117Z',
          usage_line_items: [
            {
              exclusive_end_date: '2019-12-27T18:11:19.117Z',
              inclusive_start_date: '2019-12-27T18:11:19.117Z',
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            },
            {
              exclusive_end_date: '2019-12-27T18:11:19.117Z',
              inclusive_start_date: '2019-12-27T18:11:19.117Z',
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            },
            {
              exclusive_end_date: '2019-12-27T18:11:19.117Z',
              inclusive_start_date: '2019-12-27T18:11:19.117Z',
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            },
          ],
        },
        {
          contract_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          exclusive_end_date: '2019-12-27T18:11:19.117Z',
          inclusive_start_date: '2019-12-27T18:11:19.117Z',
          issue_date: '2019-12-27T18:11:19.117Z',
          usage_line_items: [
            {
              exclusive_end_date: '2019-12-27T18:11:19.117Z',
              inclusive_start_date: '2019-12-27T18:11:19.117Z',
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            },
            {
              exclusive_end_date: '2019-12-27T18:11:19.117Z',
              inclusive_start_date: '2019-12-27T18:11:19.117Z',
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            },
            {
              exclusive_end_date: '2019-12-27T18:11:19.117Z',
              inclusive_start_date: '2019-12-27T18:11:19.117Z',
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            },
          ],
        },
      ],
      preview: true,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createHistoricalInvoices: required and optional params', async () => {
    const response = await client.contracts.createHistoricalInvoices({
      invoices: [
        {
          contract_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          exclusive_end_date: '2019-12-27T18:11:19.117Z',
          inclusive_start_date: '2019-12-27T18:11:19.117Z',
          issue_date: '2019-12-27T18:11:19.117Z',
          usage_line_items: [
            {
              exclusive_end_date: '2019-12-27T18:11:19.117Z',
              inclusive_start_date: '2019-12-27T18:11:19.117Z',
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              quantity: 0,
              subtotals_with_quantity: [
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
              ],
            },
            {
              exclusive_end_date: '2019-12-27T18:11:19.117Z',
              inclusive_start_date: '2019-12-27T18:11:19.117Z',
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              quantity: 0,
              subtotals_with_quantity: [
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
              ],
            },
            {
              exclusive_end_date: '2019-12-27T18:11:19.117Z',
              inclusive_start_date: '2019-12-27T18:11:19.117Z',
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              quantity: 0,
              subtotals_with_quantity: [
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
              ],
            },
          ],
          billable_status: 'billable',
          breakdown_granularity: 'HOUR',
          custom_fields: { foo: 'string' },
        },
        {
          contract_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          exclusive_end_date: '2019-12-27T18:11:19.117Z',
          inclusive_start_date: '2019-12-27T18:11:19.117Z',
          issue_date: '2019-12-27T18:11:19.117Z',
          usage_line_items: [
            {
              exclusive_end_date: '2019-12-27T18:11:19.117Z',
              inclusive_start_date: '2019-12-27T18:11:19.117Z',
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              quantity: 0,
              subtotals_with_quantity: [
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
              ],
            },
            {
              exclusive_end_date: '2019-12-27T18:11:19.117Z',
              inclusive_start_date: '2019-12-27T18:11:19.117Z',
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              quantity: 0,
              subtotals_with_quantity: [
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
              ],
            },
            {
              exclusive_end_date: '2019-12-27T18:11:19.117Z',
              inclusive_start_date: '2019-12-27T18:11:19.117Z',
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              quantity: 0,
              subtotals_with_quantity: [
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
              ],
            },
          ],
          billable_status: 'billable',
          breakdown_granularity: 'HOUR',
          custom_fields: { foo: 'string' },
        },
        {
          contract_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          exclusive_end_date: '2019-12-27T18:11:19.117Z',
          inclusive_start_date: '2019-12-27T18:11:19.117Z',
          issue_date: '2019-12-27T18:11:19.117Z',
          usage_line_items: [
            {
              exclusive_end_date: '2019-12-27T18:11:19.117Z',
              inclusive_start_date: '2019-12-27T18:11:19.117Z',
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              quantity: 0,
              subtotals_with_quantity: [
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
              ],
            },
            {
              exclusive_end_date: '2019-12-27T18:11:19.117Z',
              inclusive_start_date: '2019-12-27T18:11:19.117Z',
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              quantity: 0,
              subtotals_with_quantity: [
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
              ],
            },
            {
              exclusive_end_date: '2019-12-27T18:11:19.117Z',
              inclusive_start_date: '2019-12-27T18:11:19.117Z',
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              quantity: 0,
              subtotals_with_quantity: [
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
                {
                  exclusive_end_date: '2019-12-27T18:11:19.117Z',
                  inclusive_start_date: '2019-12-27T18:11:19.117Z',
                  quantity: 0,
                },
              ],
            },
          ],
          billable_status: 'billable',
          breakdown_granularity: 'HOUR',
          custom_fields: { foo: 'string' },
        },
      ],
      preview: true,
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
          partial_pricing_group_values: { region: 'us-west-2', cloud: 'aws' },
          pricing_group_values: { foo: 'string' },
          product_id: 'd6300dbb-882e-4d2d-8dec-5125d16b65d0',
          product_tags: ['string', 'string', 'string'],
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
          amount: 0,
          metadata: 'metadata',
          netsuite_invoice_billing_end: '2019-12-27T18:11:19.117Z',
          netsuite_invoice_billing_start: '2019-12-27T18:11:19.117Z',
          quantity: 0,
          unit_price: 0,
        },
        {
          professional_service_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          amendment_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          amount: 0,
          metadata: 'metadata',
          netsuite_invoice_billing_end: '2019-12-27T18:11:19.117Z',
          netsuite_invoice_billing_start: '2019-12-27T18:11:19.117Z',
          quantity: 0,
          unit_price: 0,
        },
        {
          professional_service_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          amendment_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          amount: 0,
          metadata: 'metadata',
          netsuite_invoice_billing_end: '2019-12-27T18:11:19.117Z',
          netsuite_invoice_billing_start: '2019-12-27T18:11:19.117Z',
          quantity: 0,
          unit_price: 0,
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
