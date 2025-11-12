// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts.rateCards',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contract-pricing/rate-cards/get',
  operationId: 'getRateCard-v1',
};

export const tool: Tool = {
  name: 'retrieve_contracts_v1_rate_cards',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturn details for a specific rate card including name, description, and aliases. This endpoint does not return rates - use the dedicated getRates or getRateSchedule endpoints to understand the rates on a rate card.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/rate_card_retrieve_response',\n  $defs: {\n    rate_card_retrieve_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            created_at: {\n              type: 'string',\n              format: 'date-time'\n            },\n            created_by: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            },\n            aliases: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  name: {\n                    type: 'string'\n                  },\n                  ending_before: {\n                    type: 'string',\n                    format: 'date-time'\n                  },\n                  starting_at: {\n                    type: 'string',\n                    format: 'date-time'\n                  }\n                },\n                required: [                  'name'\n                ]\n              }\n            },\n            credit_type_conversions: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  custom_credit_type: {\n                    $ref: '#/$defs/credit_type_data'\n                  },\n                  fiat_per_custom_credit: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'custom_credit_type',\n                  'fiat_per_custom_credit'\n                ]\n              }\n            },\n            custom_fields: {\n              type: 'object',\n              description: 'Custom fields to be added eg. { \"key1\": \"value1\", \"key2\": \"value2\" }',\n              additionalProperties: true\n            },\n            description: {\n              type: 'string'\n            },\n            fiat_credit_type: {\n              $ref: '#/$defs/credit_type_data'\n            }\n          },\n          required: [            'id',\n            'created_at',\n            'created_by',\n            'name'\n          ]\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    credit_type_data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.v1.contracts.rateCards.retrieve(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
