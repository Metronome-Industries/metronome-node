// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/customerBalances/list',
  operationId: 'listCustomerBalances-v1',
};

export const tool: Tool = {
  name: 'list_balances_v1_contracts',
  description:
    'Retrieve a comprehensive view of all available balances (commits and credits) for a customer. This endpoint provides real-time visibility into prepaid funds, postpaid commitments, promotional credits, and other balance types that can offset usage charges, helping you build transparent billing experiences.\n\n### Use this endpoint to:\n- Display current available balances in customer dashboards\n- Verify available funds before approving high-usage operations\n- Generate balance reports for finance teams\n- Filter balances by contract or date ranges\n\n### Key response fields:\nAn array of balance objects (all credits and commits) containing:\n\n- Balance details: Current available amount for each commit or credit\n- Metadata: Product associations, priorities, applicable date ranges\n- Optional ledger entries: Detailed transaction history (if `include_ledgers=true`)\n- Balance calculations: Including pending transactions and future-dated entries\n- Custom fields: Any additional metadata attached to balances\n\n### Usage guidelines:\n- Date filtering: Use `effective_before` to include only balances with access before a specific date (exclusive)\n- Set `include_balance=true` for calculated balance amounts on each commit or credit\n- Set `include_ledgers=true` for full transaction history\n- Set `include_contract_balances = true` to see contract level balances\n- Balance logic: Reflects currently accessible amounts, excluding expired/future segments\n- Manual adjustments: Includes all manual ledger entries, even future-dated ones\n',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      covering_date: {
        type: 'string',
        description: 'Return only balances that have access schedules that "cover" the provided date',
        format: 'date-time',
      },
      effective_before: {
        type: 'string',
        description: 'Include only balances that have any access before the provided date (exclusive)',
        format: 'date-time',
      },
      exclude_zero_balances: {
        type: 'boolean',
        description: 'Exclude balances with zero amounts from the response.',
      },
      include_archived: {
        type: 'boolean',
        description: 'Include archived credits and credits from archived contracts.',
      },
      include_balance: {
        type: 'boolean',
        description:
          'Include the balance of credits and commits in the response. Setting this flag may cause the query to be slower.',
      },
      include_contract_balances: {
        type: 'boolean',
        description: 'Include balances on the contract level.',
      },
      include_ledgers: {
        type: 'boolean',
        description: 'Include ledgers in the response. Setting this flag may cause the query to be slower.',
      },
      limit: {
        type: 'integer',
        description: 'The maximum number of commits to return. Defaults to 25.',
      },
      next_page: {
        type: 'string',
        description: 'The next page token from a previous response.',
      },
      starting_at: {
        type: 'string',
        description: 'Include only balances that have any access on or after the provided date',
        format: 'date-time',
      },
    },
    required: ['customer_id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.contracts.listBalances(body).asResponse();
  try {
    return asTextContentResult(await response.json());
  } catch (error) {
    if (error instanceof Metronome.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
