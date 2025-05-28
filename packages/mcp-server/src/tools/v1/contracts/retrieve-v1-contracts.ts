// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/get',
  operationId: 'getContract-v1',
};

export const tool: Tool = {
  name: 'retrieve_v1_contracts',
  description:
    'This is the v1 endpoint to get a contract. New clients should implement using the v2 endpoint.\n',
  inputSchema: {
    type: 'object',
    properties: {
      contract_id: {
        type: 'string',
      },
      customer_id: {
        type: 'string',
      },
      include_balance: {
        type: 'boolean',
        description:
          'Include the balance of credits and commits in the response. Setting this flag may cause the query to be slower.',
      },
      include_ledgers: {
        type: 'boolean',
        description:
          'Include commit ledgers in the response. Setting this flag may cause the query to be slower.',
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.contracts.retrieve(body);
};

export default { metadata, tool, handler };
