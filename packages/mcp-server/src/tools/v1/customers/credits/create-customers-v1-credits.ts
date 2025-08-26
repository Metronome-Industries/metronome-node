// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.credits',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/customerCredits/create',
  operationId: 'createCustomerCredit-v1',
};

export const tool: Tool = {
  name: 'create_customers_v1_credits',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates customer-level credits that provide spending allowances or free credit balances for customers across their Metronome usage. Note: In most cases, you should add credits directly to customer contracts using the contract/create or contract/edit APIs.\n\nWhen to use this endpoint:\nUse this endpoint when you need to provision credits directly at the customer level that can be applied across multiple contracts or scoped to specific contracts. Customer-level credits are ideal for:\n- Customer onboarding incentives that apply globally\n- Flexible spending allowances that aren't tied to a single contract\n- Migration scenarios where you need to preserve existing customer balances\n\nScoping Flexibility: \nCustomer-level credits can be configured in two ways:\n- Contract-specific: Use the applicable_contract_ids field to limit the credit to specific contracts\n- Cross-contract: Leave applicable_contract_ids empty to allow the credit to be used across all of the customer's contracts\n\nProduct Targeting: Credits can be scoped to specific products using applicable_product_ids or applicable_product_tags, or left unrestricted to apply to all products.\n\nPriority Considerations: \nWhen multiple credits are applicable, the one with the lower priority value will be consumed first. If there is a tie, contract level commits and credits will be applied before customer level commits and credits. Plan your priority scheme carefully to ensure credits are applied in the desired order.\n\nAccess Schedule Required: \nYou must provide an access_schedule that defines when and how much credit becomes available to the customer over time. This usually is aligned to the contract schedule or starts immediately and is set to expire in the future.\n\nUsage Guidelines:\\\n⚠️ Preferred Alternative: In most cases, you should add credits directly to contracts using the contract/create or contract/edit APIs instead of creating customer-level credits. Contract-level credits provide better organization, and are easier for finance teams to recognize revenue, and are the recommended approach for most use cases.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/id'\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    id: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        }\n      },\n      required: [        'id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      access_schedule: {
        type: 'object',
        description: 'Schedule for distributing the credit to the customer.',
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
      },
      applicable_contract_ids: {
        type: 'array',
        description:
          'Which contract the credit applies to. If not provided, the credit applies to all contracts.',
        items: {
          type: 'string',
        },
      },
      applicable_product_ids: {
        type: 'array',
        description:
          'Which products the credit applies to. If both applicable_product_ids and applicable_product_tags are not provided, the credit applies to all products.',
        items: {
          type: 'string',
        },
      },
      applicable_product_tags: {
        type: 'array',
        description:
          'Which tags the credit applies to. If both applicable_product_ids and applicable_product_tags are not provided, the credit applies to all products.',
        items: {
          type: 'string',
        },
      },
      custom_fields: {
        type: 'object',
        description: 'Custom fields to be added eg. { "key1": "value1", "key2": "value2" }',
      },
      description: {
        type: 'string',
        description: 'Used only in UI/API. It is not exposed to end customers.',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['access_schedule', 'customer_id', 'priority', 'product_id'],
    $defs: {
      commit_specifier_input: {
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
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.v1.customers.credits.create(body)));
};

export default { metadata, tool, handler };
