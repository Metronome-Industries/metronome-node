// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts.rateCards',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contract-pricing/rate-cards/list',
  operationId: 'listRateCards-v1',
};

export const tool: Tool = {
  name: 'list_contracts_v1_rate_cards',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList rate cards NOTE: Use `/contract-pricing/rate-cards/getRates` to retrieve rate card rates.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          created_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          created_by: {\n            type: 'string'\n          },\n          name: {\n            type: 'string'\n          },\n          aliases: {\n            type: 'array',\n            items: {\n              type: 'object',\n              properties: {\n                name: {\n                  type: 'string'\n                },\n                ending_before: {\n                  type: 'string',\n                  format: 'date-time'\n                },\n                starting_at: {\n                  type: 'string',\n                  format: 'date-time'\n                }\n              },\n              required: [                'name'\n              ]\n            }\n          },\n          credit_type_conversions: {\n            type: 'array',\n            items: {\n              type: 'object',\n              properties: {\n                custom_credit_type: {\n                  $ref: '#/$defs/credit_type_data'\n                },\n                fiat_per_custom_credit: {\n                  type: 'string'\n                }\n              },\n              required: [                'custom_credit_type',\n                'fiat_per_custom_credit'\n              ]\n            }\n          },\n          custom_fields: {\n            type: 'object'\n          },\n          description: {\n            type: 'string'\n          },\n          fiat_credit_type: {\n            $ref: '#/$defs/credit_type_data'\n          }\n        },\n        required: [          'id',\n          'created_at',\n          'created_by',\n          'name'\n        ]\n      }\n    },\n    next_page: {\n      type: 'string'\n    }\n  },\n  required: [    'data',\n    'next_page'\n  ],\n  $defs: {\n    credit_type_data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'Max number of results that should be returned',
      },
      next_page: {
        type: 'string',
        description: 'Cursor that indicates where the next page of results should start.',
      },
      body: {
        type: 'object',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.contracts.rateCards.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
