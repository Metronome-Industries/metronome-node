// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "Gets the details for a specific contract, including contract term, rate card information, credits and commits, and more. \n\nUse this endpoint to: \n- Check the duration of a customer's current contract\n- Get details on contract terms, including access schedule amounts for commitments and credits\n- Understand the state of a contract at a past time. As you can evolve the terms of a contract over time through editing, use the as_of_date parameter to view the full contract configuration as of that point in time. \n\nUsage guidelines: \n- Optionally, use the include_balance and include_ledger fields to include balances and ledgers in the credit and commit responses. Using these fields will cause the query to be slower.\n",
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
    required: ['contract_id', 'customer_id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.contracts.retrieve(body));
};

export default { metadata, tool, handler };
