// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v2.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v2/contracts/getEditHistory',
  operationId: 'getContractEditHistory-v2',
};

export const tool: Tool = {
  name: 'get_edit_history_v2_contracts',
  description:
    "List all the edits made to a contract over time. In Metronome, you can edit a contract at any point after it's created to fix mistakes or reflect changes in terms. Metronome stores a full history of all edits that were ever made to a contract, whether through the UI, `editContract` endpoint, or other endpoints like `updateContractEndDate`. \n\n### Use this endpoint to: \n- Understand what changes were made to a contract, when, and by who\n\n### Key response fields: \n- An array of every edit ever made to the contract\n- Details on each individual edit - for example showing that in one edit, a user added two discounts and incremented a subscription quantity.\n",
  inputSchema: {
    type: 'object',
    properties: {
      contract_id: {
        type: 'string',
      },
      customer_id: {
        type: 'string',
      },
    },
    required: ['contract_id', 'customer_id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v2.contracts.getEditHistory(body));
};

export default { metadata, tool, handler };
