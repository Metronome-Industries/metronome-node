// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v2.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/contracts/list',
  operationId: 'listContracts-v2',
};

export const tool: Tool = {
  name: 'list_v2_contracts',
  description:
    "For a given customer, lists all of their contracts in chronological order. \n\nUse this endpoint to:\n- Check if a customer is provisioned with any contract, and at which tier\n- Check the duration and terms of a customer's current contract\n- Power a page in your end customer experience that shows the customer's history of tiers (e.g. this customer started out on the Pro Plan, then downgraded to the Starter plan).\n\nUsage guidelines:\\\nUse the starting_at, covering_date, and include_archived parameters to filter the list of returned contracts. For example, to list only currently active contracts, pass covering_date equal to the current time.\n",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      covering_date: {
        type: 'string',
        description:
          'Optional RFC 3339 timestamp. Only include contracts active on the provided date. This cannot be provided if starting_at filter is provided.',
        format: 'date-time',
      },
      include_archived: {
        type: 'boolean',
        description: 'Include archived contracts in the response.',
      },
      include_balance: {
        type: 'boolean',
        description:
          'Include the balance of credits and commits in the response. Setting this flag may cause the response to be slower.',
      },
      include_ledgers: {
        type: 'boolean',
        description:
          'Include commit/credit ledgers in the response. Setting this flag may cause the response to be slower.',
      },
      starting_at: {
        type: 'string',
        description:
          'Optional RFC 3339 timestamp. Only include contracts that started on or after this date. This cannot be provided if covering_date filter is provided.',
        format: 'date-time',
      },
    },
    required: ['customer_id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.contracts.list(body));
};

export default { metadata, tool, handler };
