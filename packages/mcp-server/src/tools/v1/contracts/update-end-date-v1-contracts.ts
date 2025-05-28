// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/updateEndDate',
  operationId: 'updateContractEndDate-v1',
};

export const tool: Tool = {
  name: 'update_end_date_v1_contracts',
  description: 'Update the end date of a contract\n',
  inputSchema: {
    type: 'object',
    properties: {
      contract_id: {
        type: 'string',
        description: 'ID of the contract to update',
      },
      customer_id: {
        type: 'string',
        description: 'ID of the customer whose contract is to be updated',
      },
      allow_ending_before_finalized_invoice: {
        type: 'boolean',
        description:
          'If true, allows setting the contract end date earlier than the end_timestamp of existing finalized invoices. Finalized invoices will be unchanged; if you want to incorporate the new end date, you can void and regenerate finalized usage invoices. Defaults to true.',
      },
      ending_before: {
        type: 'string',
        description:
          'RFC 3339 timestamp indicating when the contract will end (exclusive). If not provided, the contract will be updated to be open-ended.',
        format: 'date-time',
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.contracts.updateEndDate(body);
};

export default { metadata, tool, handler };
