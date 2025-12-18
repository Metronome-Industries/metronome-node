// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/addManualBalanceLedgerEntry',
  operationId: 'addManualBalanceLedgerEntry-v1',
};

export const tool: Tool = {
  name: 'add_manual_balance_entry_v1_contracts',
  description:
    'Manually adjust the available balance on a commit or credit. This entry is appended to the commit ledger as a new event. Optionally include a description that provides the reasoning for the entry.\n\n### Use this endpoint to:\n- Address incorrect usage burn-down caused by malformed usage or invalid config\n- Decrease available balance to account for outages where usage may have not been tracked or sent to Metronome\n- Issue credits to customers in the form of increased balance on existing commit or credit\n\n### Usage guidelines:\nManual ledger entries can be extremely useful for resolving discrepancies in Metronome. However, most corrections to inaccurate billings can be modified upstream of the commit, whether that is via contract editing, rate editing, or other actions that cause an invoice to be recalculated.\n',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the balance (commit or credit) to update.',
      },
      amount: {
        type: 'number',
        description: 'Amount to add to the segment. A negative number will draw down from the balance.',
      },
      customer_id: {
        type: 'string',
        description: 'ID of the customer whose balance is to be updated.',
      },
      reason: {
        type: 'string',
        description: 'Reason for the manual adjustment. This will be displayed in the ledger.',
      },
      segment_id: {
        type: 'string',
        description: 'ID of the segment to update.',
      },
      contract_id: {
        type: 'string',
        description: 'ID of the contract to update. Leave blank to update a customer level balance.',
      },
      per_group_amounts: {
        type: 'object',
        description:
          'If using individually configured commits/credits attached to seat managed subscriptions, the amount to add for each seat. Must sum to total amount.',
        additionalProperties: true,
      },
      timestamp: {
        type: 'string',
        description:
          'RFC 3339 timestamp indicating when the manual adjustment takes place. If not provided, it will default to the start of the segment.',
        format: 'date-time',
      },
    },
    required: ['id', 'amount', 'customer_id', 'reason', 'segment_id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.contracts.addManualBalanceEntry(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
