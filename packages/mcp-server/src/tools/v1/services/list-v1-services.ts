// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.services',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/services',
  operationId: 'getServices-v1',
};

export const tool: Tool = {
  name: 'list_v1_services',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches a list of services used by Metronome and the associated IP addresses. IP addresses are not necessarily unique between services. In most cases, IP addresses will appear in the list at least 30 days before they are used for the first time.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    services: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          ips: {\n            type: 'array',\n            items: {\n              type: 'string'\n            }\n          },\n          name: {\n            type: 'string'\n          },\n          usage: {\n            type: 'string',\n            enum: [              'makes_connections_from',\n              'accepts_connections_at'\n            ]\n          }\n        },\n        required: [          'ips',\n          'name',\n          'usage'\n        ]\n      }\n    }\n  },\n  required: [    'services'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  return asTextContentResult(await maybeFilter(args, await client.v1.services.list()));
};

export default { metadata, tool, handler };
