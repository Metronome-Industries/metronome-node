// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts.products',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contract-pricing/products/list',
  operationId: 'listProducts-v1',
};

export const tool: Tool = {
  name: 'list_contracts_v1_products',
  description: 'List products\n',
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
      archive_filter: {
        type: 'string',
        description: 'Filter options for the product list. If not provided, defaults to not archived.',
        enum: ['ARCHIVED', 'NOT_ARCHIVED', 'ALL'],
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.contracts.products.list(body);
};

export default { metadata, tool, handler };
