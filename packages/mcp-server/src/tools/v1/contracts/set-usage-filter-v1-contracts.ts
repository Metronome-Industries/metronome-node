// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'set_usage_filter_v1_contracts',
  description: 'Set usage filter for a contract\n',
  inputSchema: {
    type: 'object',
    properties: {
      contract_id: {
        type: 'string',
      },
      customer_id: {
        type: 'string',
      },
      group_key: {
        type: 'string',
      },
      group_values: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      starting_at: {
        type: 'string',
        format: 'date-time',
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.contracts.setUsageFilter(body);
};

export default { metadata, tool, handler };
