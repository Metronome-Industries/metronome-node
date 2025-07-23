// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.commits',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/customerCommits/list',
  operationId: 'listCustomerCommits-v1',
};

export const tool: Tool = {
  name: 'list_customers_v1_commits',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList commits.\n",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      commit_id: {
        type: 'string',
      },
      covering_date: {
        type: 'string',
        description: 'Include only commits that have access schedules that "cover" the provided date',
        format: 'date-time',
      },
      effective_before: {
        type: 'string',
        description: 'Include only commits that have any access before the provided date (exclusive)',
        format: 'date-time',
      },
      include_archived: {
        type: 'boolean',
        description: 'Include archived commits and commits from archived contracts.',
      },
      include_balance: {
        type: 'boolean',
        description:
          'Include the balance in the response. Setting this flag may cause the query to be slower.',
      },
      include_contract_commits: {
        type: 'boolean',
        description: 'Include commits on the contract level.',
      },
      include_ledgers: {
        type: 'boolean',
        description:
          'Include commit ledgers in the response. Setting this flag may cause the query to be slower.',
      },
      next_page: {
        type: 'string',
        description: 'The next page token from a previous response.',
      },
      starting_at: {
        type: 'string',
        description: 'Include only commits that have any access on or after the provided date',
        format: 'date-time',
      },
    },
    required: ['customer_id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.customers.commits.list(body));
};

export default { metadata, tool, handler };
