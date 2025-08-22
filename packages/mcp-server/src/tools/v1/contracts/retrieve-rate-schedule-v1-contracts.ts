// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/getContractRateSchedule',
  operationId: 'getContractRateSchedule-v1',
};

export const tool: Tool = {
  name: 'retrieve_rate_schedule_v1_contracts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the rate schedule for the rate card on a given contract.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          entitled: {\n            type: 'boolean'\n          },\n          list_rate: {\n            $ref: '#/$defs/rate'\n          },\n          product_custom_fields: {\n            type: 'object',\n            additionalProperties: true\n          },\n          product_id: {\n            type: 'string'\n          },\n          product_name: {\n            type: 'string'\n          },\n          product_tags: {\n            type: 'array',\n            items: {\n              type: 'string'\n            }\n          },\n          rate_card_id: {\n            type: 'string'\n          },\n          starting_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          billing_frequency: {\n            type: 'string',\n            enum: [              'MONTHLY',\n              'QUARTERLY',\n              'ANNUAL',\n              'WEEKLY'\n            ]\n          },\n          commit_rate: {\n            $ref: '#/$defs/commit_rate'\n          },\n          ending_before: {\n            type: 'string',\n            format: 'date-time'\n          },\n          override_rate: {\n            $ref: '#/$defs/rate'\n          },\n          pricing_group_values: {\n            type: 'object',\n            additionalProperties: true\n          }\n        },\n        required: [          'entitled',\n          'list_rate',\n          'product_custom_fields',\n          'product_id',\n          'product_name',\n          'product_tags',\n          'rate_card_id',\n          'starting_at'\n        ]\n      }\n    },\n    next_page: {\n      type: 'string'\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    rate: {\n      type: 'object',\n      properties: {\n        rate_type: {\n          type: 'string',\n          enum: [            'FLAT',\n            'PERCENTAGE',\n            'SUBSCRIPTION',\n            'CUSTOM',\n            'TIERED'\n          ]\n        },\n        credit_type: {\n          $ref: '#/$defs/credit_type_data'\n        },\n        custom_rate: {\n          type: 'object',\n          description: 'Only set for CUSTOM rate_type. This field is interpreted by custom rate processors.',\n          additionalProperties: true\n        },\n        is_prorated: {\n          type: 'boolean',\n          description: 'Default proration configuration. Only valid for SUBSCRIPTION rate_type. Must be set to true.'\n        },\n        price: {\n          type: 'number',\n          description: 'Default price. For FLAT rate_type, this must be >=0. For PERCENTAGE rate_type, this is a decimal fraction, e.g. use 0.1 for 10%; this must be >=0 and <=1.'\n        },\n        pricing_group_values: {\n          type: 'object',\n          description: 'if pricing groups are used, this will contain the values used to calculate the price',\n          additionalProperties: true\n        },\n        quantity: {\n          type: 'number',\n          description: 'Default quantity. For SUBSCRIPTION rate_type, this must be >=0.'\n        },\n        tiers: {\n          type: 'array',\n          description: 'Only set for TIERED rate_type.',\n          items: {\n            $ref: '#/$defs/tier'\n          }\n        },\n        use_list_prices: {\n          type: 'boolean',\n          description: 'Only set for PERCENTAGE rate_type. Defaults to false. If true, rate is computed using list prices rather than the standard rates for this product on the contract.'\n        }\n      },\n      required: [        'rate_type'\n      ]\n    },\n    credit_type_data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'name'\n      ]\n    },\n    tier: {\n      type: 'object',\n      properties: {\n        price: {\n          type: 'number'\n        },\n        size: {\n          type: 'number'\n        }\n      },\n      required: [        'price'\n      ]\n    },\n    commit_rate: {\n      type: 'object',\n      description: 'A distinct rate on the rate card. You can choose to use this rate rather than list rate when consuming a credit or commit.',\n      properties: {\n        rate_type: {\n          type: 'string',\n          enum: [            'FLAT',\n            'PERCENTAGE',\n            'SUBSCRIPTION',\n            'TIERED',\n            'CUSTOM'\n          ]\n        },\n        price: {\n          type: 'number',\n          description: 'Commit rate price. For FLAT rate_type, this must be >=0.'\n        },\n        tiers: {\n          type: 'array',\n          description: 'Only set for TIERED rate_type.',\n          items: {\n            $ref: '#/$defs/tier'\n          }\n        }\n      },\n      required: [        'rate_type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      contract_id: {
        type: 'string',
        description: 'ID of the contract to get the rate schedule for.',
      },
      customer_id: {
        type: 'string',
        description: 'ID of the customer for whose contract to get the rate schedule for.',
      },
      limit: {
        type: 'integer',
        description: 'Max number of results that should be returned',
      },
      next_page: {
        type: 'string',
        description: 'Cursor that indicates where the next page of results should start.',
      },
      at: {
        type: 'string',
        description:
          'optional timestamp which overlaps with the returned rate schedule segments. When not specified, the current timestamp will be used.',
        format: 'date-time',
      },
      selectors: {
        type: 'array',
        description:
          'List of rate selectors, rates matching ANY of the selectors will be included in the response. Passing no selectors will result in all rates being returned.',
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
              additionalProperties: true,
            },
            pricing_group_values: {
              type: 'object',
              description:
                'List of pricing group key value pairs, rates matching all of the key / value pairs will be included in the response.',
              additionalProperties: true,
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
    required: ['contract_id', 'customer_id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.v1.contracts.retrieveRateSchedule(body)),
  );
};

export default { metadata, tool, handler };
