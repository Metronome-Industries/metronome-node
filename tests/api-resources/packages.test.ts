// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';

const client = new Metronome({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource packages', () => {
  test('create: only required params', async () => {
    const responsePromise = client.packages.create({ name: 'My package' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.packages.create({
      name: 'My package',
      billing_anchor_date: 'contract_start_date',
      billing_provider: 'stripe',
      commits: [
        {
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          type: 'PREPAID',
          access_schedule: {
            schedule_items: [
              {
                amount: 0,
                duration: { unit: 'DAYS', value: 1 },
                starting_at_offset: { unit: 'DAYS', value: 1 },
              },
            ],
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          applicable_product_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          applicable_product_tags: ['string'],
          custom_fields: { foo: 'string' },
          description: 'description',
          invoice_schedule: {
            schedule_items: [
              { date_offset: { unit: 'DAYS', value: 1 }, amount: 0, quantity: 0, unit_price: 0 },
            ],
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          name: 'x',
          payment_gate_config: {
            payment_gate_type: 'NONE',
            precalculated_tax_config: { tax_amount: 0, tax_name: 'tax_name' },
            stripe_config: {
              payment_type: 'INVOICE',
              invoice_metadata: { foo: 'string' },
              on_session_payment: true,
            },
            tax_type: 'NONE',
          },
          priority: 0,
          rate_type: 'COMMIT_RATE',
          rollover_fraction: 0,
          specifiers: [
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string'],
            },
          ],
          temporary_id: 'temporary_id',
        },
      ],
      contract_name: 'contract_name',
      credits: [
        {
          access_schedule: {
            schedule_items: [
              {
                amount: 0,
                duration: { unit: 'DAYS', value: 1 },
                starting_at_offset: { unit: 'DAYS', value: 1 },
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
          priority: 0,
          rate_type: 'COMMIT_RATE',
          specifiers: [
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string'],
            },
          ],
        },
      ],
      custom_fields: { foo: 'string' },
      delivery_method: 'direct_to_billing_provider',
      duration: { unit: 'DAYS', value: 1 },
      multiplier_override_prioritization: 'LOWEST_MULTIPLIER',
      net_payment_terms_days: 0,
      overrides: [
        {
          override_specifiers: [
            {
              billing_frequency: 'MONTHLY',
              commit_ids: ['string'],
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string'],
              recurring_commit_ids: ['string'],
              recurring_credit_ids: ['string'],
            },
          ],
          starting_offset: { unit: 'DAYS', value: 1 },
          duration: { unit: 'DAYS', value: 1 },
          entitled: true,
          is_commit_specific: true,
          multiplier: 0,
          overwrite_rate: {
            rate_type: 'FLAT',
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            custom_rate: { foo: 'bar' },
            is_prorated: true,
            price: 0,
            quantity: 0,
            tiers: [{ price: 0, size: 0 }],
          },
          priority: 0,
          target: 'COMMIT_RATE',
          tiers: [{ multiplier: 0, size: 0 }],
          type: 'OVERWRITE',
        },
      ],
      prepaid_balance_threshold_configuration: {
        commit: {
          product_id: 'product_id',
          description: 'description',
          name: 'name',
          applicable_product_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          applicable_product_tags: ['string'],
          specifiers: [
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string'],
            },
          ],
        },
        is_enabled: true,
        payment_gate_config: {
          payment_gate_type: 'NONE',
          precalculated_tax_config: { tax_amount: 0, tax_name: 'tax_name' },
          stripe_config: { payment_type: 'INVOICE', invoice_metadata: { foo: 'string' } },
          tax_type: 'NONE',
        },
        recharge_to_amount: 0,
        threshold_amount: 0,
        custom_credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      priority: 0,
      rate_card_alias: 'rate_card_alias',
      rate_card_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
      recurring_commits: [
        {
          access_amount: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            unit_price: 0,
            quantity: 0,
          },
          commit_duration: { value: 0, unit: 'PERIODS' },
          priority: 0,
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          starting_offset: { unit: 'DAYS', value: 1 },
          applicable_product_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          applicable_product_tags: ['string'],
          description: 'description',
          ending_offset: { unit: 'DAYS', value: 1 },
          invoice_amount: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            quantity: 0,
            unit_price: 0,
          },
          name: 'x',
          proration: 'NONE',
          rate_type: 'COMMIT_RATE',
          recurrence_frequency: 'MONTHLY',
          rollover_fraction: 0,
          specifiers: [
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string'],
            },
          ],
          subscription_config: {
            apply_seat_increase_config: { is_prorated: true },
            subscription_id: 'subscription_id',
            allocation: 'INDIVIDUAL',
          },
          temporary_id: 'temporary_id',
        },
      ],
      recurring_credits: [
        {
          access_amount: {
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            unit_price: 0,
            quantity: 0,
          },
          commit_duration: { value: 0, unit: 'PERIODS' },
          priority: 0,
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          starting_offset: { unit: 'DAYS', value: 1 },
          applicable_product_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          applicable_product_tags: ['string'],
          description: 'description',
          ending_offset: { unit: 'DAYS', value: 1 },
          name: 'x',
          proration: 'NONE',
          rate_type: 'COMMIT_RATE',
          recurrence_frequency: 'MONTHLY',
          rollover_fraction: 0,
          specifiers: [
            {
              presentation_group_values: { foo: 'string' },
              pricing_group_values: { foo: 'string' },
              product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              product_tags: ['string'],
            },
          ],
          subscription_config: {
            apply_seat_increase_config: { is_prorated: true },
            subscription_id: 'subscription_id',
            allocation: 'INDIVIDUAL',
          },
          temporary_id: 'temporary_id',
        },
      ],
      scheduled_charges: [
        {
          product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          schedule: {
            schedule_items: [
              { date_offset: { unit: 'DAYS', value: 1 }, amount: 0, quantity: 0, unit_price: 0 },
            ],
            credit_type_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          custom_fields: { foo: 'string' },
          name: 'x',
        },
      ],
      scheduled_charges_on_usage_invoices: 'ALL',
      spend_threshold_configuration: {
        commit: { product_id: 'product_id', description: 'description', name: 'name' },
        is_enabled: true,
        payment_gate_config: {
          payment_gate_type: 'NONE',
          precalculated_tax_config: { tax_amount: 0, tax_name: 'tax_name' },
          stripe_config: { payment_type: 'INVOICE', invoice_metadata: { foo: 'string' } },
          tax_type: 'NONE',
        },
        threshold_amount: 0,
      },
      subscriptions: [
        {
          collection_schedule: 'ADVANCE',
          initial_quantity: 0,
          proration: { invoice_behavior: 'BILL_IMMEDIATELY', is_prorated: true },
          subscription_rate: {
            billing_frequency: 'MONTHLY',
            product_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          custom_fields: { foo: 'string' },
          description: 'description',
          duration: { unit: 'DAYS', value: 1 },
          name: 'name',
          starting_offset: { unit: 'DAYS', value: 1 },
          temporary_id: 'temporary_id',
        },
      ],
      uniqueness_key: 'x',
      usage_statement_schedule: {
        frequency: 'MONTHLY',
        day: 'FIRST_OF_MONTH',
        invoice_generation_starting_at_offset: { unit: 'DAYS', value: 1 },
      },
    });
  });
});
