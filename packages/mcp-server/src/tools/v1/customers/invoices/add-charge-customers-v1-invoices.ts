// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers.invoices',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/customers/{customer_id}/addCharge',
  operationId: 'addOneTimeCharge-v1',
};

export const tool: Tool = {
  name: 'add_charge_customers_v1_invoices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdd a one time charge to the specified invoice\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {},\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      charge_id: {
        type: 'string',
        description:
          'The Metronome ID of the charge to add to the invoice. Note that the charge must be on a product that is not on the current plan, and the product must have only fixed charges.',
      },
      customer_plan_id: {
        type: 'string',
        description: 'The Metronome ID of the customer plan to add the charge to.',
      },
      description: {
        type: 'string',
      },
      invoice_start_timestamp: {
        type: 'string',
        description: 'The start_timestamp of the invoice to add the charge to.',
        format: 'date-time',
      },
      price: {
        type: 'number',
        description:
          'The price of the charge. This price will match the currency on the invoice, e.g. USD cents.',
      },
      quantity: {
        type: 'number',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v1.customers.invoices.addCharge(body)));
};

export default { metadata, tool, handler };
