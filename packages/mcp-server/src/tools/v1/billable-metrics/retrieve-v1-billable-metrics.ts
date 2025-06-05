// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.billable_metrics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/billable-metrics/{billable_metric_id}',
  operationId: 'getBillableMetric-v1',
};

export const tool: Tool = {
  name: 'retrieve_v1_billable_metrics',
  description: 'Get a billable metric.',
  inputSchema: {
    type: 'object',
    properties: {
      billable_metric_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.billableMetrics.retrieve(body));
};

export default { metadata, tool, handler };
