// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'set_name_v1_customers',
  description: "Updates the specified customer's name.\n",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      name: {
        type: 'string',
        description:
          'The new name for the customer. This will be truncated to 160 characters if the provided name is longer.',
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.customers.setName(body);
};

export default { metadata, tool, handler };
