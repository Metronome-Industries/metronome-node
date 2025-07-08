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
  httpPath: '/v1/events/search',
  operationId: 'searchEvents-v1',
};

export const tool: Tool = {
  name: 'search_v1_usage',
  description:
    'Find events to match to customers, billable metrics, etc. We only look for transactions that occurred in the last 34 days.',
  inputSchema: {
    type: 'object',
    properties: {
      transactionIds: {
        type: 'array',
        description: 'The transaction IDs of the events to retrieve',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.usage.search(body));
};

export default { metadata, tool, handler };
