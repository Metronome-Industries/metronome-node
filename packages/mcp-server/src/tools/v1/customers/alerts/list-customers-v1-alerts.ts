// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.alerts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/customer-alerts/list',
  operationId: 'listCustomerAlerts-v1',
};

export const tool: Tool = {
  name: 'list_customers_v1_alerts',
  description: 'Fetch all customer alert statuses and alert information for a customer',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
        description: 'The Metronome ID of the customer',
      },
      next_page: {
        type: 'string',
        description: 'Cursor that indicates where the next page of results should start.',
      },
      alert_statuses: {
        type: 'array',
        description: 'Optionally filter by alert status. If absent, only enabled alerts will be returned.',
        items: {
          type: 'string',
          enum: ['ENABLED', 'DISABLED', 'ARCHIVED'],
        },
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.customers.alerts.list(body);
};

export default { metadata, tool, handler };
