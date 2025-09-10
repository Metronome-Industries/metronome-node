// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/list',
  operationId: 'listContracts-v1',
};

export const tool: Tool = {
  name: 'list_v1_contracts',
  description:
    "Retrieves all contracts for a specific customer, including pricing, terms, credits, and commitments. Use this to view a customer's contract history and current agreements for billing management. Returns contract details with optional ledgers and balance information. \n\n⚠️ Note: This is the legacy v1 endpoint - new integrations should use the v2 endpoint for enhanced features.\n",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      covering_date: {
        type: 'string',
        description:
          'Optional RFC 3339 timestamp. If provided, the response will include only contracts effective on the provided date.  This cannot be provided if the starting_at filter is provided.',
        format: 'date-time',
      },
      include_archived: {
        type: 'boolean',
        description: 'Include archived contracts in the response',
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
      starting_at: {
        type: 'string',
        description:
          'Optional RFC 3339 timestamp. If provided, the response will include only contracts where effective_at is on or after the provided date.  This cannot be provided if the covering_date filter is provided.',
        format: 'date-time',
      },
    },
    required: ['customer_id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.contracts.list(body));
};

export default { metadata, tool, handler };
