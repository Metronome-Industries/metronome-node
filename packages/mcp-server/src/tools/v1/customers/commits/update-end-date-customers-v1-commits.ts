// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPull forward the end date of a prepaid commit. Use the \"edit a commit\" endpoint to extend the end date of a prepaid commit, or to make other edits to the commit.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/id'\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    id: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        }\n      },\n      required: [        'id'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v1.customers.commits.updateEndDate(body)));
};

export default { metadata, tool, handler };
