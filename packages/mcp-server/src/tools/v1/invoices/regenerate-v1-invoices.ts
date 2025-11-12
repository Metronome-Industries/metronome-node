// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.invoices',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/invoices/regenerate',
  operationId: 'regenerateInvoice-v1',
};

export const tool: Tool = {
  name: 'regenerate_v1_invoices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint regenerates a voided invoice and recalculates the invoice based on up-to-date rates, available balances, and other fees regardless of the billing period.\n\n### Use this endpoint to:\nRecalculate an invoice with updated rate terms, available balance, and fees to correct billing disputes or discrepancies\n\n### Key response fields:\nThe regenerated invoice id, which is distinct from the previously voided invoice.\n\n### Usage guidelines:\nIf an invoice is attached to a contract with a billing provider on it, the regenerated invoice will be distributed based on the configuration.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/invoice_regenerate_response',\n  $defs: {\n    invoice_regenerate_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'The new invoice id'\n            }\n          },\n          required: [            'id'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The invoice id to regenerate',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.v1.invoices.regenerate(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
