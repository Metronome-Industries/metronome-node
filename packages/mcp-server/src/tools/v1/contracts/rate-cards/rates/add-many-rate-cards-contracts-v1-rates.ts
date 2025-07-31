// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts.rateCards.rates',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contract-pricing/rate-cards/addRates',
  operationId: 'addRates-v1',
};

export const tool: Tool = {
  name: 'add_many_rate_cards_contracts_v1_rates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdd new rates\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/id'\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    id: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        }\n      },\n      required: [        'id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      rate_card_id: {
        type: 'string',
      },
      rates: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            entitled: {
              type: 'boolean',
            },
            product_id: {
              type: 'string',
              description: 'ID of the product to add a rate for',
            },
            rate_type: {
              type: 'string',
              enum: ['FLAT', 'PERCENTAGE', 'SUBSCRIPTION', 'TIERED', 'CUSTOM'],
            },
            starting_at: {
              type: 'string',
              description: 'inclusive effective date',
              format: 'date-time',
            },
            billing_frequency: {
              type: 'string',
              description:
                'Optional. Frequency to bill subscriptions with. Required for subscription type products with Flat rate.',
              enum: ['MONTHLY', 'QUARTERLY', 'ANNUAL', 'WEEKLY'],
            },
            commit_rate: {
              type: 'object',
              description:
                'A distinct rate on the rate card. You can choose to use this rate rather than list rate when consuming a credit or commit.',
              properties: {
                rate_type: {
                  type: 'string',
                  enum: ['FLAT', 'PERCENTAGE', 'SUBSCRIPTION', 'TIERED', 'CUSTOM'],
                },
                price: {
                  type: 'number',
                  description: 'Commit rate price. For FLAT rate_type, this must be >=0.',
                },
                tiers: {
                  type: 'array',
                  description: 'Only set for TIERED rate_type.',
                  items: {
                    $ref: '#/$defs/tier',
                  },
                },
              },
              required: ['rate_type'],
            },
            credit_type_id: {
              type: 'string',
              description:
                '"The Metronome ID of the credit type to associate with price, defaults to USD (cents) if not passed. Used by all rate_types except type PERCENTAGE. PERCENTAGE rates use the credit type of associated rates."',
            },
            custom_rate: {
              type: 'object',
              description:
                'Only set for CUSTOM rate_type. This field is interpreted by custom rate processors.',
            },
            ending_before: {
              type: 'string',
              description: 'exclusive end date',
              format: 'date-time',
            },
            is_prorated: {
              type: 'boolean',
              description:
                'Default proration configuration. Only valid for SUBSCRIPTION rate_type. Must be set to true.',
            },
            price: {
              type: 'number',
              description:
                'Default price. For FLAT and SUBSCRIPTION rate_type, this must be >=0. For PERCENTAGE rate_type, this is a decimal fraction, e.g. use 0.1 for 10%; this must be >=0 and <=1.',
            },
            pricing_group_values: {
              type: 'object',
              description:
                'Optional. List of pricing group key value pairs which will be used to calculate the price.',
            },
            quantity: {
              type: 'number',
              description: 'Default quantity. For SUBSCRIPTION rate_type, this must be >=0.',
            },
            tiers: {
              type: 'array',
              description: 'Only set for TIERED rate_type.',
              items: {
                $ref: '#/$defs/tier',
              },
            },
            use_list_prices: {
              type: 'boolean',
              description:
                'Only set for PERCENTAGE rate_type. Defaults to false. If true, rate is computed using list prices rather than the standard rates for this product on the contract.',
            },
          },
          required: ['entitled', 'product_id', 'rate_type', 'starting_at'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['rate_card_id', 'rates'],
    $defs: {
      tier: {
        type: 'object',
        properties: {
          price: {
            type: 'number',
          },
          size: {
            type: 'number',
          },
        },
        required: ['price'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.v1.contracts.rateCards.rates.addMany(body)),
  );
};

export default { metadata, tool, handler };
