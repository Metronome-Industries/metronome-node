// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
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
  description: 'Updates ordering of specified products\n',
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
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.contracts.rateCards.productOrders.update(body));
};

export default { metadata, tool, handler };
