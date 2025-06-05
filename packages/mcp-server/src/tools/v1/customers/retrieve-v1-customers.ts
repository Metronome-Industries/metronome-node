// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/customers/{customer_id}',
  operationId: 'getCustomer-v1',
};

export const tool: Tool = {
  name: 'retrieve_v1_customers',
  description: 'Get a customer by Metronome ID.',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.customers.retrieve(body));
};

export default { metadata, tool, handler };
