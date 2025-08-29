// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.commits',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/customerCommits/create',
  operationId: 'createCustomerCommit-v1',
};

export const tool: Tool = {
  name: 'create_customers_v1_commits',
  description:
    'Creates customer-level commits that establish spending commitments for customers across their Metronome usage. Commits represent contracted spending obligations that can be either prepaid (paid upfront) or postpaid (billed later). \n\nNote: In most cases, you should add commitments directly to customer contracts using the contract/create or contract/edit APIs.\n\n### Use this endpoint to:\nUse this endpoint when you need to establish customer-level spending commitments that can be applied across multiple contracts or scoped to specific contracts. Customer-level commits are ideal for:\n- Enterprise-wide minimum spending agreements that span multiple contracts\n- Multi-contract volume commitments with shared spending pools\n- Cross-contract discount tiers based on aggregate usage\n\n####Commit type Requirements: \n- You must specify either "prepaid" or "postpaid" as the commit type:\n- Prepaid commits: Customer pays upfront; invoice_schedule is optional (if omitted, creates a commit without an invoice)\n- Postpaid commits: Customer pays when the commitment expires (the end of the access_schedule); invoice_schedule is required and must match access_schedule totals. \n\n####Billing configuration:\n- invoice_contract_id is required for postpaid commits and for prepaid commits with billing (only optional for free prepaid commits)\n- For postpaid commits: access_schedule and invoice_schedule must have matching amounts\n- For postpaid commits: only one schedule item is allowed in both schedules.\n\n####Scoping flexibility: \nCustomer-level commits can be configured in a few ways:\n- Contract-specific: Use the `applicable_contract_ids` field to limit the commit to specific contracts\n- Cross-contract: Leave `applicable_contract_ids` empty to allow the commit to be used across all of the customer\'s contracts\n\n####Product targeting: \nCommits can be scoped to specific products using applicable_product_ids, applicable_product_tags, or specifiers, or left unrestricted to apply to all products.\n\n####Priority considerations: \nWhen multiple commits are applicable, the one with the lower priority value will be consumed first. If there is a tie, contract level commits and credits will be applied before customer level commits and credits. Plan your priority scheme carefully to ensure commits are applied in the desired order.\n\n### Usage guidelines:\n⚠️ Preferred Alternative: In most cases, you should add commits directly to contracts using the create contract or edit contract APIs instead of creating customer-level commits. Contract-level commits provide better organization and are the recommended approach for standard use cases.\n',
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
          'Which products the commit applies to. If applicable_product_ids, applicable_product_tags or specifiers are not provided, the commit applies to all products.',
        items: {
          type: 'string',
        },
      },
      applicable_product_tags: {
        type: 'array',
        description:
          'Which tags the commit applies to. If applicable_product_ids, applicable_product_tags or specifiers are not provided, the commit applies to all products.',
        items: {
          type: 'string',
        },
      },
      custom_fields: {
        type: 'object',
        description: 'Custom fields to be added eg. { "key1": "value1", "key2": "value2" }',
        additionalProperties: true,
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
          do_not_invoice: {
            type: 'boolean',
            description:
              'This field is only applicable to commit invoice schedules. If true, this schedule will not generate an invoice.',
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
          $ref: '#/$defs/commit_specifier_input',
        },
      },
      uniqueness_key: {
        type: 'string',
        description:
          'Prevents the creation of duplicates. If a request to create a commit or credit is made with a uniqueness key that was previously used to create a commit or credit, a new record will not be created and the request will fail with a 409 error.',
      },
    },
    required: ['access_schedule', 'customer_id', 'priority', 'product_id', 'type'],
    $defs: {
      commit_specifier_input: {
        type: 'object',
        properties: {
          presentation_group_values: {
            type: 'object',
            additionalProperties: true,
          },
          pricing_group_values: {
            type: 'object',
            additionalProperties: true,
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
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.customers.commits.create(body));
};

export default { metadata, tool, handler };
