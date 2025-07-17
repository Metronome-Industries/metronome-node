// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/customers/{customer_id}/setName',
  operationId: 'setCustomerName-v1',
};

export const tool: Tool = {
  name: 'set_name_v1_customers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates the specified customer's name.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/customer'\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    customer: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'the Metronome ID of the customer'\n        },\n        external_id: {\n          type: 'string',\n          description: '(deprecated, use ingest_aliases instead) the first ID (Metronome or ingest alias) that can be used in usage events'\n        },\n        ingest_aliases: {\n          type: 'array',\n          description: 'aliases for this customer that can be used instead of the Metronome customer ID in usage events',\n          items: {\n            type: 'string'\n          }\n        },\n        name: {\n          type: 'string'\n        },\n        custom_fields: {\n          type: 'object'\n        }\n      },\n      required: [        'id',\n        'external_id',\n        'ingest_aliases',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      name: {
        type: 'string',
        description:
          'The new name for the customer. This will be truncated to 160 characters if the provided name is longer.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['customer_id', 'name'],
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v1.customers.setName(body)));
};

export default { metadata, tool, handler };
