// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.usage',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/usage',
  operationId: 'getUsageBatch-v1',
};

export const tool: Tool = {
  name: 'list_v1_usage',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch aggregated usage data for multiple customers and billable-metrics, broken into intervals of the specified length.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          billable_metric_id: {\n            type: 'string'\n          },\n          billable_metric_name: {\n            type: 'string'\n          },\n          customer_id: {\n            type: 'string'\n          },\n          end_timestamp: {\n            type: 'string',\n            format: 'date-time'\n          },\n          start_timestamp: {\n            type: 'string',\n            format: 'date-time'\n          },\n          value: {\n            type: 'number'\n          },\n          groups: {\n            type: 'object',\n            description: 'Values will be either a number or null. Null indicates that there were no matches for the group_by value.'\n          }\n        },\n        required: [          'billable_metric_id',\n          'billable_metric_name',\n          'customer_id',\n          'end_timestamp',\n          'start_timestamp',\n          'value'\n        ]\n      }\n    },\n    next_page: {\n      type: 'string'\n    }\n  },\n  required: [    'data',\n    'next_page'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      ending_before: {
        type: 'string',
        format: 'date-time',
      },
      starting_on: {
        type: 'string',
        format: 'date-time',
      },
      window_size: {
        type: 'string',
        description:
          'A window_size of "day" or "hour" will return the usage for the specified period segmented into daily or hourly aggregates. A window_size of "none" will return a single usage aggregate for the entirety of the specified period.',
        enum: ['HOUR', 'DAY', 'NONE'],
      },
      next_page: {
        type: 'string',
        description: 'Cursor that indicates where the next page of results should start.',
      },
      billable_metrics: {
        type: 'array',
        description:
          'A list of billable metrics to fetch usage for. If absent, all billable metrics will be returned.',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            group_by: {
              type: 'object',
              properties: {
                key: {
                  type: 'string',
                  description: 'The name of the group_by key to use',
                },
                values: {
                  type: 'array',
                  description:
                    'Values of the group_by key to return in the query. If this field is omitted, all available values will be returned, up to a maximum of 200.',
                  items: {
                    type: 'string',
                  },
                },
              },
              required: ['key'],
            },
          },
          required: ['id'],
        },
      },
      customer_ids: {
        type: 'array',
        description:
          'A list of Metronome customer IDs to fetch usage for. If absent, usage for all customers will be returned.',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['ending_before', 'starting_on', 'window_size'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v1.usage.list(body)));
};

export default { metadata, tool, handler };
