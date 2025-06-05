// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.alerts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/customer-alerts/get',
  operationId: 'getCustomerAlert-v1',
};

export const tool: Tool = {
  name: 'retrieve_customers_v1_alerts',
  description: 'Get the customer alert status and alert information for the specified customer and alert',
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
      plans_or_contracts: {
        type: 'string',
        description:
          'When parallel alerts are enabled during migration, this flag denotes whether to fetch alerts for plans or contracts.',
        enum: ['PLANS', 'CONTRACTS'],
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.customers.alerts.retrieve(body));
};

export default { metadata, tool, handler };
