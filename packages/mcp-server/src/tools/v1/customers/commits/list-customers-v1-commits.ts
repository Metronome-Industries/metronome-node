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
    'Retrieve all commit agreements for a customer, including both prepaid and postpaid commitments. This endpoint provides comprehensive visibility into contractual spending obligations, enabling you to track commitment utilization and manage customer contracts effectively.\n\nUse this endpoint to:\n- Display commitment balances and utilization in customer dashboards\n- Track prepaid commitment drawdown and remaining balances\n- Monitor postpaid commitment progress toward minimum thresholds\n- Build commitment tracking and forecasting tools\n- Show commitment history with optional ledger details\n- Manage rollover balances between contract periods\n\nKey response fields:\nAn array of Commit objects containing:\n- Commit type: PREPAID (pay upfront) or POSTPAID (pay at true-up)\n- Rate type: COMMIT_RATE (discounted) or LIST_RATE (standard pricing)\n- Access schedule: When commitment funds become available\n- Invoice schedule: When the customer is billed\n- Product targeting: Which product(s) usage is eligible to draw from this commit\n- Optional ledger entries: Transaction history (if include_ledgers=true)\n- Balance information: Current available amount (if include_balance=true)\n- Rollover settings: Fraction of unused amount that carries forward\n\nUsage guidelines:\n- Pagination: Results limited to 25 commits per page; use next_page for more\n- Date filtering options:\n    - covering_date: Commits active on a specific date\n    - starting_at: Commits with access on/after a date\n    - effective_before: Commits with access before a date (exclusive)\n- Scope options:\n    - include_contract_commits: Include contract-level commits (not just customer-level)\n    - include_archived: Include archived commits and commits from archived contracts\n- Performance considerations:\n    - include_ledgers: Adds detailed transaction history (slower)\n    - include_balance: Adds current balance calculation (slower)\n- Optional filtering: Use commit_id to retrieve a specific commit\n',
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
  const response = await client.v1.customers.commits.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
