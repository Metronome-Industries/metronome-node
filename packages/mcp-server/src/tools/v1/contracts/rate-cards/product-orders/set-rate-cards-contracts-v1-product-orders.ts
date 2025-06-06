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
  httpPath: '/v1/contract-pricing/rate-cards/setRateCardProductsOrder',
  operationId: 'setRateCardProductsOrder-v1',
};

export const tool: Tool = {
  name: 'set_rate_cards_contracts_v1_product_orders',
  description: 'Sets the ordering of products within a rate card\n',
  inputSchema: {
    type: 'object',
    properties: {
      product_order: {
        type: 'array',
        items: {
          type: 'string',
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
  return asTextContentResult(await client.v1.contracts.rateCards.productOrders.set(body));
};

export default { metadata, tool, handler };
