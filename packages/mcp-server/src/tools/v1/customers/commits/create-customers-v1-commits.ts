// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.commits',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_customers_v1_commits',
  description: 'Create a new commit at the customer level.\n',
  inputSchema: {
    type: 'object',
    properties: {
      access_schedule: {
        type: 'object',
        description:
          'Schedule for distributing the commit to the customer. For "POSTPAID" commits only one schedule item is allowed and amount must match invoice_schedule total.',
        properties: {
          schedule_items: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                amount: {
                  type: 'number',
                },
                ending_before: {
                  type: 'string',
                  description: 'RFC 3339 timestamp (exclusive)',
                  format: 'date-time',
                },
                starting_at: {
                  type: 'string',
                  description: 'RFC 3339 timestamp (inclusive)',
                  format: 'date-time',
                },
              },
              required: ['amount', 'ending_before', 'starting_at'],
            },
          },
          credit_type_id: {
            type: 'string',
            description: 'Defaults to USD (cents) if not passed',
          },
        },
        required: ['schedule_items'],
      },
      customer_id: {
        type: 'string',
      },
      priority: {
        type: 'number',
        description:
          'If multiple credits or commits are applicable, the one with the lower priority will apply first.',
      },
      product_id: {
        type: 'string',
        description:
          'ID of the fixed product associated with the commit. This is required because products are used to invoice the commit amount.',
      },
      type: {
        type: 'string',
        enum: ['PREPAID', 'POSTPAID'],
      },
      applicable_contract_ids: {
        type: 'array',
        description:
          'Which contract the commit applies to. If not provided, the commit applies to all contracts.',
        items: {
          type: 'string',
        },
      },
      applicable_product_ids: {
        type: 'array',
        description:
          'Which products the commit applies to. If both applicable_product_ids and applicable_product_tags are not provided, the commit applies to all products.',
        items: {
          type: 'string',
        },
      },
      applicable_product_tags: {
        type: 'array',
        description:
          'Which tags the commit applies to. If both applicable_product_ids and applicable_product_tags are not provided, the commit applies to all products.',
        items: {
          type: 'string',
        },
      },
      custom_fields: {
        type: 'object',
      },
      description: {
        type: 'string',
        description: 'Used only in UI/API. It is not exposed to end customers.',
      },
      invoice_contract_id: {
        type: 'string',
        description:
          'The contract that this commit will be billed on. This is required for "POSTPAID" commits and for "PREPAID" commits unless there is no invoice schedule above (i.e., the commit is \'free\').',
      },
      invoice_schedule: {
        type: 'object',
        description:
          'Required for "POSTPAID" commits: the true up invoice will be generated at this time and only one schedule item is allowed; the total must match accesss_schedule amount. Optional for "PREPAID" commits: if not provided, this will be a "complimentary" commit with no invoice.',
        properties: {
          credit_type_id: {
            type: 'string',
            description: 'Defaults to USD (cents) if not passed.',
          },
          recurring_schedule: {
            type: 'object',
            description:
              'Enter the unit price and quantity for the charge or instead only send the amount. If amount is sent, the unit price is assumed to be the amount and quantity is inferred to be 1.',
            properties: {
              amount_distribution: {
                type: 'string',
                enum: ['DIVIDED', 'DIVIDED_ROUNDED', 'EACH'],
              },
              ending_before: {
                type: 'string',
                description: 'RFC 3339 timestamp (exclusive).',
                format: 'date-time',
              },
              frequency: {
                type: 'string',
                enum: ['MONTHLY', 'QUARTERLY', 'SEMI_ANNUAL', 'ANNUAL'],
              },
              starting_at: {
                type: 'string',
                description: 'RFC 3339 timestamp (inclusive).',
                format: 'date-time',
              },
              amount: {
                type: 'number',
                description:
                  'Amount for the charge. Can be provided instead of unit_price and quantity. If amount is sent, the unit_price is assumed to be the amount and quantity is inferred to be 1.',
              },
              quantity: {
                type: 'number',
                description:
                  'Quantity for the charge. Will be multiplied by unit_price to determine the amount and must be specified with unit_price. If specified amount cannot be provided.',
              },
              unit_price: {
                type: 'number',
                description:
                  'Unit price for the charge. Will be multiplied by quantity to determine the amount and must be specified with quantity. If specified amount cannot be provided.',
              },
            },
            required: ['amount_distribution', 'ending_before', 'frequency', 'starting_at'],
          },
          schedule_items: {
            type: 'array',
            description: 'Either provide amount or provide both unit_price and quantity.',
            items: {
              type: 'object',
              properties: {
                timestamp: {
                  type: 'string',
                  description: 'timestamp of the scheduled event',
                  format: 'date-time',
                },
                amount: {
                  type: 'number',
                  description:
                    'Amount for the charge. Can be provided instead of unit_price and quantity. If amount is sent, the unit_price is assumed to be the amount and quantity is inferred to be 1.',
                },
                quantity: {
                  type: 'number',
                  description:
                    'Quantity for the charge. Will be multiplied by unit_price to determine the amount and must be specified with unit_price. If specified amount cannot be provided.',
                },
                unit_price: {
                  type: 'number',
                  description:
                    'Unit price for the charge. Will be multiplied by quantity to determine the amount and must be specified with quantity. If specified amount cannot be provided.',
                },
              },
              required: ['timestamp'],
            },
          },
        },
        required: [],
      },
      name: {
        type: 'string',
        description: 'displayed on invoices',
      },
      netsuite_sales_order_id: {
        type: 'string',
        description: "This field's availability is dependent on your client's configuration.",
      },
      rate_type: {
        type: 'string',
        enum: ['COMMIT_RATE', 'LIST_RATE'],
      },
      salesforce_opportunity_id: {
        type: 'string',
        description: "This field's availability is dependent on your client's configuration.",
      },
      specifiers: {
        type: 'array',
        description:
          "List of filters that determine what kind of customer usage draws down a commit or credit. A customer's usage needs to meet the condition of at least one of the specifiers to contribute to a commit's or credit's drawdown. This field cannot be used together with `applicable_product_ids` or `applicable_product_tags`.",
        items: {
          type: 'object',
          properties: {
            presentation_group_values: {
              type: 'object',
            },
            pricing_group_values: {
              type: 'object',
            },
            product_id: {
              type: 'string',
              description: 'If provided, the specifier will only apply to the product with the specified ID.',
            },
            product_tags: {
              type: 'array',
              description:
                'If provided, the specifier will only apply to products with all the specified tags.',
              items: {
                type: 'string',
              },
            },
          },
          required: [],
        },
      },
      uniqueness_key: {
        type: 'string',
        description:
          'Prevents the creation of duplicates. If a request to create a commit or credit is made with a uniqueness key that was previously used to create a commit or credit, a new record will not be created and the request will fail with a 409 error.',
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.customers.commits.create(body);
};

export default { metadata, tool, handler };
