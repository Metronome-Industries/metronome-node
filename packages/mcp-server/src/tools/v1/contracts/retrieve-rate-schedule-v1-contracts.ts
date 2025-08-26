// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
    "For a specific customer and contract, get the rates at a specific point in time. This endpoint takes the contract's rate card into consideration, including scheduled changes. It also takes into account overrides on the contract. For example, if you want to show your customer a summary of the prices they are paying, inclusive of any negotiated discounts or promotions, use this endpoint. This endpoint only returns rates that are entitled.\n",
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
    },
    required: ['contract_id', 'customer_id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.contracts.retrieveRateSchedule(body));
};

export default { metadata, tool, handler };
