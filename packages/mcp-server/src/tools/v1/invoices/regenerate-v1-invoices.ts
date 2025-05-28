// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
  description: 'Regenerate a voided contract invoice',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The invoice id to regenerate',
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.invoices.regenerate(body);
};

export default { metadata, tool, handler };
