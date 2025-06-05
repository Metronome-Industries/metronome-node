// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/archive',
  operationId: 'archiveContract-v1',
};

export const tool: Tool = {
  name: 'archive_v1_contracts',
  description: 'Archive a contract',
  inputSchema: {
    type: 'object',
    properties: {
      contract_id: {
        type: 'string',
        description: 'ID of the contract to archive',
      },
      customer_id: {
        type: 'string',
        description: 'ID of the customer whose contract is to be archived',
      },
      void_invoices: {
        type: 'boolean',
        description: 'If false, the existing finalized invoices will remain after the contract is archived.',
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.contracts.archive(body));
};

export default { metadata, tool, handler };
