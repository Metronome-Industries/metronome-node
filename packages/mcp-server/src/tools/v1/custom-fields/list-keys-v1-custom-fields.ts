// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.custom_fields',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/customFields/listKeys',
  operationId: 'listCustomFieldKeys-v1',
};

export const tool: Tool = {
  name: 'list_keys_v1_custom_fields',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all active custom field keys, optionally filtered by entity type.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          enforce_uniqueness: {\n            type: 'boolean'\n          },\n          entity: {\n            type: 'string',\n            enum: [              'alert',\n              'billable_metric',\n              'charge',\n              'commit',\n              'contract_credit',\n              'contract_product',\n              'contract',\n              'credit_grant',\n              'customer_plan',\n              'customer',\n              'discount',\n              'invoice',\n              'plan',\n              'professional_service',\n              'product',\n              'rate_card',\n              'scheduled_charge',\n              'subscription'\n            ]\n          },\n          key: {\n            type: 'string'\n          }\n        },\n        required: [          'enforce_uniqueness',\n          'entity',\n          'key'\n        ]\n      }\n    },\n    next_page: {\n      type: 'string'\n    }\n  },\n  required: [    'data',\n    'next_page'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      next_page: {
        type: 'string',
        description: 'Cursor that indicates where the next page of results should start.',
      },
      entities: {
        type: 'array',
        description: 'Optional list of entity types to return keys for',
        items: {
          type: 'string',
          enum: [
            'alert',
            'billable_metric',
            'charge',
            'commit',
            'contract_credit',
            'contract_product',
            'contract',
            'credit_grant',
            'customer_plan',
            'customer',
            'discount',
            'invoice',
            'plan',
            'professional_service',
            'product',
            'rate_card',
            'scheduled_charge',
            'subscription',
          ],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v1.customFields.listKeys(body)));
};

export default { metadata, tool, handler };
