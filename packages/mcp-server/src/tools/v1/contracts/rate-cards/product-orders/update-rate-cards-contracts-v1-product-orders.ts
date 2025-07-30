// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts.rateCards.product_orders',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contract-pricing/rate-cards/moveRateCardProducts',
  operationId: 'moveRateCardProducts-v1',
};

export const tool: Tool = {
  name: 'update_rate_cards_contracts_v1_product_orders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates ordering of specified products\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/id'\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    id: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        }\n      },\n      required: [        'id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      product_moves: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            position: {
              type: 'number',
              description: '0-based index of the new position of the product',
            },
            product_id: {
              type: 'string',
              description: 'ID of the product to move',
            },
          },
          required: ['position', 'product_id'],
        },
      },
      rate_card_id: {
        type: 'string',
        description: 'ID of the rate card to update',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['product_moves', 'rate_card_id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.v1.contracts.rateCards.productOrders.update(body)),
  );
};

export default { metadata, tool, handler };
