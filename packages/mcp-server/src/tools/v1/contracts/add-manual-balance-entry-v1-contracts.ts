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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdd a manual balance entry\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
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
