// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts.rateCards.rates',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'list_rate_cards_contracts_v1_rates',
  description: 'Get all rates for a rate card at a point in time\n',
  inputSchema: {
    type: 'object',
    properties: {
      at: {
        type: 'string',
        description: 'inclusive starting point for the rates schedule',
        format: 'date-time',
      },
      rate_card_id: {
        type: 'string',
        description: 'ID of the rate card to get the schedule for',
      },
      limit: {
        type: 'integer',
        description: 'Max number of results that should be returned',
      },
      next_page: {
        type: 'string',
        description: 'Cursor that indicates where the next page of results should start.',
      },
      selectors: {
        type: 'array',
        description:
          'List of rate selectors, rates matching ANY of the selector will be included in the response Passing no selectors will result in all rates being returned.',
        items: {
          type: 'object',
          properties: {
            billing_frequency: {
              type: 'string',
              description:
                'Subscription rates matching the billing frequency will be included in the response.',
              enum: ['MONTHLY', 'QUARTERLY', 'ANNUAL', 'WEEKLY'],
            },
            partial_pricing_group_values: {
              type: 'object',
              description:
                'List of pricing group key value pairs, rates containing the matching key / value pairs will be included in the response.',
            },
            pricing_group_values: {
              type: 'object',
              description:
                'List of pricing group key value pairs, rates matching all of the key / value pairs will be included in the response.',
            },
            product_id: {
              type: 'string',
              description: 'Rates matching the product id will be included in the response.',
            },
            product_tags: {
              type: 'array',
              description:
                'List of product tags, rates matching any of the tags will be included in the response.',
              items: {
                type: 'string',
              },
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.contracts.rateCards.rates.list(body);
};

export default { metadata, tool, handler };
