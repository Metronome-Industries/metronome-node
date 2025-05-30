// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.commits',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/customerCommits/updateEndDate',
  operationId: 'updateCommitEndDate-v1',
};

export const tool: Tool = {
  name: 'update_end_date_customers_v1_commits',
  description:
    'Pull forward the end date of a prepaid commit. Use the "edit a commit" endpoint to extend the end date of a prepaid commit, or to make other edits to the commit.\n',
  inputSchema: {
    type: 'object',
    properties: {
      commit_id: {
        type: 'string',
        description: 'ID of the commit to update. Only supports "PREPAID" commits.',
      },
      customer_id: {
        type: 'string',
        description: 'ID of the customer whose commit is to be updated',
      },
      access_ending_before: {
        type: 'string',
        description:
          'RFC 3339 timestamp indicating when access to the commit will end and it will no longer be possible to draw it down (exclusive). If not provided, the access will not be updated.',
        format: 'date-time',
      },
      invoices_ending_before: {
        type: 'string',
        description:
          'RFC 3339 timestamp indicating when the commit will stop being invoiced (exclusive). If not provided, the invoice schedule will not be updated.',
        format: 'date-time',
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.customers.commits.updateEndDate(body);
};

export default { metadata, tool, handler };
