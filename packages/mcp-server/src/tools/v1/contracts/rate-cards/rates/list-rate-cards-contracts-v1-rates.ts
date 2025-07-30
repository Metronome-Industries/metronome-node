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
  httpPath: '/v1/contract-pricing/rate-cards/getRates',
  operationId: 'getRates-v1',
};

export const tool: Tool = {
  name: 'list_rate_cards_contracts_v1_rates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all rates for a rate card at a point in time\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          entitled: {\n            type: 'boolean'\n          },\n          product_custom_fields: {\n            type: 'object'\n          },\n          product_id: {\n            type: 'string'\n          },\n          product_name: {\n            type: 'string'\n          },\n          product_tags: {\n            type: 'array',\n            items: {\n              type: 'string'\n            }\n          },\n          rate: {\n            type: 'object',\n            properties: {\n              rate_type: {\n                type: 'string',\n                enum: [                  'FLAT',\n                  'PERCENTAGE',\n                  'SUBSCRIPTION',\n                  'CUSTOM',\n                  'TIERED'\n                ]\n              },\n              credit_type: {\n                type: 'object',\n                properties: {\n                  id: {\n                    type: 'string'\n                  },\n                  name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'id',\n                  'name'\n                ]\n              },\n              custom_rate: {\n                type: 'object',\n                description: 'Only set for CUSTOM rate_type. This field is interpreted by custom rate processors.'\n              },\n              is_prorated: {\n                type: 'boolean',\n                description: 'Default proration configuration. Only valid for SUBSCRIPTION rate_type. Must be set to true.'\n              },\n              price: {\n                type: 'number',\n                description: 'Default price. For FLAT rate_type, this must be >=0. For PERCENTAGE rate_type, this is a decimal fraction, e.g. use 0.1 for 10%; this must be >=0 and <=1.'\n              },\n              pricing_group_values: {\n                type: 'object',\n                description: 'if pricing groups are used, this will contain the values used to calculate the price'\n              },\n              quantity: {\n                type: 'number',\n                description: 'Default quantity. For SUBSCRIPTION rate_type, this must be >=0.'\n              },\n              tiers: {\n                type: 'array',\n                description: 'Only set for TIERED rate_type.',\n                items: {\n                  type: 'object',\n                  properties: {\n                    price: {\n                      type: 'number'\n                    },\n                    size: {\n                      type: 'number'\n                    }\n                  },\n                  required: [                    'price'\n                  ]\n                }\n              },\n              use_list_prices: {\n                type: 'boolean',\n                description: 'Only set for PERCENTAGE rate_type. Defaults to false. If true, rate is computed using list prices rather than the standard rates for this product on the contract.'\n              }\n            },\n            required: [              'rate_type'\n            ]\n          },\n          starting_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          billing_frequency: {\n            type: 'string',\n            enum: [              'MONTHLY',\n              'QUARTERLY',\n              'ANNUAL',\n              'WEEKLY'\n            ]\n          },\n          commit_rate: {\n            type: 'object',\n            description: 'A distinct rate on the rate card. You can choose to use this rate rather than list rate when consuming a credit or commit.',\n            properties: {\n              rate_type: {\n                type: 'string',\n                enum: [                  'FLAT',\n                  'PERCENTAGE',\n                  'SUBSCRIPTION',\n                  'TIERED',\n                  'CUSTOM'\n                ]\n              },\n              price: {\n                type: 'number',\n                description: 'Commit rate price. For FLAT rate_type, this must be >=0.'\n              },\n              tiers: {\n                type: 'array',\n                description: 'Only set for TIERED rate_type.',\n                items: {\n                  type: 'object',\n                  properties: {\n                    price: {\n                      type: 'number'\n                    },\n                    size: {\n                      type: 'number'\n                    }\n                  },\n                  required: [                    'price'\n                  ]\n                }\n              }\n            },\n            required: [              'rate_type'\n            ]\n          },\n          ending_before: {\n            type: 'string',\n            format: 'date-time'\n          },\n          pricing_group_values: {\n            type: 'object'\n          }\n        },\n        required: [          'entitled',\n          'product_custom_fields',\n          'product_id',\n          'product_name',\n          'product_tags',\n          'rate',\n          'starting_at'\n        ]\n      }\n    },\n    next_page: {\n      type: 'string'\n    }\n  },\n  required: [    'data'\n  ]\n}\n```",
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
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['at', 'rate_card_id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.contracts.rateCards.rates.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
