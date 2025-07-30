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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new credit at the customer level.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        }\n      },\n      required: [        'id'\n      ]\n    }\n  },\n  required: [    'data'\n  ]\n}\n```",
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
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v1.customers.credits.create(body)));
};

export default { metadata, tool, handler };
