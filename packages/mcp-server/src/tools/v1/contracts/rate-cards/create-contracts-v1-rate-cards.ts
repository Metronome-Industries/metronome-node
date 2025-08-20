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
  httpPath: '/v1/contract-pricing/rate-cards/create',
  operationId: 'createRateCard-v1',
};

export const tool: Tool = {
  name: 'create_contracts_v1_rate_cards',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new rate card\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        }\n      },\n      required: [        'id'\n      ]\n    }\n  },\n  required: [    'data'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Used only in UI/API. It is not exposed to end customers.',
      },
      aliases: {
        type: 'array',
        description:
          'Reference this alias when creating a contract. If the same alias is assigned to multiple rate cards, it will reference the rate card to which it was most recently assigned. It is not exposed to end customers.',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            ending_before: {
              type: 'string',
              format: 'date-time',
            },
            starting_at: {
              type: 'string',
              format: 'date-time',
            },
          },
          required: ['name'],
        },
      },
      credit_type_conversions: {
        type: 'array',
        description: 'Required when using custom pricing units in rates.',
        items: {
          type: 'object',
          properties: {
            custom_credit_type_id: {
              type: 'string',
            },
            fiat_per_custom_credit: {
              type: 'number',
            },
          },
          required: ['custom_credit_type_id', 'fiat_per_custom_credit'],
        },
      },
      custom_fields: {
        type: 'object',
        additionalProperties: true,
      },
      description: {
        type: 'string',
      },
      fiat_credit_type_id: {
        type: 'string',
        description:
          'The Metronome ID of the credit type to associate with the rate card, defaults to USD (cents) if not passed.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['name'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.v1.contracts.rateCards.create(body)));
};

export default { metadata, tool, handler };
