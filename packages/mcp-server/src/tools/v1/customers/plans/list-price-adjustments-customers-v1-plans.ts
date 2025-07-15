// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.plans',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/customers/{customer_id}/plans/{customer_plan_id}/priceAdjustments',
  operationId: 'getPlanPriceAdjustments-v1',
};

export const tool: Tool = {
  name: 'list_price_adjustments_customers_v1_plans',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists a customer plans adjustments. See the [price adjustments documentation](https://plans-docs.metronome.com/pricing/managing-plans/#price-adjustments) for details.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          charge_id: {\n            type: 'string'\n          },\n          charge_type: {\n            type: 'string',\n            enum: [              'usage',\n              'fixed',\n              'composite',\n              'minimum',\n              'seat'\n            ]\n          },\n          prices: {\n            type: 'array',\n            items: {\n              type: 'object',\n              properties: {\n                adjustment_type: {\n                  type: 'string',\n                  description: 'Determines how the value will be applied.',\n                  enum: [                    'fixed',\n                    'quantity',\n                    'percentage',\n                    'override'\n                  ]\n                },\n                tier: {\n                  type: 'number',\n                  description: 'Used in pricing tiers.  Indicates at what metric value the price applies.'\n                },\n                value: {\n                  type: 'number'\n                }\n              },\n              required: [                'adjustment_type'\n              ]\n            }\n          },\n          start_period: {\n            type: 'number'\n          },\n          quantity: {\n            type: 'number'\n          }\n        },\n        required: [          'charge_id',\n          'charge_type',\n          'prices',\n          'start_period'\n        ]\n      }\n    },\n    next_page: {\n      type: 'string'\n    }\n  },\n  required: [    'data',\n    'next_page'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      customer_plan_id: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'Max number of results that should be returned',
      },
      next_page: {
        type: 'string',
        description: 'Cursor that indicates where the next page of results should start.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.customers.plans.listPriceAdjustments(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
