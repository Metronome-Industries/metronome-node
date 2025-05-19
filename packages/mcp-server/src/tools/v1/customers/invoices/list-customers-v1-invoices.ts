// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.invoices',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_customers_v1_invoices',
  description:
    'List all invoices for a given customer, optionally filtered by status, date range, and/or credit type.',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      credit_type_id: {
        type: 'string',
        description: 'Only return invoices for the specified credit type',
      },
      ending_before: {
        type: 'string',
        description:
          'RFC 3339 timestamp (exclusive). Invoices will only be returned for billing periods that end before this time.',
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
      skip_zero_qty_line_items: {
        type: 'boolean',
        description: 'If set, all zero quantity line items will be filtered out of the response',
      },
      sort: {
        type: 'string',
        description: 'Invoice sort order by issued_at, e.g. date_asc or date_desc.  Defaults to date_asc.',
        enum: ['date_asc', 'date_desc'],
      },
      starting_on: {
        type: 'string',
        description:
          'RFC 3339 timestamp (inclusive). Invoices will only be returned for billing periods that start at or after this time.',
        format: 'date-time',
      },
      status: {
        type: 'string',
        description: 'Invoice status, e.g. DRAFT, FINALIZED, or VOID',
      },
    },
  },
};

export const handler = (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.v1.customers.invoices.list(body);
};

export default { metadata, tool, handler };
