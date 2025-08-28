// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.invoices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/customers/{customer_id}/invoices',
  operationId: 'listInvoices-v1',
};

export const tool: Tool = {
  name: 'list_customers_v1_invoices',
  description:
    "Retrieves a paginated list of invoices for a specific customer, with flexible filtering options to narrow results by status, date range, credit type, and more. This endpoint provides a comprehensive view of a customer's billing history and current charges, supporting both real-time billing dashboards and historical reporting needs.\n\n### Use this endpoint to:\n- Display historical invoice details in customer-facing dashboards or billing portals.\n- Retrieve current month draft invoices to show customers their month-to-date spend.\n- Access finalized invoices for historical billing records and payment reconciliation.\n- Validate customer pricing and credit applications for customer support queries. \n- Generate financial reports by filtering invoices within specific date ranges\n\n### Key response fields:\nArray of invoice objects containing:\n- Invoice ID and status (DRAFT, FINALIZED, VOID)\n- Invoice type (USAGE, SCHEDULED)\n- Billing period start and end dates\n- Issue date and due date\n- Total amount, subtotal, and amount due\n- Applied credits summary\n- Contract ID reference\n- External billing provider status (if integrated with Stripe, etc.)\n- Pagination metadata next_page cursor\n\n### Usage guidelines:\n- The endpoint returns invoice summaries; use the Get Invoice endpoint for detailed line items\n- Draft invoices are continuously updated as new usage is reported and will show real-time spend\n- Results are ordered by creation date descending by default (newest first)\n- When filtering by date range, the filter applies to the billing period, not the issue date\n- For customers with many invoices, implement pagination to ensure all results are retrieved\nExternal billing provider statuses (like Stripe payment status) are included when applicable\n- Voided invoices are included in results by default unless filtered out by status\n",
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
    required: ['customer_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.customers.invoices.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
