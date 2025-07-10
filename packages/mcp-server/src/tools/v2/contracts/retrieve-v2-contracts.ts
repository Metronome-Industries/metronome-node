// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v2.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/contracts/get',
  operationId: 'getContract-v2',
};

export const tool: Tool = {
  name: 'retrieve_v2_contracts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a specific contract. New clients should use this endpoint rather than the v1 endpoint.\n",
  inputSchema: {
    type: 'object',
    properties: {
      contract_id: {
        type: 'string',
      },
      customer_id: {
        type: 'string',
      },
      as_of_date: {
        type: 'string',
        description:
          'Optional RFC 3339 timestamp. Return the contract as of this date. Cannot be used with include_ledgers parameter.',
        format: 'date-time',
      },
      include_balance: {
        type: 'boolean',
        description:
          'Include the balance of credits and commits in the response. Setting this flag may cause the query to be slower.',
      },
      include_ledgers: {
        type: 'boolean',
        description:
          'Include commit/credit ledgers in the response. Setting this flag may cause the query to be slower. Cannot be used with as_of_date parameter.',
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.contracts.retrieve(body));
};

export default { metadata, tool, handler };
