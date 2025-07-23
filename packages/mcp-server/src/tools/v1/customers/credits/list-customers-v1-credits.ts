// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.credits',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/customerCredits/list',
  operationId: 'listCustomerCredits-v1',
};

export const tool: Tool = {
  name: 'list_customers_v1_credits',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList credits.\n",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      covering_date: {
        type: 'string',
        description: 'Return only credits that have access schedules that "cover" the provided date',
        format: 'date-time',
      },
      credit_id: {
        type: 'string',
      },
      effective_before: {
        type: 'string',
        description: 'Include only credits that have any access before the provided date (exclusive)',
        format: 'date-time',
      },
      include_archived: {
        type: 'boolean',
        description: 'Include archived credits and credits from archived contracts.',
      },
      include_balance: {
        type: 'boolean',
        description:
          'Include the balance in the response. Setting this flag may cause the query to be slower.',
      },
      include_contract_credits: {
        type: 'boolean',
        description: 'Include credits on the contract level.',
      },
      include_ledgers: {
        type: 'boolean',
        description:
          'Include credit ledgers in the response. Setting this flag may cause the query to be slower.',
      },
      next_page: {
        type: 'string',
        description: 'The next page token from a previous response.',
      },
      starting_at: {
        type: 'string',
        description: 'Include only credits that have any access on or after the provided date',
        format: 'date-time',
      },
    },
    required: ['customer_id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.customers.credits.list(body));
};

export default { metadata, tool, handler };
