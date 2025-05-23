// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts.rateCards',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_contracts_v1_rate_cards',
  description: 'Create a new rate card\n',
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
      },
      description: {
        type: 'string',
      },
      fiat_credit_type_id: {
        type: 'string',
        description:
          'The Metronome ID of the credit type to associate with the rate card, defaults to USD (cents) if not passed.',
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.contracts.rateCards.create(body);
};

export default { metadata, tool, handler };
