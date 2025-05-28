// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/customers/{customer_id}/billable-metrics',
  operationId: 'listBillableMetrics-v1',
};

export const tool: Tool = {
  name: 'list_billable_metrics_v1_customers',
  description: 'Get all billable metrics for a given customer.',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
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
      on_current_plan: {
        type: 'boolean',
        description:
          "If true, the list of metrics will be filtered to just ones that are on the customer's current plan",
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.customers.listBillableMetrics(body);
};

export default { metadata, tool, handler };
