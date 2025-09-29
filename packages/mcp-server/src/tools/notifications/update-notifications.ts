// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'notifications',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/notifications/edit',
  operationId: 'editNotificationConfig-v2',
};

export const tool: Tool = {
  name: 'update_notifications',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEdit an existing offset lifecycle event notification configuration.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      anyOf: [        {\n          type: 'object',\n          properties: {\n            policy: {\n              type: 'object',\n              properties: {\n                type: {\n                  type: 'string',\n                  description: 'The type of lifecycle event (e.g., \"contract.create\", \"contract.start\")'\n                }\n              },\n              required: [                'type'\n              ]\n            },\n            type: {\n              type: 'string',\n              description: 'Indicates this is a system lifecycle event notification'\n            },\n            is_enabled: {\n              type: 'boolean',\n              description: 'Whether or not webhook publishing for this lifecycle event is enabled'\n            }\n          },\n          required: [            'policy',\n            'type'\n          ]\n        },\n        {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'ID for this offset notification configuration'\n            },\n            created_at: {\n              type: 'string',\n              description: 'RFC 3339 timestamp when this notification configuration was created.\\n',\n              format: 'date-time'\n            },\n            created_by: {\n              type: 'string',\n              description: 'Who created this notification configuration'\n            },\n            environment_type: {\n              type: 'string',\n              description: 'The environment type where this notification configuration was created.\\n'\n            },\n            name: {\n              type: 'string',\n              description: 'The name for this offset notification configuration.\\n'\n            },\n            policy: {\n              type: 'object',\n              properties: {\n                offset: {\n                  type: 'string',\n                  description: 'ISO-8601 duration string indicating how much time before or after the base event this notification should be sent. Positive values indicate notifications after the event, negative values indicate notifications before the event. Examples: \"P1D\" (1 day after), \"-PT2H\" (2 hours before)\\n'\n                },\n                type: {\n                  type: 'string',\n                  description: 'The type of lifecycle event that this offset is based on.\\n'\n                }\n              },\n              required: [                'offset',\n                'type'\n              ]\n            },\n            type: {\n              type: 'string',\n              description: 'Indicates this is an offset lifecycle event notification'\n            }\n          },\n          required: [            'id',\n            'created_at',\n            'created_by',\n            'environment_type',\n            'name',\n            'policy',\n            'type'\n          ]\n        }\n      ]\n    }\n  },\n  required: [    'data'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      policy: {
        anyOf: [
          {
            type: 'object',
            properties: {
              offset: {
                type: 'string',
                description:
                  'ISO-8601 duration string indicating how much time before or after the base event this notification should be sent. Positive values indicate notifications after the event, negative values indicate notifications before the event. Examples: "P1D" (1 day after), "-PT2H" (2 hours before)\n',
              },
              type: {
                type: 'string',
                description: 'The type of lifecycle event that this offset is based on.\n',
              },
            },
            required: ['offset', 'type'],
          },
          {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                description: 'The type of lifecycle event (e.g., "contract.create", "contract.start")',
              },
            },
            required: ['type'],
          },
        ],
        description:
          'Updated policy configuration. The policy.type must match the existing lifecycle event type.',
      },
      id: {
        type: 'string',
        description:
          'The ID of the notification configuration to edit. Not provided when updating the configuration for system events\n',
      },
      is_enabled: {
        type: 'boolean',
        description:
          'Set to true to enable webhook messages for the notification indicated in the policy, false to disable.\nOnly supported by system lifecycle events.\n',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['policy'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.notifications.update(body)));
};

export default { metadata, tool, handler };
