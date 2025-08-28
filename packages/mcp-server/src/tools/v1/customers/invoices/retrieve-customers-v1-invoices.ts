// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.invoices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/customers/{customer_id}/invoices/{invoice_id}',
  operationId: 'getInvoice-v1',
};

export const tool: Tool = {
  name: 'retrieve_customers_v1_invoices',
  description:
    'Retrieve detailed information for a specific invoice by its unique identifier. This endpoint returns comprehensive invoice data including line items, applied credits, totals, and billing period details for both finalized and draft invoices.\n\n### Use this endpoint to:\n- Display historical invoice details in customer-facing dashboards or billing portals.\n- Retrieve current month draft invoices to show customers their month-to-date spend.\n- Access finalized invoices for historical billing records and payment reconciliation.\n- Validate customer pricing and credit applications for customer support queries. \n\n### Key response fields: \nInvoice status (DRAFT, FINALIZED, VOID)\nBilling period start and end dates\nTotal amount and amount due after credits\nDetailed line items broken down by:\n- Customer and contract information\n- Invoice line item type\n- Product/service name and ID\n- Quantity consumed\n- Unit and total price \n- Time period for usage-based charges\n- Applied credits or prepaid commitments\n\n\n### Usage guidelines:\n- Draft invoices update in real-time as usage is reported and may change before finalization\n- The response includes both usage-based line items (e.g., API calls, data processed) and scheduled charges (e.g., monthly subscriptions, commitment fees)\n- Credit and commitment applications are shown as separate line items with negative amounts\n- For voided invoices, the response will indicate VOID status but retain all original line item details\n',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      invoice_id: {
        type: 'string',
      },
      skip_zero_qty_line_items: {
        type: 'boolean',
        description: 'If set, all zero quantity line items will be filtered out of the response',
      },
    },
    required: ['customer_id', 'invoice_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.customers.invoices.retrieve(body));
};

export default { metadata, tool, handler };
