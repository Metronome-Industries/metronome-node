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
  httpPath: '/v1/planDetails/{plan_id}',
  operationId: 'getPlanDetails-v1',
};

export const tool: Tool = {
  name: 'get_details_v1_plans',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch high level details of a specific plan.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/plan_detail'\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    plan_detail: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        custom_fields: {\n          type: 'object'\n        },\n        name: {\n          type: 'string'\n        },\n        credit_grants: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              amount_granted: {\n                type: 'number'\n              },\n              amount_granted_credit_type: {\n                $ref: '#/$defs/credit_type_data'\n              },\n              amount_paid: {\n                type: 'number'\n              },\n              amount_paid_credit_type: {\n                $ref: '#/$defs/credit_type_data'\n              },\n              effective_duration: {\n                type: 'number'\n              },\n              name: {\n                type: 'string'\n              },\n              priority: {\n                type: 'string'\n              },\n              send_invoice: {\n                type: 'boolean'\n              },\n              reason: {\n                type: 'string'\n              },\n              recurrence_duration: {\n                type: 'number'\n              },\n              recurrence_interval: {\n                type: 'number'\n              }\n            },\n            required: [              'amount_granted',\n              'amount_granted_credit_type',\n              'amount_paid',\n              'amount_paid_credit_type',\n              'effective_duration',\n              'name',\n              'priority',\n              'send_invoice'\n            ]\n          }\n        },\n        description: {\n          type: 'string'\n        },\n        minimums: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              credit_type: {\n                $ref: '#/$defs/credit_type_data'\n              },\n              name: {\n                type: 'string'\n              },\n              start_period: {\n                type: 'number',\n                description: 'Used in price ramps.  Indicates how many billing periods pass before the charge applies.'\n              },\n              value: {\n                type: 'number'\n              }\n            },\n            required: [              'credit_type',\n              'name',\n              'start_period',\n              'value'\n            ]\n          }\n        },\n        overage_rates: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              credit_type: {\n                $ref: '#/$defs/credit_type_data'\n              },\n              fiat_credit_type: {\n                $ref: '#/$defs/credit_type_data'\n              },\n              start_period: {\n                type: 'number',\n                description: 'Used in price ramps.  Indicates how many billing periods pass before the charge applies.'\n              },\n              to_fiat_conversion_factor: {\n                type: 'number'\n              }\n            },\n            required: [              'credit_type',\n              'fiat_credit_type',\n              'start_period',\n              'to_fiat_conversion_factor'\n            ]\n          }\n        }\n      },\n      required: [        'id',\n        'custom_fields',\n        'name'\n      ]\n    },\n    credit_type_data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      plan_id: {
        type: 'string',
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
  return asTextContentResult(await maybeFilter(args, await client.v1.plans.getDetails(body)));
};

export default { metadata, tool, handler };
