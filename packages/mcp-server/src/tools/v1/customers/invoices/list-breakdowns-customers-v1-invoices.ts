// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.invoices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/customers/{customer_id}/invoices/breakdowns',
  operationId: 'listBreakdownInvoices-v1',
};

export const tool: Tool = {
  name: 'list_breakdowns_customers_v1_invoices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList daily or hourly invoice breakdowns for a given customer, optionally filtered by status, date range, and/or credit type.\nImportant considerations:\n- If we receive backdated usage after an invoice has been finalized, the backdated usage will be included in the response and usage numbers may differ.",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      ending_before: {
        type: 'string',
        description:
          'RFC 3339 timestamp. Breakdowns will only be returned for time windows that end on or before this time.',
        format: 'date-time',
      },
      starting_on: {
        type: 'string',
        description:
          'RFC 3339 timestamp. Breakdowns will only be returned for time windows that start on or after this time.',
        format: 'date-time',
      },
      credit_type_id: {
        type: 'string',
        description: 'Only return invoices for the specified credit type',
      },
      limit: {
        type: 'integer',
        description:
          'Max number of results that should be returned. For daily breakdowns, the response can return up to 35 days worth of breakdowns. For hourly breakdowns, the response can return up to 24 hours. If there are more results, a cursor to the next page is returned.',
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
      status: {
        type: 'string',
        description: 'Invoice status, e.g. DRAFT or FINALIZED',
      },
      window_size: {
        type: 'string',
        description: 'The granularity of the breakdowns to return. Defaults to day.',
        enum: ['HOUR', 'DAY'],
      },
    },
    required: ['customer_id', 'ending_before', 'starting_on'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.customers.invoices.listBreakdowns(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
