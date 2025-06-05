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
  httpPath: '/v1/credits/listGrants',
  operationId: 'listGrants-v1',
};

export const tool: Tool = {
  name: 'list_v1_credit_grants',
  description: 'List credit grants. This list does not included voided grants.',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'Max number of results that should be returned',
      },
      next_page: {
        type: 'string',
        description: 'Cursor that indicates where the next page of results should start.',
      },
      credit_grant_ids: {
        type: 'array',
        description:
          'An array of credit grant IDs. If this is specified, neither credit_type_ids nor customer_ids may be specified.',
        items: {
          type: 'string',
        },
      },
      credit_type_ids: {
        type: 'array',
        description:
          'An array of credit type IDs. This must not be specified if credit_grant_ids is specified.',
        items: {
          type: 'string',
        },
      },
      customer_ids: {
        type: 'array',
        description:
          'An array of Metronome customer IDs. This must not be specified if credit_grant_ids is specified.',
        items: {
          type: 'string',
        },
      },
      effective_before: {
        type: 'string',
        description: 'Only return credit grants that are effective before this timestamp (exclusive).',
        format: 'date-time',
      },
      not_expiring_before: {
        type: 'string',
        description: 'Only return credit grants that expire at or after this timestamp.',
        format: 'date-time',
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.creditGrants.list(body));
};

export default { metadata, tool, handler };
