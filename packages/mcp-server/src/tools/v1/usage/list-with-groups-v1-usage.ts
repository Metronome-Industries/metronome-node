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
  httpPath: '/v1/usage/groups',
  operationId: 'getPagedUsage-v1',
};

export const tool: Tool = {
  name: 'list_with_groups_v1_usage',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch aggregated usage data for the specified customer, billable-metric, and optional group, broken into intervals of the specified length.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          ending_before: {\n            type: 'string',\n            format: 'date-time'\n          },\n          group_key: {\n            type: 'string'\n          },\n          group_value: {\n            type: 'string'\n          },\n          starting_on: {\n            type: 'string',\n            format: 'date-time'\n          },\n          value: {\n            type: 'number'\n          }\n        },\n        required: [          'ending_before',\n          'group_key',\n          'group_value',\n          'starting_on',\n          'value'\n        ]\n      }\n    },\n    next_page: {\n      type: 'string'\n    }\n  },\n  required: [    'data',\n    'next_page'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      billable_metric_id: {
        type: 'string',
      },
      customer_id: {
        type: 'string',
      },
      window_size: {
        type: 'string',
        description:
          'A window_size of "day" or "hour" will return the usage for the specified period segmented into daily or hourly aggregates. A window_size of "none" will return a single usage aggregate for the entirety of the specified period.',
        enum: ['HOUR', 'DAY', 'NONE'],
      },
      limit: {
        type: 'integer',
        description: 'Max number of results that should be returned',
      },
      next_page: {
        type: 'string',
        description: 'Cursor that indicates where the next page of results should start.',
      },
      current_period: {
        type: 'boolean',
        description:
          'If true, will return the usage for the current billing period. Will return an error if the customer is currently uncontracted or starting_on and ending_before are specified when this is true.',
      },
      ending_before: {
        type: 'string',
        format: 'date-time',
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
              "Values of the group_by key to return in the query. Omit this if you'd like all values for the key returned.",
            items: {
              type: 'string',
            },
          },
        },
        required: ['key'],
      },
      starting_on: {
        type: 'string',
        format: 'date-time',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['billable_metric_id', 'customer_id', 'window_size'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.v1.usage.listWithGroups(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
