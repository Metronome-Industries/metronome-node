// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/createHistoricalInvoices',
  operationId: 'createHistoricalContractUsageInvoices-v1',
};

export const tool: Tool = {
  name: 'create_historical_invoices_v1_contracts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates historical usage invoices for a contract",
  inputSchema: {
    type: 'object',
    properties: {
      invoices: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            contract_id: {
              type: 'string',
            },
            credit_type_id: {
              type: 'string',
            },
            customer_id: {
              type: 'string',
            },
            exclusive_end_date: {
              type: 'string',
              format: 'date-time',
            },
            inclusive_start_date: {
              type: 'string',
              format: 'date-time',
            },
            issue_date: {
              type: 'string',
              format: 'date-time',
            },
            usage_line_items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  exclusive_end_date: {
                    type: 'string',
                    format: 'date-time',
                  },
                  inclusive_start_date: {
                    type: 'string',
                    format: 'date-time',
                  },
                  product_id: {
                    type: 'string',
                  },
                  presentation_group_values: {
                    type: 'object',
                  },
                  pricing_group_values: {
                    type: 'object',
                  },
                  quantity: {
                    type: 'number',
                  },
                  subtotals_with_quantity: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        exclusive_end_date: {
                          type: 'string',
                          format: 'date-time',
                        },
                        inclusive_start_date: {
                          type: 'string',
                          format: 'date-time',
                        },
                        quantity: {
                          type: 'number',
                        },
                      },
                      required: ['exclusive_end_date', 'inclusive_start_date', 'quantity'],
                    },
                  },
                },
                required: ['exclusive_end_date', 'inclusive_start_date', 'product_id'],
              },
            },
            billable_status: {
              type: 'string',
              description: "This field's availability is dependent on your client's configuration.",
              enum: ['billable', 'unbillable'],
            },
            breakdown_granularity: {
              type: 'string',
              enum: ['HOUR', 'DAY'],
            },
            custom_fields: {
              type: 'object',
            },
          },
          required: [
            'contract_id',
            'credit_type_id',
            'customer_id',
            'exclusive_end_date',
            'inclusive_start_date',
            'issue_date',
            'usage_line_items',
          ],
        },
      },
      preview: {
        type: 'boolean',
      },
    },
    required: ['invoices', 'preview'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.contracts.createHistoricalInvoices(body));
};

export default { metadata, tool, handler };
