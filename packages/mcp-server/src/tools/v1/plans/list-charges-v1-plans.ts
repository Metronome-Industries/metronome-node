// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.plans',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/planDetails/{plan_id}/charges',
  operationId: 'getPlanCharges-v1',
};

export const tool: Tool = {
  name: 'list_charges_v1_plans',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches a list of charges of a specific plan.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          charge_type: {\n            type: 'string',\n            enum: [              'usage',\n              'fixed',\n              'composite',\n              'minimum',\n              'seat'\n            ]\n          },\n          credit_type: {\n            $ref: '#/$defs/credit_type_data'\n          },\n          custom_fields: {\n            type: 'object',\n            additionalProperties: true\n          },\n          name: {\n            type: 'string'\n          },\n          prices: {\n            type: 'array',\n            items: {\n              type: 'object',\n              properties: {\n                tier: {\n                  type: 'number',\n                  description: 'Used in pricing tiers.  Indicates at what metric value the price applies.'\n                },\n                value: {\n                  type: 'number'\n                },\n                collection_interval: {\n                  type: 'number'\n                },\n                collection_schedule: {\n                  type: 'string'\n                },\n                quantity: {\n                  type: 'number'\n                }\n              },\n              required: [                'tier',\n                'value'\n              ]\n            }\n          },\n          product_id: {\n            type: 'string'\n          },\n          product_name: {\n            type: 'string'\n          },\n          quantity: {\n            type: 'number'\n          },\n          start_period: {\n            type: 'number',\n            description: 'Used in price ramps.  Indicates how many billing periods pass before the charge applies.'\n          },\n          tier_reset_frequency: {\n            type: 'number',\n            description: 'Used in pricing tiers.  Indicates how often the tier resets. Default is 1 - the tier count resets every billing period.'\n          },\n          unit_conversion: {\n            type: 'object',\n            description: 'Specifies how quantities for usage based charges will be converted.',\n            properties: {\n              division_factor: {\n                type: 'number',\n                description: 'The conversion factor'\n              },\n              rounding_behavior: {\n                type: 'string',\n                description: 'Whether usage should be rounded down or up to the nearest whole number. If null, quantity will be rounded to 20 decimal places.',\n                enum: [                  'floor',\n                  'ceiling'\n                ]\n              }\n            },\n            required: [              'division_factor'\n            ]\n          }\n        },\n        required: [          'id',\n          'charge_type',\n          'credit_type',\n          'custom_fields',\n          'name',\n          'prices',\n          'product_id',\n          'product_name'\n        ]\n      }\n    },\n    next_page: {\n      type: 'string'\n    }\n  },\n  required: [    'data',\n    'next_page'\n  ],\n  $defs: {\n    credit_type_data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      plan_id: {
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
    required: ['plan_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.v1.plans.listCharges(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
