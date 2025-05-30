// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.plans',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/customers/{customer_id}/plans/add',
  operationId: 'addPlanToCustomer-v1',
};

export const tool: Tool = {
  name: 'add_customers_v1_plans',
  description:
    'Associate an existing customer with a plan for a specified date range.  See the [price adjustments documentation](https://plans-docs.metronome.com/pricing/managing-plans/#price-adjustments) for details on the price adjustments.',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      plan_id: {
        type: 'string',
      },
      starting_on: {
        type: 'string',
        description:
          'RFC 3339 timestamp for when the plan becomes active for this customer. Must be at 0:00 UTC (midnight).',
        format: 'date-time',
      },
      ending_before: {
        type: 'string',
        description:
          'RFC 3339 timestamp for when the plan ends (exclusive) for this customer. Must be at 0:00 UTC (midnight).',
        format: 'date-time',
      },
      net_payment_terms_days: {
        type: 'number',
        description: 'Number of days after issuance of invoice after which the invoice is due (e.g. Net 30).',
      },
      overage_rate_adjustments: {
        type: 'array',
        description:
          'An optional list of overage rates that override the rates of the original plan configuration. These new rates will apply to all pricing ramps.',
        items: {
          type: 'object',
          properties: {
            custom_credit_type_id: {
              type: 'string',
            },
            fiat_currency_credit_type_id: {
              type: 'string',
            },
            to_fiat_conversion_factor: {
              type: 'number',
              description: 'The overage cost in fiat currency for each credit of the custom credit type.',
            },
          },
          required: ['custom_credit_type_id', 'fiat_currency_credit_type_id', 'to_fiat_conversion_factor'],
        },
      },
      price_adjustments: {
        type: 'array',
        description:
          'A list of price adjustments can be applied on top of the pricing in the plans. See the [price adjustments documentation](https://plans-docs.metronome.com/pricing/managing-plans/#price-adjustments) for details.',
        items: {
          type: 'object',
          properties: {
            adjustment_type: {
              type: 'string',
              enum: ['percentage', 'fixed', 'override', 'quantity'],
            },
            charge_id: {
              type: 'string',
            },
            start_period: {
              type: 'number',
              description:
                'Used in price ramps.  Indicates how many billing periods pass before the charge applies.',
            },
            quantity: {
              type: 'number',
              description: 'the overridden quantity for a fixed charge',
            },
            tier: {
              type: 'number',
              description: 'Used in pricing tiers.  Indicates at what metric value the price applies.',
            },
            value: {
              type: 'number',
              description:
                'The amount of change to a price. Percentage and fixed adjustments can be positive or negative. Percentage-based adjustments should be decimals, e.g. -0.05 for a 5% discount.',
            },
          },
          required: ['adjustment_type', 'charge_id', 'start_period'],
        },
      },
      trial_spec: {
        type: 'object',
        description:
          "A custom trial can be set for the customer's plan. See the [trial configuration documentation](https://docs.metronome.com/provisioning/configure-trials/) for details.",
        properties: {
          length_in_days: {
            type: 'number',
            description: 'Length of the trial period in days.',
          },
          spending_cap: {
            type: 'object',
            properties: {
              amount: {
                type: 'number',
                description:
                  'The credit amount in the given denomination based on the credit type, e.g. US cents.',
              },
              credit_type_id: {
                type: 'string',
                description: 'The credit type ID for the spending cap.',
              },
            },
            required: ['amount', 'credit_type_id'],
          },
        },
        required: ['length_in_days'],
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.customers.plans.add(body);
};

export default { metadata, tool, handler };
