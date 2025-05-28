// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
  description: 'Add a manual balance entry\n',
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
      timestamp: {
        type: 'string',
        description:
          'RFC 3339 timestamp indicating when the manual adjustment takes place. If not provided, it will default to the start of the segment.',
        format: 'date-time',
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.contracts.addManualBalanceEntry(body);
};

export default { metadata, tool, handler };
