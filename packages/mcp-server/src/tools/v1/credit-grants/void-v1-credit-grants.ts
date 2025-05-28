// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.credit_grants',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/credits/voidGrant',
  operationId: 'voidGrant-v1',
};

export const tool: Tool = {
  name: 'void_v1_credit_grants',
  description: 'Void a credit grant',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      release_uniqueness_key: {
        type: 'boolean',
        description: 'If true, resets the uniqueness key on this grant so it can be re-used',
      },
      void_credit_purchase_invoice: {
        type: 'boolean',
        description: 'If true, void the purchase invoice associated with the grant',
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.creditGrants.void(body);
};

export default { metadata, tool, handler };
