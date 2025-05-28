// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/customers/{customer_id}/updateConfig',
  operationId: 'updateCustomerConfig-v1',
};

export const tool: Tool = {
  name: 'update_config_v1_customers',
  description: "Updates the specified customer's config.\n",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      leave_stripe_invoices_in_draft: {
        type: 'boolean',
        description:
          'Leave in draft or set to auto-advance on invoices sent to Stripe. Falls back to the client-level config if unset, which defaults to true if unset.',
      },
      salesforce_account_id: {
        type: 'string',
        description: 'The Salesforce account ID for the customer',
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.customers.updateConfig(body);
};

export default { metadata, tool, handler };
