// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.credit_grants',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/credits/editGrant',
  operationId: 'editGrant-v1',
};

export const tool: Tool = {
  name: 'edit_v1_credit_grants',
  description: 'Edit an existing credit grant',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'the ID of the credit grant',
      },
      credit_grant_type: {
        type: 'string',
        description: 'the updated credit grant type',
      },
      expires_at: {
        type: 'string',
        description: 'the updated expiration date for the credit grant',
        format: 'date-time',
      },
      name: {
        type: 'string',
        description: 'the updated name for the credit grant',
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.creditGrants.edit(body));
};

export default { metadata, tool, handler };
