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
    'Retrieve a detailed list of all credits available to a customer, including promotional credits and contract-specific credits. This endpoint provides comprehensive visibility into credit balances, access schedules, and usage rules, enabling you to build credit management interfaces and track available funding.\n\nUse this endpoint to:\n- Display all available credits in customer billing dashboards\n- Show credit balances and expiration dates\n- Track credit usage history with optional ledger details\n- Build credit management and reporting tools\n- Monitor promotional credit utilization\n• Support customer inquiries about available credits\n\nKey response fields:\nAn array of Credit objects containing:\n- Credit details: Name, priority, and which applicable products/tags it applies to\n- Product ID: The product_id of the credit. This is for external mapping into your quote-to-cash stack, not the product it applies to. \n- Access schedule: When credits become available and expire\n- Optional ledger entries: Transaction history (if include_ledgers=true)\n- Balance information: Current available amount (if include_balance=true)\n- Metadata: Custom fields and usage specifiers\n\nUsage guidelines:\n- Pagination: Results limited to 25 commits per page; use next_page for more\n- Date filtering options:\n    - covering_date: Credits active on a specific date\n    - starting_at: Credits with access on/after a date\n    - effective_before: Credits with access before a date (exclusive)\n- Scope options:\n    - include_contract_credits: Include contract-level credits (not just customer-level)\n    - include_archived: Include archived credits and credits from archived contracts\n- Performance considerations:\n    - include_ledgers: Adds detailed transaction history (slower)\n    - include_balance: Adds current balance calculation (slower)\n- Optional filtering: Use credit_id to retrieve a specific commit\n',
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
  const response = await client.v1.customers.credits.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
