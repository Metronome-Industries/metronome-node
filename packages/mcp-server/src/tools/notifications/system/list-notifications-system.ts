// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'notifications.system',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/notifications/system/list',
  operationId: 'listSystemNotificationConfigs-v2',
};

export const tool: Tool = {
  name: 'list_notifications_system',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList available system lifecycle event types for notifications. These are read-only event types that can be used when creating offset notifications.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          policy: {\n            type: 'object',\n            properties: {\n              type: {\n                type: 'string',\n                description: 'The type of lifecycle event (e.g., \"contract.create\", \"contract.start\")'\n              }\n            },\n            required: [              'type'\n            ]\n          },\n          type: {\n            type: 'string',\n            description: 'Indicates this is a system lifecycle event notification'\n          },\n          is_enabled: {\n            type: 'boolean',\n            description: 'Whether or not webhook publishing for this lifecycle event is enabled'\n          }\n        },\n        required: [          'policy',\n          'type'\n        ]\n      }\n    },\n    cursor: {\n      type: 'string'\n    }\n  },\n  required: [    'data'\n  ]\n}\n```",
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
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.notifications.system.list()));
};

export default { metadata, tool, handler };
