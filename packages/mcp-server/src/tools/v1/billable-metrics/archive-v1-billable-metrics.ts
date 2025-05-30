// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.billable_metrics',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/billable-metrics/archive',
  operationId: 'archiveBillableMetric-v1',
};

export const tool: Tool = {
  name: 'archive_v1_billable_metrics',
  description: 'Archive an existing billable metric.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.billableMetrics.archive(body);
};

export default { metadata, tool, handler };
