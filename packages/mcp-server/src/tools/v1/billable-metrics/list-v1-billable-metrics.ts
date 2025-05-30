// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.billable_metrics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/billable-metrics',
  operationId: 'listAllBillableMetrics-v1',
};

export const tool: Tool = {
  name: 'list_v1_billable_metrics',
  description: 'List all billable metrics.',
  inputSchema: {
    type: 'object',
    properties: {
      include_archived: {
        type: 'boolean',
        description: 'If true, the list of returned metrics will include archived metrics',
      },
      limit: {
        type: 'integer',
        description: 'Max number of results that should be returned',
      },
      next_page: {
        type: 'string',
        description: 'Cursor that indicates where the next page of results should start.',
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.billableMetrics.list(body);
};

export default { metadata, tool, handler };
