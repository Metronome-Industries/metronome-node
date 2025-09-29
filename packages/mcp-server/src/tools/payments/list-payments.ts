// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'payments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/payments/list',
  operationId: 'listPayments-v1',
};

export const tool: Tool = {
  name: 'list_payments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch all payment attempts for the given invoice.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          amount: {\n            type: 'number'\n          },\n          amount_paid: {\n            type: 'number'\n          },\n          contract_id: {\n            type: 'string'\n          },\n          created_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          customer_id: {\n            type: 'string'\n          },\n          error_message: {\n            type: 'string'\n          },\n          fiat_credit_type: {\n            $ref: '#/$defs/credit_type_data'\n          },\n          invoice_id: {\n            type: 'string'\n          },\n          payment_gateway: {\n            type: 'object',\n            properties: {\n              stripe: {\n                type: 'object',\n                properties: {\n                  payment_intent_id: {\n                    type: 'string'\n                  },\n                  error: {\n                    type: 'object',\n                    properties: {\n                      code: {\n                        type: 'string'\n                      },\n                      decline_code: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string'\n                      }\n                    }\n                  }\n                },\n                required: [                  'payment_intent_id'\n                ]\n              },\n              type: {\n                type: 'string',\n                enum: [                  'stripe'\n                ]\n              }\n            },\n            required: [              'stripe',\n              'type'\n            ]\n          },\n          status: {\n            type: 'string',\n            enum: [              'pending',\n              'requires_intervention',\n              'paid',\n              'canceled'\n            ]\n          },\n          updated_at: {\n            type: 'string',\n            format: 'date-time'\n          }\n        },\n        required: [          'id'\n        ]\n      }\n    },\n    next_page: {\n      type: 'string'\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    credit_type_data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      invoice_id: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'The maximum number of payments to return. Defaults to 25.',
      },
      next_page: {
        type: 'string',
        description: 'The next page token from a previous response.',
      },
      statuses: {
        type: 'array',
        items: {
          type: 'string',
          enum: ['pending', 'requires_intervention', 'paid', 'canceled'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['customer_id', 'invoice_id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.payments.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
