// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.alerts',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'reset_customers_v1_alerts',
  description: 'Reset state for an alert by customer id and force re-evaluation',
  inputSchema: {
    type: 'object',
    properties: {
      alert_id: {
        type: 'string',
        description: 'The Metronome ID of the alert',
      },
      customer_id: {
        type: 'string',
        description: 'The Metronome ID of the customer',
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.customers.alerts.reset(body);
};

export default { metadata, tool, handler };
