// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/scheduleProServicesInvoice',
  operationId: 'scheduleProServicesInvoice-v1',
};

export const tool: Tool = {
  name: 'schedule_pro_services_invoice_v1_contracts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new scheduled invoice for Professional Services terms on a contract. This endpoint's availability is dependent on your client's configuration.\n",
  inputSchema: {
    type: 'object',
    properties: {
      contract_id: {
        type: 'string',
      },
      customer_id: {
        type: 'string',
      },
      issued_at: {
        type: 'string',
        description: 'The date the invoice is issued',
        format: 'date-time',
      },
      line_items: {
        type: 'array',
        description: 'Each line requires an amount or both unit_price and quantity.',
        items: {
          type: 'object',
          description: 'Describes the line item for a professional service charge on an invoice.',
          properties: {
            professional_service_id: {
              type: 'string',
            },
            amendment_id: {
              type: 'string',
              description: 'If the professional_service_id was added on an amendment, this is required.',
            },
            amount: {
              type: 'number',
              description: 'Amount for the term on the new invoice.',
            },
            metadata: {
              type: 'string',
              description: 'For client use.',
            },
            netsuite_invoice_billing_end: {
              type: 'string',
              description: 'The end date for the billing period on the invoice.',
              format: 'date-time',
            },
            netsuite_invoice_billing_start: {
              type: 'string',
              description: 'The start date for the billing period on the invoice.',
              format: 'date-time',
            },
            quantity: {
              type: 'number',
              description:
                'Quantity for the charge. Will be multiplied by unit_price to determine the amount.',
            },
            unit_price: {
              type: 'number',
              description:
                'If specified, this overrides the unit price on the pro service term. Must also provide quantity (but not amount) if providing unit_price.',
            },
          },
          required: ['professional_service_id'],
        },
      },
      netsuite_invoice_header_end: {
        type: 'string',
        description: 'The end date of the invoice header in Netsuite',
        format: 'date-time',
      },
      netsuite_invoice_header_start: {
        type: 'string',
        description: 'The start date of the invoice header in Netsuite',
        format: 'date-time',
      },
    },
    required: ['contract_id', 'customer_id', 'issued_at', 'line_items'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.contracts.scheduleProServicesInvoice(body));
};

export default { metadata, tool, handler };
