// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/setUsageFilter',
  operationId: 'setUsageFilter-v1',
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
    required: ['contract_id', 'customer_id', 'group_key', 'group_values', 'starting_at'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.contracts.setUsageFilter(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
