// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@metronome/mcp/tools/types';

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
    'Retrieve granular time-series breakdowns of invoice data at hourly or daily intervals. This endpoint transforms standard invoices into detailed timelines, enabling you to track usage patterns, identify consumption spikes, and provide customers with transparency into their billing details throughout the billing period.\n\n### Use this endpoint to:\n- Build usage analytics dashboards showing daily or hourly consumption trends\n- Identify peak usage periods for capacity planning and cost optimization\n- Generate detailed billing reports for finance teams and customer success\n- Troubleshoot billing disputes by examining usage patterns at specific times\n- Power real-time cost monitoring and alerting systems\n\n### Key response fields:\nAn array of BreakdownInvoice objects, each containing:\n- All standard invoice fields (ID, customer, commit, line items, totals, status)\n- Line items with quantities and costs for that specific period\n- `breakdown_start_timestamp`: Start of the specific time window\n- `breakdown_end_timestamp`: End of the specific time window\n- `next_page`: Pagination cursor for large result sets\n\n### Usage guidelines:\n- Time granularity: Set `window_size` to hour or day based on your analysis needs\n- Response limits: Daily breakdowns return up to 35 days; hourly breakdowns return up to 24 hours per request\n- Date filtering: Use `starting_on` and `ending_before` to focus on specific periods\n- Performance: For large date ranges, use pagination to retrieve all data efficiently\n- Backdated usage: If usage events arrive after invoice finalization, breakdowns will reflect the updated usage\n- Zero quantity filtering: Use `skip_zero_qty_line_items=true` to exclude periods with no usage',
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
  try {
    return asTextContentResult(await response.json());
  } catch (error) {
    if (error instanceof Metronome.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
