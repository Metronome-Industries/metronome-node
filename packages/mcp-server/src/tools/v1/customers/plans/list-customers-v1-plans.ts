// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.plans',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/customers/{customer_id}/plans',
  operationId: 'listCustomerPlans-v1',
};

export const tool: Tool = {
  name: 'list_customers_v1_plans',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList the given customer's plans in reverse-chronological order.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'the ID of the customer plan'\n          },\n          custom_fields: {\n            type: 'object'\n          },\n          plan_description: {\n            type: 'string'\n          },\n          plan_id: {\n            type: 'string',\n            description: 'the ID of the plan'\n          },\n          plan_name: {\n            type: 'string'\n          },\n          starting_on: {\n            type: 'string',\n            format: 'date-time'\n          },\n          ending_before: {\n            type: 'string',\n            format: 'date-time'\n          },\n          net_payment_terms_days: {\n            type: 'number'\n          },\n          trial_info: {\n            type: 'object',\n            properties: {\n              ending_before: {\n                type: 'string',\n                format: 'date-time'\n              },\n              spending_caps: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    amount: {\n                      type: 'number'\n                    },\n                    amount_remaining: {\n                      type: 'number'\n                    },\n                    credit_type: {\n                      $ref: '#/$defs/credit_type_data'\n                    }\n                  },\n                  required: [                    'amount',\n                    'amount_remaining',\n                    'credit_type'\n                  ]\n                }\n              }\n            },\n            required: [              'ending_before',\n              'spending_caps'\n            ]\n          }\n        },\n        required: [          'id',\n          'custom_fields',\n          'plan_description',\n          'plan_id',\n          'plan_name',\n          'starting_on'\n        ]\n      }\n    },\n    next_page: {\n      type: 'string'\n    }\n  },\n  required: [    'data',\n    'next_page'\n  ],\n  $defs: {\n    credit_type_data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'Max number of results that should be returned',
      },
      next_page: {
        type: 'string',
        description: 'Cursor that indicates where the next page of results should start.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['customer_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.customers.plans.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
