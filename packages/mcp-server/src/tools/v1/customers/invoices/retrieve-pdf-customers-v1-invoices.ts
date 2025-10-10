// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.invoices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/customers/{customer_id}/invoices/{invoice_id}/pdf',
  operationId: 'getInvoicePdf-v1',
};

export const tool: Tool = {
  name: 'retrieve_pdf_customers_v1_invoices',
  description:
    'Retrieve a PDF version of a specific invoice by its unique identifier. This endpoint generates a professionally formatted invoice document suitable for sharing with customers, accounting teams, or for record-keeping purposes.\n\n### Use this endpoint to:\n- Provide customers with downloadable or emailable copies of their invoices\n- Support accounting and finance teams with official billing documents\n- Maintain accurate records of billing transactions for audits and compliance\n\n### Key response details:\n- The response is a binary PDF file representing the full invoice\n- The PDF includes all standard invoice information such as line items, totals, billing period, and customer details\n- The document is formatted for clarity and professionalism, suitable for official use\n\n### Usage guidelines:\n- Ensure the `invoice_id` corresponds to an existing invoice for the specified `customer_id`\n- The PDF is generated on-demand; frequent requests for the same invoice may impact performance\n- Use appropriate headers to handle the binary response in your application (e.g., setting `Content-Type: application/pdf`)\n',
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      invoice_id: {
        type: 'string',
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
  return asBinaryContentResult(await client.v1.customers.invoices.retrievePdf(body));
};

export default { metadata, tool, handler };
