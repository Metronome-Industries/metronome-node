// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.invoices',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/invoices/void',
  operationId: 'voidInvoice-v1',
};

export const tool: Tool = {
  name: 'void_v1_invoices',
  description: 'Void an invoice',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The invoice id to void',
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.invoices.void(body));
};

export default { metadata, tool, handler };
