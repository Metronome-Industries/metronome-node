// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
    'Fetch aggregated usage data for multiple customers and billable-metrics, broken into intervals of the specified length.',
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
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.usage.list(body));
};

export default { metadata, tool, handler };
