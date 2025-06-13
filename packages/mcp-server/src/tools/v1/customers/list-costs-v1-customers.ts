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
  httpPath: '/v1/customers/{customer_id}/costs',
  operationId: 'getCosts-v1',
};

export const tool: Tool = {
  name: 'list_costs_v1_customers',
  description:
    'Fetch daily pending costs for the specified customer, broken down by credit type and line items. Note: this is not supported for customers whose plan includes a UNIQUE-type billable metric.',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      ending_before: {
        type: 'string',
        description: 'RFC 3339 timestamp (exclusive)',
        format: 'date-time',
      },
      starting_on: {
        type: 'string',
        description: 'RFC 3339 timestamp (inclusive)',
        format: 'date-time',
      },
      limit: {
        type: 'integer',
        description: 'Max number of results that should be returned',
      },
      next_page: {
        type: 'string',
        description: 'Cursor that indicates where the next page of results should start.',
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.customers.listCosts(body));
};

export default { metadata, tool, handler };
