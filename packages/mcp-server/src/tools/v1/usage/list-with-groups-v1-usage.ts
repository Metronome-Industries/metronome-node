// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
    'Fetch aggregated usage data for the specified customer, billable-metric, and optional group, broken into intervals of the specified length.',
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
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.usage.listWithGroups(body);
};

export default { metadata, tool, handler };
