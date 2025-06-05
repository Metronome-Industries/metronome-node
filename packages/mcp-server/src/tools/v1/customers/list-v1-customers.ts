// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/customers',
  operationId: 'listCustomers-v1',
};

export const tool: Tool = {
  name: 'list_v1_customers',
  description: 'List all customers.',
  inputSchema: {
    type: 'object',
    properties: {
      customer_ids: {
        type: 'array',
        description: 'Filter the customer list by customer_id.  Up to 100 ids can be provided.',
        items: {
          type: 'string',
        },
      },
      ingest_alias: {
        type: 'string',
        description: 'Filter the customer list by ingest_alias',
      },
      limit: {
        type: 'integer',
        description: 'Max number of results that should be returned',
      },
      next_page: {
        type: 'string',
        description: 'Cursor that indicates where the next page of results should start.',
      },
      only_archived: {
        type: 'boolean',
        description:
          'Filter the customer list to only return archived customers. By default, only active customers are returned.',
      },
      salesforce_account_ids: {
        type: 'array',
        description: 'Filter the customer list by salesforce_account_id.  Up to 100 ids can be provided.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.customers.list(body));
};

export default { metadata, tool, handler };
