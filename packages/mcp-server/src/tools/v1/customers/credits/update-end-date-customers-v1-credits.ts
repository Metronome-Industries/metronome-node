// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.credits',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/customerCredits/updateEndDate',
  operationId: 'updateCreditEndDate-v1',
};

export const tool: Tool = {
  name: 'update_end_date_customers_v1_credits',
  description:
    'Pull forward the end date of a credit. Use the "edit a credit" endpoint to extend the end date of a credit, or to make other edits to the credit.\n',
  inputSchema: {
    type: 'object',
    properties: {
      access_ending_before: {
        type: 'string',
        description:
          'RFC 3339 timestamp indicating when access to the credit will end and it will no longer be possible to draw it down (exclusive).',
        format: 'date-time',
      },
      credit_id: {
        type: 'string',
        description: 'ID of the commit to update',
      },
      customer_id: {
        type: 'string',
        description: 'ID of the customer whose credit is to be updated',
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.customers.credits.updateEndDate(body));
};

export default { metadata, tool, handler };
